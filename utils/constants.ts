import { ChainId, Token } from "@pancakeswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0x74247c16Ec01d2b52786BE684c89aA8B0835c12C";
export const WBNB = "0xae13d989dac2f0debff460ac112a837c89baa7cd";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_BNB_FARM = "0x90fcf8341Ec379B8815d44aA66D0Ae856e399675";
export const MASTERCHEF_CONTRACT = "0xD2b43E7fbBC45ccad0EEDdA88885A7f8C82CDb04";
export const LOTTERY_CONTRACT = "0x843E3543c766d56Dc54b69f99f3704e98E2B43ac";
export const MULTICALL_CONTRACT = "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.BSCTESTNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.BSCTESTNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.BSCTESTNET, CAKE_BNB_FARM, 18);
