(function(){function e(){var e=document.createElement("p"),t;return document.body.insertBefore(e,null),e.style[i]!=undefined&&(e.style[i]="translate3d(1px, 1px, 1px)",t=window.getComputedStyle(e).getPropertyValue(i)),document.body.removeChild(e),t!==undefined&&t.length>0&&t!=="none"}function t(e,t,n){var r=Date.now();return t=t||100,function(){var i=Date.now();if(i-r<t){n&&n.apply(this,arguments);return}r=i,e.apply(this,arguments)}}var n=function(){var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||e.OLink===""&&["","o"])[1],n="WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1];return{dom:n,lowercase:t,css:"-"+t+"-",js:t}}(),r=window.requestAnimationFrame||window[n.js+"requestAnimationFrame"]||function(e){setTimeout(e,1e3/60)},i=n.css+"transform",s,o=325,u,a=Widget.extend({attrs:{dir:"vertical",speed:.5},setup:function(){var t=this;s===undefined&&(s=e()),this.isVertical=this.get("dir")==="vertical"?1:0,this.$view=this.$element.children(),this.min=this.isVertical?this.$element.height()-this.$view.height():this.$element.width()-this.$view.width(),this.max=0;if(this.min>=0)return;this._initEvents(),$(window).on("resize",function(){t.refresh()})},refresh:function(){this.min=this.isVertical?this.$element.height()-this.$view.height():this.$element.width()-this.$view.width(),this.max=0,this.offset!==undefined&&(this.offset>this.max&&this._scroll(this.max),this.offset<this.min&&this._scroll(this.min))},_initEvents:function(){function e(e){u||(u=!0,p=undefined,E=0,S=0,y=l._pos(e),b=e.touches[0].clientX,w=e.touches[0].clientY,h.on("touchmove",T),h.on("touchend",i),v=l.offset,m=(new Date).getTime(),d=0,g=0)}function n(e){var t=e.touches[0].clientX,n=e.touches[0].clientY,r,i;if(l.isVertical)e.preventDefault();else{p===undefined&&(p=Math.abs(n-w)>Math.abs(t-b)?1:0);if(p===1)return;e.preventDefault()}r=l._pos(e),S=n-w,E=t-b,i=r-y,y=r;if(l.offset<l.min||l.offset>l.max)i/=4;l._scroll(l.offset+i),s()}function i(e){u=!1;var t,n=e.touches[0];h.off("touchmove",T),h.off("touchend",i);if(l.offset<l.min||l.offset>l.max)x=l.offset<l.min?l.min:l.max,g=x-l.offset,m=(new Date).getTime(),r(f);else if(Math.abs(d)>80){g=l.get("speed")*d,x=Math.round(l.offset+g),m=(new Date).getTime(),r(a);if(x<l.min||x>l.max)t=x<l.min?l.min:l.max}(Math.abs(E)>5||Math.abs(S)>5)&&e.preventDefault()}function s(){var e=(new Date).getTime(),t=l.offset-v,n=e-m,r=1e3*t/(1+n);d=.05*d+.95*r,v=l.offset,m=e}function a(){var e,t,n,i;if(g){e=(new Date).getTime()-m,t=-g*Math.exp(-e/o);if(Math.abs(t)>.5){if(l.offset>l.max||l.offset<l.min){n=x<l.min?l.min:l.max,i=Math.round(n+(x-n)/8);if(Math.abs(x+t)>Math.abs(i)){x=l.offset<l.min?l.min:l.max,g=x-l.offset,m=(new Date).getTime(),r(f);return}}l._scroll(x+t),r(a)}else l._scroll(x)}}function f(){var e,t;g&&(e=(new Date).getTime()-m,t=-g*Math.exp(-e/100),Math.abs(t)>.5?(l._scroll(x+t),r(f)):l._scroll(x))}var l=this,c=l.$element,h=$("body"),p,d,v,m,g,y,b,w,E,S,x;l.offset=0,c.on("touchstart",e);var T=t(n,1e3/70)},_scroll:function(e){var t=this;t.offset=e;if(s){var n=t.isVertical?"translate3d(0, "+t.offset+"px, 0)":"translate3d("+t.offset+"px, 0, 0)";t.$view.css({"-webkit-transform":n})}else{var n=t.isVertical?"translateY":"translateX";t.$view.css(i,n+"("+t.offset+"px)")}},_pos:function(e){return this.isVertical?e.touches[0].clientY:e.touches[0].clientX}});this.Swipable=a})();