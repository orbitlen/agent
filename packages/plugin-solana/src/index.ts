export * from "./providers/token.ts";
export * from "./providers/wallet.ts";

import { Plugin } from "@elizaos/core";
import { executeBorrow } from "./actions/borrow.ts";
import { executeDeposit } from "./actions/deposit.ts";
import { executeFetchWalletAndOAInfo } from "./actions/fetch_wallet_or_oa_info.ts";

import { walletProvider } from "./providers/wallet.ts";
import { TokenProvider } from "./providers/token.ts";
import { WalletProvider } from "./providers/wallet.ts";
import { anchorFrameworkProvider } from "./providers/anchor.ts";

export { TokenProvider, WalletProvider };

export const solanaPlugin: Plugin = {
  name: "solana",
  description: "Solana Plugin for Eliza",
  actions: [executeBorrow, executeDeposit, executeFetchWalletAndOAInfo],
  evaluators: [],
  providers: [anchorFrameworkProvider],
};

export default solanaPlugin;
