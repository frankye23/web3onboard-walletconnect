import Joi from 'joi';
import type { WalletConnectOptions } from './index.js';
type ValidateReturn = Joi.ValidationResult | null;
export declare const validateWCInitOptions: (data: WalletConnectOptions) => ValidateReturn;
export {};