"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareSlashes = void 0;
exports.compareSlashes = (a, b) => {
    const aslashes = a.match(/\//g).length;
    const bslashes = b.match(/\//g).length;
    if (aslashes < bslashes) {
        return -1;
    }
    if (aslashes > bslashes) {
        return 1;
    }
    return 0;
};
//# sourceMappingURL=compareSlashes.js.map