'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _infinite = require('infinite');

var _infinite2 = _interopRequireDefault(_infinite);

require('./table.css!');

var item = function item(data, opts) {
    return (0, _mithril2['default'])('.list-item', [(0, _mithril2['default'])('div', opts.page), (0, _mithril2['default'])('div', data || _mithril2['default'].trust('&nbsp;'))]);
};

var component = {};

function _ref(page) {
    return 'app/table/data/page-' + page + '.json';
}

function _ref2(page) {
    if (console) {
        console.log('page', page);
    }
}

component.view = function () {
    return _mithril2['default'].component(_infinite2['default'], {
        maxPages: 10,
        item: item,
        pageUrl: _ref,
        'class': 'table',
        pageChange: _ref2
    });
};

exports['default'] = component;
module.exports = exports['default'];