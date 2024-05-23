import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { numberToHex } from "viem";
import { polygonZkEvmCardona } from 'wagmi/chains'

export interface UserWalletState {
    provider: ethers.providers.Web3Provider | null,
    signer: ethers.Signer | null,
    address: string | null,
    error: string | null,
    loading: boolean
}

const initialState: UserWalletState = {
    provider: null,
    signer: null,
    address: null,
    error: null,
    loading: false
}

export const connectWallet = createAsyncThunk("connect_with_metamask", async (_, { rejectWithValue }) => {
    try {
        if (typeof window.ethereum != "undefined") {

            const defaultChainParams = {
                chainId: numberToHex(polygonZkEvmCardona.id),
                chainName: polygonZkEvmCardona.name,
                nativeCurrency: {
                    name: polygonZkEvmCardona.nativeCurrency.name,
                    symbol: polygonZkEvmCardona.nativeCurrency.symbol,
                    decimals: polygonZkEvmCardona.nativeCurrency.decimals,
                },
                rpcUrls: polygonZkEvmCardona.rpcUrls.default.http,
                blockExplorerUrls: [polygonZkEvmCardona.blockExplorers.default.url],
            };

            const userChainId = await window.ethereum.request({ method: "eth_chainId" });

            if (userChainId != defaultChainParams.chainId) {
                const chain = await (window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [defaultChainParams],
                }).then(() => true).catch(() => false));

                if (!chain) {
                    return rejectWithValue("Failed to switch chain");
                }
            }

            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();

            return { provider, signer, address };
        }
    } catch (error) {
        return rejectWithValue("USER: Denied the connection!")
    }
})

export const walletConnectSlice = createSlice({
    name: "Wallet Connection",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(connectWallet.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(connectWallet.fulfilled, (state, action) => {
            state.loading = false;
            state.provider = action.payload?.provider ?? null;
            state.signer = action.payload?.signer ?? null;
            state.address = action.payload?.address ?? null;
        })
        builder.addCase(connectWallet.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Wallet Connection Failed!";
        })
    }
})

export default walletConnectSlice.reducer;