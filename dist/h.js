"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
ZipCodeValidator.numberRegexp = /^[0-9]+$/;
exports.ZipCodeValidator = ZipCodeValidator;
// module.export = {ZipCodeValidator};
