(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(1),i=r.n(a),l=r(13),c=r(2),u=r(22),p=r(15),s=r(33);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return[Math.floor(e/3600),Math.floor(e%3600/60),Math.floor(e%3600%60)]}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e){return o.a.createElement("button",y({},e,{type:"button",className:"player__play"}),o.a.createElement("svg",{viewBox:"0 0 19 19",width:"19",height:"19"},o.a.createElement("use",{xlinkHref:"#play-s"})),o.a.createElement("span",null,"Play"))}b.propTypes={onClick:i.a.any};var m=b;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e){return o.a.createElement("button",h({},e,{type:"button",className:"player__play"}),o.a.createElement("svg",{viewBox:"0 0 14 21",width:"14",height:"21"},o.a.createElement("use",{xlinkHref:"#pause"})),o.a.createElement("span",null,"Play"))}v.propTypes={onClick:i.a.any};var d=v;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e){return o.a.createElement("button",g({},e,{type:"button",className:"player__full-screen"}),o.a.createElement("svg",{viewBox:"0 0 27 27",width:"27",height:"27"},o.a.createElement("use",{xlinkHref:"#full-screen"})),o.a.createElement("span",null,"Full screen"))}O.propTypes={onClick:i.a.any};var _=O;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=x(t).call(this,e))||"object"!==P(o)&&"function"!=typeof o?k(n):o)._handleExit=r._handleExit.bind(k(r)),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,n["PureComponent"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.title,r=e.src,n=e.poster,a=e.isPlayerPlaying,i=e.playerProgress,l=void 0===i?0:i,c=e.playerTime,u=e.playerTotalTime,p=e.renderPlayer,s=e.onPlayerPlay,y=e.onPlayerPause,b=e.onPlayerFullScreen,h=l.toFixed(2),v=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=f(e),n=f(t),o=[],a=0;a<r.length;a++)if(n[a]){var i=n[a-1]?"".concat(r[a]).padStart(2,"0"):r[a];o.push(i)}return o.join(":")}(u-c,u);return o.a.createElement("div",{className:"player"},p({className:"player__video",src:r,poster:n}),o.a.createElement("button",{type:"button",className:"player__exit",onClick:this._handleExit},"Exit"),o.a.createElement("div",{className:"player__controls"},o.a.createElement("div",{className:"player__controls-row"},o.a.createElement("div",{className:"player__time"},o.a.createElement("progress",{className:"player__progress",value:h,max:"100"}),o.a.createElement("div",{className:"player__toggler",style:{left:"".concat(h,"%")}},"Toggler")),o.a.createElement("div",{className:"player__time-value"},v)),o.a.createElement("div",{className:"player__controls-row"},a?o.a.createElement(d,{onClick:y}):o.a.createElement(m,{onClick:s}),o.a.createElement("div",{className:"player__name"},t),o.a.createElement(_,{onClick:b}))))}},{key:"_handleExit",value:function(){var e=this.props,t=e.onPlayerFullScreenExit,r=e.onPlayerStop,n=e.onExit;r(),t(),n&&n()}}])&&j(r.prototype,a),i&&j(r,i),t}();N.defaultProps={renderPlayer:function(){return null},autoplay:!1},N.propTypes=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach(function(t){w(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},s.b,{src:i.a.string,title:i.a.string,poster:i.a.string,onExit:i.a.func});var T=Object(s.a)()(N);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"VideoPlayerPageView",function(){return H});var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,D(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,n["PureComponent"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.movie,r=void 0===t?{}:t,n=e.history,a=r.title,i=r.trailer,l=r.images,c=void 0===l?{}:l;return o.a.createElement(T,{autoplay:!0,src:i,title:a,poster:c.preview,onExit:function(){n&&n.push("/film/".concat(r.id))}})}},{key:"componentDidMount",value:function(){var e=this.props.match,t=e&&e.params.id;this.props.onMovieFetch(t)}}])&&M(r.prototype,a),i&&M(r,i),t}();H.propTypes={match:i.a.shape({params:i.a.shape({id:i.a.string})}),movie:c.a,history:i.a.shape({push:i.a.func}),onMovieFetch:i.a.func,children:i.a.any};var J={onMovieFetch:u.a.fetchMovie},R=Object(l.b)(function(e,t){var r=t.match,n=r&&r.params.id;return{movie:Object(p.a)(e,n)}},J)(H);t.default=R}}]);