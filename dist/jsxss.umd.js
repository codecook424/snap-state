!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("events"),require("react")):"function"==typeof define&&define.amd?define(["exports","events","react"],e):e(t.jsxSimpleState={},t.events,t.react)}(this,function(t,e,n){var r=new(e=e&&e.hasOwnProperty("default")?e.default:e),o=new Proxy({},{get:function(t,e,n){if(Reflect.has(t,e))return Reflect.get(t,e,n);console.warn('Trying to access unexistent prop "'+e+'".')},set:function(t,e,n,o){return r.emit(e,{key:e,value:n}),Reflect.set(t,e,n,o)}});t.emitter=r,t.State=o,t.withConsumer=function(t){return function(e){return function(n){function o(){for(var t=this,e=[],r=arguments.length;r--;)e[r]=arguments[r];n.apply(this,e),this.state={},this.handleStateChange=function(e){var n;t.setState(((n={})[e.key]=e.value,n))}}return n&&(o.__proto__=n),(o.prototype=Object.create(n&&n.prototype)).constructor=o,o.prototype.componentDidMount=function(){if(t&&Array.isArray(t))for(var e=0;e<t.length;e++)r.on(t[e],this.handleStateChange)},o.prototype.componentWillUnmount=function(){if(t&&Array.isArray(t))for(var e=0;e<t.length;e++)r.off(t[e],this.handleStateChange)},o.prototype.render=function(){return h(e,Object.assign({},this.props,this.state))},o}(n.PureComponent)}}});
//# sourceMappingURL=jsxss.umd.js.map
