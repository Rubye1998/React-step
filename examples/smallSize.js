'use strict';

require('rc-steps/assets/index.less');
require('rc-steps/assets/iconfont.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Steps = require('rc-steps');


var container = document.getElementById('__react-content');


var steps = [{
  status: 'finish',
  title: '已完成'
}, {
  status: 'process',
  title: '进行中'
}, {
  status: 'wait',
  title: '待运行'
}, {
  status: 'wait',
  title: '待运行'
}].map(function(s, i) {
    return (<Steps.Step
        key={i}
        status={s.status}
        title={s.title}
        ></Steps.Step>
    );
  });

ReactDOM.render(
  <Steps size="small">
    {steps}
  </Steps>, container);
