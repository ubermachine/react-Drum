(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),s=t.n(o),d=(t(14),t(15),t(16),t(4)),c=t(5),m=t(7),u=t(6),i=t(1),l=t(8),y=[{keyPressed:"Q",key:"Chord-1",keyCode:81,url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyPressed:"W",key:"Chord-2",keyCode:87,url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyPressed:"E",key:"Chord-3",keyCode:69,url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyPressed:"A",key:"Shaker",keyCode:65,url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyPressed:"S",key:"Open-HH",keyCode:83,url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyPressed:"D",key:"Closed-HH",keyCode:68,url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyPressed:"Z",key:"Punchy-Kick",keyCode:90,url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyPressed:"X",key:"Side-Stick",keyCode:88,url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyPressed:"C",key:"Snare",keyCode:67,url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],k=function(e){var n=e.sounds.map((function(n){return r.a.createElement("div",{className:"drum-pad",id:n.key,key:n.key,onClick:e.handleClick},n.keyPressed,r.a.createElement("audio",{src:n.url,className:"clip",id:n.keyPressed,key:n.keyPressed}))}));return r.a.createElement("div",{id:"drum-container"},n)},p=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(m.a)(this,Object(u.a)(n).call(this,e))).state={current:"Click or press key"},t.playSound=t.playSound.bind(Object(i.a)(t)),t}return Object(l.a)(n,e),Object(c.a)(n,[{key:"playSound",value:function(e){var n=y.find((function(n){return n.keyCode===e.keyCode||n.keyPressed===e.target.innerText}));document.getElementById(n.keyPressed).play(),this.setState({current:n.key})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.playSound)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.playSound)}},{key:"render",value:function(){return r.a.createElement("div",{id:"drum-machine"},r.a.createElement(k,{sounds:y,handleClick:this.playSound}),r.a.createElement("div",{id:"display"},this.state.current))}}]),n}(r.a.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.db81eb7f.chunk.js.map