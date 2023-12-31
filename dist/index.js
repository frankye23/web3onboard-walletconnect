import v1 from './v1.js';
import v2 from './v2.js';
import { validateWCInitOptions } from './validation.js';
export const isHexString = (value) => {
    if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    return true;
};
function walletConnect(options) {
    if (!options) {
        throw new Error(`WalletConnect requires an initialization object to be passed - see the official docs for an example: https://onboard.blocknative.com/docs/wallets/walletconnect`);
    }
    if (options) {
        const error = validateWCInitOptions(options);
        if (error) {
            throw error;
        }
    }
    options.version = options.version || 2;
    return options.version === 2 ? v2(options) : v1(options);
}
export default walletConnect;