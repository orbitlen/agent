export * from "./providers/wallet.ts";

import { Plugin } from "@elizaos/core";
import { executeBorrow } from "./actions/borrow.ts";
import { executeDeposit } from "./actions/deposit.ts";
import { executeFetchWalletAndOAInfo } from "./actions/fetch_wallet_or_oa_info.ts";
import { executeLiquidate } from "./actions/liquidate.ts";
import { executeRaydiumDeposit } from "./actions/raydium/deposit.ts";
import { executeRaydiumWithdraw } from "./actions/raydium/withdraw.ts";
import { executeRaydiumSwap } from "./actions/raydium/swap.ts";



import { walletProvider } from "./providers/wallet.ts";
import { WalletProvider } from "./providers/wallet.ts";
import { anchorFrameworkProvider } from "./providers/anchor.ts";

export { WalletProvider };

export const solanaPlugin: Plugin = {
  name: "solana",
  description: "Solana Plugin for Eliza",
  actions: [
    executeBorrow,
    executeDeposit,
    executeFetchWalletAndOAInfo,
    executeLiquidate,
    executeRaydiumDeposit,
    executeRaydiumWithdraw,
    executeRaydiumSwap
  ],
  evaluators: [],
  providers: [anchorFrameworkProvider],
};

export default solanaPlugin;
