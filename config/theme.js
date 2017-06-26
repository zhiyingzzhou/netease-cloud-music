const merge = require('merge');

// 色彩
// ---
// 文字色
const textConfig = {
    "@color-text-base": "#333333"
};
// 背景色
const bgConfig = {
    "@fill-base": "#f2f4f5", // 组件默认背景
};
// 全局/品牌色
const themeConfig = {
    "@brand-primary": "#ce3d3a",
};

// 边框色
const borderConfig = {
    "@border-color-base": "lightness(#000000)"
};

module.exports = merge(textConfig,bgConfig,themeConfig,borderConfig);