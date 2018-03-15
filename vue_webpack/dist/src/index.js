'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _app = require('./app.vue');

var _app2 = _interopRequireDefault(_app);

require('./assets/styles/global.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.createElement('div');

document.body.appendChild(root);
new _vue2.default({
    render: function render(h) {
        return h(_app2.default);
    }
}).$mount(root);
//# sourceMappingURL=index.js.map