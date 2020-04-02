"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../lib/utils");
function sendPayload(res, payload, type, options) {
    if (utils_1.isResSent(res)) {
        return;
    }
    // TODO: ETag headers?
    res.setHeader('Content-Type', type === 'json' ? 'application/json' : 'text/html; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(payload));
    if (options != null) {
        if (options.private || options.stateful) {
            if (options.private || !res.hasHeader('Cache-Control')) {
                res.setHeader('Cache-Control', `private, no-cache, no-store, max-age=0, must-revalidate`);
            }
        }
        else if (typeof options.revalidate === 'number') {
            if (options.revalidate < 1) {
                throw new Error(`invariant: invalid Cache-Control duration provided: ${options.revalidate} < 1`);
            }
            res.setHeader('Cache-Control', `s-maxage=${options.revalidate}, stale-while-revalidate`);
        }
        else if (options.revalidate === false) {
            res.setHeader('Cache-Control', `s-maxage=31536000, stale-while-revalidate`);
        }
    }
    res.end(payload);
}
exports.sendPayload = sendPayload;
