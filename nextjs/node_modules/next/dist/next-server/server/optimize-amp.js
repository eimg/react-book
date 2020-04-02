"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function optimize(html, config) {
    let AmpOptimizer;
    try {
        AmpOptimizer = require('@ampproject/toolbox-optimizer');
    }
    catch (_) {
        return html;
    }
    const optimizer = AmpOptimizer.create(config);
    return optimizer.transformHtml(html, config);
}
exports.default = optimize;
