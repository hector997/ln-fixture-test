(function(e){function t(t){for(var s,c,i=t[0],o=t[1],d=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ln-fixture-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"094b":function(e,t,a){"use strict";a("e38e")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("mainContainer")],1)},r=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("ResultsTable",{staticClass:"table-wrapper",attrs:{teamsData:e.teamsData,predictionData:e.tablePrediction}}),a("Results",{staticClass:"results-wrapper",attrs:{matchData:e.parseTeamData()},on:{prediction:e.onPrediction}})],1)},i=[],o=a("5530"),d=a("1da1"),l=(a("96cf"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("a630"),a("4160"),a("159b"),a("caad"),a("2532"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"table-container"},[a("table",[e._m(1),e._l(e.matchesArr,(function(t){return a("tr",{key:t.id,staticClass:"table-content"},[a("td",[e._v(e._s(t.equipo))]),a("td",[e._v(e._s(t.score))]),a("td",[e._v(e._s(t.playedMatches))]),a("td",[e._v(e._s(t.wonMatches))]),a("td",[e._v(e._s(t.drawnMatches))]),a("td",[e._v(e._s(t.lostMatches))]),a("td",[e._v(e._s(t.goalsMade))]),a("td",[e._v(e._s(t.goalsRecieved))]),a("td",[e._v(e._s(t.goalDiff))])])}))],2)])])}),u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("p",{staticClass:"group"},[e._v("GRUPO")]),a("div",{staticClass:"is-flex title-container"},[a("h1",{staticClass:"group-name"},[e._v("C")]),a("div",{staticClass:"desc"},[a("p",[e._v("simulá los resultados que faltan y mirá cómo quedaría la tabla")]),a("i",{staticClass:"icon fa-solid fa-caret-down"})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",{staticClass:"table-head"},[a("th",{staticClass:"table-item"},[e._v("Posiciones")]),a("th",{staticClass:"table-item"},[e._v("PTS")]),a("th",{staticClass:"table-item"},[e._v("PJ")]),a("th",{staticClass:"table-item"},[e._v("G")]),a("th",{staticClass:"table-item"},[e._v("E")]),a("th",{staticClass:"table-item"},[e._v("P")]),a("th",{staticClass:"table-item"},[e._v("GF")]),a("th",{staticClass:"table-item"},[e._v("GC")]),a("th",{staticClass:"table-item"},[e._v("DG")])])}],f=a("2909"),m=(a("99af"),a("4e82"),a("a9e3"),{name:"resultsTable",props:{predictionData:Array,teamsData:Array},computed:{getFinalScore:function(){var e=new Map;return this.predictionData.forEach((function(t){e.has(t.matchId)?e.set(t.matchId,[].concat(Object(f["a"])(e.get(t.matchId)),[t])):e.set(t.matchId,[t])})),Array.from(e.values())},matchesArr:function(){var e=this,t=[],a="";this.teamsData.forEach((function(s){a=e.teamScore(s.nombreCorto).matchWinner,t.push({id:s.nombreCorto,equipo:s.nombre,score:e.teamScore(s.nombreCorto).score,playedMatches:e.teamScore(s.nombreCorto).playedMatches,wonMatches:e.teamScore(s.nombreCorto).wonMatches,drawnMatches:e.teamScore(s.nombreCorto).drawMatches,lostMatches:e.teamScore(s.nombreCorto).lostMatches,goalsMade:e.getGoalData(s.nombreCorto).goalsMade,goalsRecieved:e.getGoalData(s.nombreCorto).goalsRecieved,goalDiff:e.getGoalData(s.nombreCorto).goalDiff,matchWinner:0})}));var s=t.sort((function(e,t){return t.score!=e.score?t.score-e.score:t.goalDiff!=e.goalDiff?t.goalDiff-e.goalDiff:t.goalsMade!=e.goalsMade?t.goalsMade-e.goalsMade:a===e.id?(e.matchWinner+=1,t.matchWinner-e.matchWinner):a===t.id?(t.matchWinner+=1,e.matchWinner-t.matchWinner):void 0}));return s}},methods:{matchWinner:function(e){return e[0].prediction>e[1].prediction?e[0].teamId:e[1].prediction>e[0].prediction?e[1].teamId:"empate"},teamScore:function(e){var t=this,a=0,s=0,n=0,r=0,c=0,i="";return this.getFinalScore.forEach((function(o){if(!(o.length<2)){var d=o[0],l=o[1];i=t.matchWinner(o),d.teamId===e?(c+=1,d.prediction>l.prediction?(a+=3,s+=1):d.prediction===l.prediction?(a+=1,r+=1):d.prediction<l.prediction&&(n+=1)):l.teamId===e&&(c+=1,l.prediction>d.prediction?(a+=3,s+=1):l.prediction===d.prediction?(a+=1,r+=1):l.prediction<d.prediction&&(n+=1))}})),{score:a,wonMatches:s,lostMatches:n,drawMatches:r,playedMatches:c,winner:i}},getGoalData:function(e){var t=0,a=0,s=0;return this.getFinalScore.forEach((function(n){if(!(n.length<2)){var r=n[0],c=n[1];r.teamId===e?(t+=Number(r.prediction),a+=Number(c.prediction)):c.teamId===e&&(t+=Number(c.prediction),a+=Number(c.prediction)),s=t-a}})),{goalsMade:t,goalsRecieved:a,goalDiff:s}}}}),b=m,p=(a("dedf"),a("2877")),h=Object(p["a"])(b,l,u,!1,null,"9dad2130",null),j=h.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},e._l(e.getDates,(function(t){return a("div",{key:t,staticClass:"cards-heading"},[a("p",{staticClass:"date-display"},[e._v(e._s(e.dateFormat(t)))]),a("div",{staticClass:"cards"},[a("div",{staticClass:"top-border"}),e._l(e.matchData,(function(s){return a("div",{key:s.matchId},[s.fecha===t?a("div",{staticClass:"match-card"},[a("div",{staticClass:"team-display"},[a("p",[e._v(e._s(s.equipoA.equipo))]),a("input",{staticClass:"team-input",attrs:{maxlength:"1",inputmode:"numeric",pattern:"[0-9]*"},on:{input:function(t){return e.handleInput(s.matchId,s.equipoA.id,t.target.value)}}})]),null!=e.errorId&&e.errorId===s.matchId+s.equipoA.id?a("div",{staticClass:"error-msg"},[e._m(0,!0)]):e._e(),a("div",{staticClass:"team-separator"}),a("div",{staticClass:"team-display"},[a("p",[e._v(e._s(s.equipoB.equipo))]),a("input",{staticClass:"team-input",attrs:{maxlength:"1",inputmode:"numeric",pattern:"[0-9]*"},on:{input:function(t){return e.handleInput(s.matchId,s.equipoB.id,t.target.value)}}})]),null!=e.errorId&&e.errorId===s.matchId+s.equipoB.id?a("div",{staticClass:"error-msg"},[e._m(1,!0)]):e._e(),a("div",{staticClass:"team-separator"})]):e._e()])}))],2)])})),0)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"fa-solid fa-triangle-exclamation"}),a("p",[e._v("Entrada invalida")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"fa-solid fa-triangle-exclamation"}),a("p",[e._v("Entrada invalida")])])}],_=a("b85c"),C=(a("6062"),a("e25e"),a("c1df")),y=a.n(C),D={name:"results",props:{matchData:Array},data:function(){return{errorId:null}},computed:{getDates:function(){var e,t=[],a=Object(_["a"])(this.matchData);try{for(a.s();!(e=a.n()).done;){var s=e.value;t.push(s.fecha)}}catch(n){a.e(n)}finally{a.f()}return Object(f["a"])(new Set(t))}},methods:{dateFormat:function(e){return y.a.locale("es"),y()(String(e)).format("dddd LL")},handleInput:function(e,t,a){if(""==a||parseInt(a)>=0&&!isNaN(parseInt(a))){this.errorId=null;var s={matchId:e,teamId:t,prediction:a?parseInt(a):0,predictionId:t+"-"+e};this.$emit("prediction",s)}else this.errorId=e+t}}},w=D,k=(a("6097"),Object(p["a"])(w,v,g,!1,null,"ac2b1468",null)),I=k.exports,M=a("bc3a"),O=a.n(M),x=a("e1bd"),z={components:{ResultsTable:j,Results:I},name:"mainContainer",data:function(){return{matchData:[],teamsData:[],mapPredictions:new Map,tablePrediction:[]}},mounted:function(){this.getMatchData(),this.getTeamData()},methods:{getMatchData:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=[],t.next=3,O.a.get("https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json");case 3:s=t.sent,n=Array.from(s.data),n.forEach((function(e){"C"===e.grupo&&(e=Object(o["a"])(Object(o["a"])({},e),{},{matchId:Object(x["a"])()}),a.push(e))})),e.matchData=a;case 7:case"end":return t.stop()}}),t)})))()},getTeamData:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/diccEquipos.json");case 2:a=t.sent,s=Array.from(a.data),s.forEach((function(t){t.grupo.includes("C")&&e.teamsData.push(t)})),e.parseTeamData();case 6:case"end":return t.stop()}}),t)})))()},parseTeamData:function(){var e=this,t=[],a={},s={};return this.matchData.forEach((function(n){e.teamsData.forEach((function(e){n.equipoA.includes(e.grupo)?a={equipo:e.nombre,id:e.nombreCorto,prediccion:null}:n.equipoB.includes(e.grupo)&&(s={equipo:e.nombre,id:e.nombreCorto,prediccion:null})})),t.push({matchId:n.matchId,fecha:n.fecha,equipoA:a,equipoB:s})})),t},onPrediction:function(e){this.mapPredictions.set(e.predictionId,e),this.tablePrediction=Array.from(this.mapPredictions.values())}}},E=z,q=(a("094b"),Object(p["a"])(E,c,i,!1,null,null,null)),P=q.exports,S={name:"App",components:{mainContainer:P}},A=S,R=(a("034f"),Object(p["a"])(A,n,r,!1,null,null,null)),T=R.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(T)}}).$mount("#app")},6097:function(e,t,a){"use strict";a("e411")},"85ec":function(e,t,a){},c2ae:function(e,t,a){},dedf:function(e,t,a){"use strict";a("c2ae")},e38e:function(e,t,a){},e411:function(e,t,a){}});
//# sourceMappingURL=app.d97c058d.js.map