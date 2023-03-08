(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),l=n.n(i)()(r());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap);"]),l.push([e.id,":root{\r\n    --lightGrey: #DEDFDA;\r\n    --burntOrange: #C56A19;\r\n    --sageGreen: #b0bb9d;\r\n    --olive:#a0ac8b;\r\n    --darkerOlive: #939e7e;\r\n    --jadeGreen: #387A5C;\r\n    --emerald: #013832;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding:0;\r\n    background-color: var(--lightGrey);\r\n    font-family: Cormorant, Palatino, Consolas, \"Courier New\", monospace, 'Times New Roman', Times, serif;\r\n    font-weight: 600;\r\n}\r\n\r\n#container{\r\n    display:flex;\r\n    justify-content: space-around;\r\n    background-color: var(--sageGreen);\r\n    border-radius: 10px;\r\n    margin: 10% 5% 10% 5%;\r\n}\r\n\r\n#leftside, #rightside{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 2%;\r\n    border-radius: 10px;\r\n    border:2px double #387A5C;\r\n    padding: 2%;\r\n}\r\n#leftside{\r\n  width:10%;\r\n  justify-content: flex-start;\r\n}\r\n#rightside{\r\n  width: 75%;\r\n}\r\n\r\nbutton{\r\n    font-family: Cormorant;\r\n    font-weight: 600;\r\n    font-size: 1.0rem;\r\n    background-color: var(--olive);\r\n    border:2px double #387A5C;\r\n    border-radius: 10px;\r\n    padding: 2%;\r\n    margin: 2%;\r\n}\r\n\r\nbutton:hover{\r\n  background-color: var(--jadeGreen);\r\n}\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: var(--jadeGreen);\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    padding: 12px 16px;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .dropdown a:hover {background-color: #ddd;}\r\n  \r\n  .show {display: block;}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n  /* Modal Content/Box */\r\n.modal_content{\r\n  display:flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: var(--sageGreen);\r\n  border:2px double #387A5C;\r\n  border-radius: 3%;\r\n  margin:3%;\r\n  }\r\n\r\n#modal-header{\r\n  display: flex;\r\n  align-content: flex-end;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n  width:fit-content;\r\n  padding-left: 1%;\r\n  padding-top: 1%;\r\n  padding-bottom: 0px;\r\n}\r\n#modal_form{\r\n  display:flex;\r\n  justify-content: space-around;\r\n  background-color: var(--sageGreen);\r\n  border-radius: 10px;\r\n\r\n}\r\n /* The Close Button */\r\n .close {\r\n    display:flex;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n  \r\n  }\r\n\r\n  .close:hover,\r\n  .close:focus {\r\n    color: var(--burntOrange);\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n#modal_header{\r\n  background-color: var(--sageGreen);\r\n  border: 2px double #387A5C;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nli {\r\n  margin: 0.5%;\r\n  padding-left: 2%;\r\n  background-color: var(--olive);\r\n  border-radius: 5px;\r\n  font-size: 1.0rem;\r\n}\r\nli:hover{\r\n  background-color: var(--darkerOlive);\r\n}\r\ninput[type=text] {\r\n  font-family: Cormorant;\r\n  width: 100%;\r\n  padding: 2% 2%;\r\n  margin: 1%;\r\n  box-sizing: border-box;\r\n}\r\ninput[type=text]:focus {\r\n  border: 3px solid var(--burntOrange);\r\n  font-weight: 600;\r\n}\r\n\r\ntextarea{\r\n  font-family: Cormorant;\r\n  width: 100%;\r\n  padding: 2% 2%;\r\n  margin: 1%;\r\n  box-sizing: border-box;\r\n}\r\ntextarea:focus{\r\n  border: 3px solid var(--burntOrange);\r\n  font-weight: 600;\r\n}\r\n\r\n#priority_btn, #temporal_btn{\r\n  font-family: Cormorant;\r\n  font-weight: 600;\r\n  background-color: var(--olive);\r\n  border:2px double #387A5C;\r\n  border-radius: 10px;\r\n  padding:2%;\r\n  margin: 1%;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n#create_button{\r\n  display:inline-block;\r\n  text-align: center;\r\n  width:20%;\r\n  margin: 1% 40%;\r\n\r\n}\r\n\r\n\r\n.collapsible {\r\n  cursor: pointer;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n}\r\n\r\n#priority_btn:hover, #temporal_btn:hover, .collapsible:hover, .active, .priority_set{\r\n  background-color: var(--jadeGreen);\r\n}\r\n\r\n/*\r\n.active, .collapsible:hover {\r\n  background-color: var(--jadeGreen);\r\n  \r\n}\r\n.priority_set{\r\n  background-color: var(--jadeGreen);\r\n}\r\n*/\r\n\r\n.content {\r\n  padding: 0 18px;\r\n  display: none;\r\n  overflow: hidden;\r\n  background-color: var(--jadeGreen);\r\n}\r\n\r\n\r\n\r\n.notes_item{\r\n  background-color: var(--olive);\r\n  margin: 0.2em;\r\n  padding: 0.2em 0.3em 0.2em 0.3em;\r\n  border-radius: 5px;\r\n}\r\n.notes_item:hover{\r\n  background-color: var(--darkerOlive);\r\n}\r\n.notes_title, .notes_description{\r\n  margin: 0.5%;\r\n  padding-left: 2%;\r\n  padding-right:2%;\r\n  border-radius: 5px;\r\n  /*\r\n  background-color:var(--sageGreen);\r\n  */\r\n}\r\n",""]);const a=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(l[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&l[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},l=[],a=0;a<e.length;a++){var d=e[a],c=o.base?d[0]+o.base:d[0],s=i[c]||0,u="".concat(c," ").concat(s);i[c]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}l.push(u)}return l}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var a=n(i[l]);t[a].references--}for(var d=o(e,r),c=0;c<i.length;c++){var s=n(i[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),l=n.n(i),a=n(565),d=n.n(a),c=n(216),s=n.n(c),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(e,t,n){return{title:e,description:t,type:n}},b=function(){const e=[];return b.numInstances=(b.numInstances||0)+1,{projects_list:e,addToDo:function(t){return e.push(t),e},removeToDofromProjects:function(t){for(let n=0;n<e.length;n++)e[n].title.toLowerCase()==t.toLowerCase()&&(e.splice(n,1),console.log("item removed: "+t));return e},get_project_names:function(){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].title);return t},dispose:function(){return b.numInstances-=1}}},y=b;function g(e){const t=[];g.numInstances=(g.numInstances||0)+1;return{title:e,things_to_do:t,add_todo_item:function(n){const o=function(t){return t.project=e,t}(n);return t.push(o),t},remove_todo_item:function(e){for(let n=0;n<t.length;n++)t[n].title.toLowerCase()==e.toLowerCase()&&(t.splice(n,1),console.log("item removed: "+e));return t},remove_all_items_in_list:function(){for(let e=t.length;e>0;e--)t.pop();return console.log("All items from todo list "+e+" have been removed"),console.log(t),console.log("length of todo list is now "+t.length),t}}}function v(e,t,n,o,r){return{title:e,description:t,dueDate:n,priority:o,project:null}}const C=function(){const e=y(),t=g("errands"),n=new v("Shovel","Shovel snow off driveway","Today","medium"),o=new v("Drive","Drive home before we are snowed in","Today","high"),r=new v("Walk Dog","Walk dog before her bladder ruptures","Today","high"),i=new v("Check Pantry","Check pantry to make sure we have enough food for a few days. Also, what happens when I write a very long description?","Today","medium"),l=new v("Read all day","Read as many papers while staying warm","Tomorrow","low"),a=new v("Make a therapy appt","For the love of god, remember to make a therapy appt","Someday","high");t.add_todo_item(n),t.add_todo_item(o),t.add_todo_item(r),t.add_todo_item(i),t.add_todo_item(l),t.add_todo_item(a);const d=g("grocery shopping"),c=v("apple","buy 3 apples","today","low"),s=v("banana","buy 2 bananas for smoothies","today","low");d.add_todo_item(c),d.add_todo_item(s);const u=g("Bathroom remodel"),p=new v("Remove tile","scrape up old tile","Tomorrow","low"),m=new v("Pick wallpaper","Pick out a  floral wall paper","Tomorrow","low"),f=new v("Sketch new floor plan","Sketch new floor plan for contractor review","Tomorrow","high");u.add_todo_item(p),u.add_todo_item(m),u.add_todo_item(f);const b=g("Workout"),C=new v("Burpees","3 sets of ten","Today","low"),x=new v("Walk","Walk for 30 minutes","Today","high"),_=new v("Crunches","3 sets of 20 crunches","Today","high");b.add_todo_item(C),b.add_todo_item(_),b.add_todo_item(x),e.addToDo(t),e.addToDo(d),e.addToDo(u),e.addToDo(b);const w=function(){const e=[];return{notes_list:e,addItem:function(t){return e.push(t),e},removeItem:function(t){for(let n=0;n<e.length;n++)e[n].title.toLowerCase()==t.toLowerCase()&&(e.splice(n,1),console.log("item removed: "+t));return e},getType:function(e){return e.type}}}(),k=h("books to read","Iliad, Art of War, Traveler's guide to the galaxy","list"),E=h("Poetry assignment","Look up the structure of some basic poems","text"),A=h("Catscratch song"," What is the actual name of the song that makes you think of cat's yowling ","text");return w.addItem(k),w.addItem(E),w.addItem(A),{myNotes:w,myProjects:e}},x=C().myProjects,_=C().myNotes,w=function(){let e=function(){let e=[];for(let t=0;t<x.projects_list.length;t++)for(let n=0;n<x.projects_list[t].things_to_do.length;n++)e.push(x.projects_list[t].things_to_do[n]);return console.log(e),e}();var t=[],n=[],o=[];for(let r=0;r<e.length;r++)"today"==e[r].dueDate.toLowerCase()?t.push(e[r]):"tomorrow"==e[r].dueDate.toLowerCase()?n.push(e[r]):o.push(e[r]);return{dueToday:t,dueTomorrow:n,dueSomeday:o}},k=function(e){var t=[],n=[],o=[],r=[];for(let t=0;t<e.length;t++)"low"==e[t].priority&&n.push(e[t]),"medium"==e[t].priority&&o.push(e[t]),"high"==e[t].priority&&r.push(e[t]);return t.push(r),t.push(o),t.push(n),t.flat()},E=function(e){console.log("todo list button clicked");const t=document.createElement("ul");for(let n=0;n<e.length;n++){const o=document.createElement("li");o.textContent=`${e[n].title}`,o.classList.add("collapsible");const r=document.createElement("div");r.classList.add("content");const i=document.createElement("div");i.classList.add("material"),i.style.display="flex",i.style.justifyContent="space-between",i.style.paddingRight="1em";const l=document.createElement("span");l.setAttribute("class","close"),l.innerHTML="&times;",l.onclick=function(){o.style.display="none";for(let t=0;t<x.projects_list.length;t++)x.projects_list[t].title==`${e[n].project}`&&(console.log(`Item to remove: ${e[n].title}`),console.log(`from project: ${e[n].project}`),console.log(x.projects_list[t].remove_todo_item(`${e[n].title}`)))};const a=document.createElement("p");a.textContent=`Project: ${e[n].project}`,a.style.fontStyle="italic",a.style.color="white";const d=document.createElement("p");d.textContent=`${e[n].description}`;const c=document.createElement("p");c.textContent=`Priority: ${e[n].priority}`,"low"==e[n].priority&&(c.style.color="#9CFF00"),"medium"==e[n].priority&&(c.style.color="#FE8B02"),"high"==e[n].priority&&(c.style.color="#FF3131"),o.onclick=function(){this.classList.toggle("active"),"block"===r.style.display?r.style.display="none":r.style.display="block"},i.appendChild(d),i.appendChild(a),i.appendChild(c),i.appendChild(l),r.appendChild(i),o.appendChild(r),t.appendChild(o)}T.append(t)},A=document.createElement("div");A.setAttribute("id","container");const j=document.createElement("div");j.setAttribute("id","leftside");const T=document.createElement("div");T.setAttribute("id","rightside");const L=document.createElement("button");L.setAttribute("id","project_button"),L.textContent="Projects",L.onclick=function(){!function(){T.innerHTML="";for(let e=0;e<x.projects_list.length;e++){const t=document.createElement("button");t.setAttribute("id","mini_project_button"),t.textContent=`${x.projects_list[e].title}`,T.appendChild(t),t.onclick=function(){T.innerHTML="",E(x.projects_list[e].things_to_do)}}}()};const I=document.createElement("button");I.setAttribute("id","today"),I.textContent="Today",I.onclick=function(){T.innerHTML="";var e=k(w().dueToday);E(e)};const M=document.createElement("button");M.setAttribute("id","tomorrow"),M.textContent="Tomorrow",M.onclick=function(){T.innerHTML="";var e=k(w().dueTomorrow);E(e)};const S=document.createElement("button");S.setAttribute("id","someday"),S.textContent="Someday",S.onclick=function(){T.innerHTML="";var e=k(w().dueSomeday);E(e)};const $=document.createElement("button");$.setAttribute("id","notes_button"),$.textContent="Notes",$.onclick=function(){T.innerHTML="",function(e){console.log("Notes rendered"),console.log(e.notes_list[0].title);const t=document.createElement("div");for(let o=0;o<e.notes_list.length;o++){const r=document.createElement("div");r.classList.add("notes_item");const i=document.createElement("span");i.setAttribute("class","close"),i.innerHTML="&times;",i.onclick=function(){r.style.display="none";for(let t=0;t<_.notes_list.length;t++)_.notes_list[t].title==`${e.notes_list[o].title}`&&(console.log(`Item to remove: ${e.notes_list[o].title}`),_.notes_list[t].removeItem(`${e.notes_list[o].title}`))};const l=document.createElement("div");l.style.display="flex",l.style.justifyContent="space-between",l.style.alignItems="baseline";const a=document.createElement("div");if(a.classList.add("notes_title"),a.textContent=`${e.notes_list[o].title}`,a.style.fontWeight="800",l.appendChild(a),l.appendChild(i),r.appendChild(l),"text"==e.notes_list[o].type){const t=document.createElement("div");t.classList.add("notes_description"),t.textContent=`${e.notes_list[o].description}`,r.appendChild(t)}else{const t=document.createElement("ul");var n=`${e.notes_list[o].description}`.split(",");for(let e=0;e<n.length;e++){console.log(n[e]);const o=document.createElement("li");o.textContent=n[e],t.appendChild(o)}r.appendChild(t)}t.appendChild(r)}T.appendChild(t)}(_)};const D=document.createElement("button");D.setAttribute("id","add_button"),D.textContent="+",D.onclick=function(){let e=!1,t=!1,n=!1;console.log("clicked add modal button!");const o=document.createElement("div");o.setAttribute("class","modal"),o.style.display="block";const r=document.createElement("div");r.setAttribute("class","modal_content");const i=document.createElement("div");i.setAttribute("id","modal_upper"),i.style.display="flex",i.style.justifyContent="space-between",i.style.alignItems="flex-end",i.style.margin="2% 2% 0% 2%";const l=document.createElement("span");l.setAttribute("class","close"),l.innerHTML="&times;",l.onclick=function(){o.style.display="none"},window.onclick=function(e){e.target==o&&(o.style.display="none")};const a=document.createElement("div");a.setAttribute("id","modal_form");const d=document.createElement("div");d.setAttribute("id","modal-header"),d.innerHTML="Create new ... ";const c=document.createElement("div");c.setAttribute("id","leftside");const s=document.createElement("div");s.setAttribute("id","rightside"),function(){const r=document.createElement("button");r.setAttribute("id","todo_modal"),r.textContent="Todo",r.onclick=function(){0==e&&(s.innerHTML="",function(){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column";const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","Title"),e.appendChild(t);const n=document.createElement("textarea");n.setAttribute("type","text"),n.setAttribute("id","todo_description"),n.setAttribute("placeholder","Details"),e.appendChild(n);const r=document.createElement("div");r.style.display="flex",r.textContent="Priority: ",r.style.fontSize="15px",r.style.alignContent="center";const i=document.createElement("button");i.textContent="low",i.setAttribute("id","priority_btn"),r.appendChild(i);const l=document.createElement("button");l.textContent="middle",l.setAttribute("id","priority_btn"),r.appendChild(l);const a=document.createElement("button");a.textContent="high",a.setAttribute("id","priority_btn"),r.appendChild(a);const d=document.createElement("div");d.style.display="flex",d.textContent="When to do? ",d.style.fontSize="15px";const c=document.createElement("button");c.textContent="Today",c.setAttribute("id","temporal_btn"),d.appendChild(c);const u=document.createElement("button");u.textContent="Tomorrow",u.setAttribute("id","temporal_btn"),d.appendChild(u);const p=document.createElement("button");p.textContent="Someday",p.setAttribute("id","temporal_btn"),d.appendChild(p);let m=null;const f=document.createElement("div");f.classList.add("dropdown");const h=document.createElement("label");h.textContent="Pick a project: ",f.appendChild(h);const b=document.createElement("button");b.classList.add("dropbtn"),b.textContent="Project";const y=document.createElement("div");y.setAttribute("id","myDropdown"),y.classList.add("dropdown-content");for(let e=0;e<x.projects_list.length;e++){const t=document.createElement("a");t.setAttribute("value",`${x.projects_list[e].title}`),t.textContent=x.projects_list[e].title,y.appendChild(t),t.onclick=function(){console.log("project for new todo object has been selected!"),m=x.projects_list[e].title,b.textContent=x.projects_list[e].title,t.style.backgroundColor="var(--jadeGreen)"}}f.appendChild(b),f.appendChild(y),b.onclick=function(){y.style.display="block"};const g=document.createElement("button");g.setAttribute("id","create_button"),g.textContent="Create",s.appendChild(e),s.appendChild(r),s.appendChild(d),s.appendChild(f),s.append(g);const C=document.querySelectorAll("#priority_btn");C.forEach((function(e){let t=null;e.onclick=function(){C.value=e.textContent,console.log("priority has been set to: "+C.value),e.style.backgroundColor="var(--jadeGreen)",null!=t&&(t.style.backgroundColor="var(--sageGreen)"),t=e}}));let _=null;const w=document.querySelectorAll("#temporal_btn");w.forEach((function(e){e.onclick=function(){w.value=e.textContent,console.log("temporal has been set to: "+w.value),e.style.backgroundColor="var(--jadeGreen)",null!=_&&(_.style.backgroundColor="var(--sageGreen)"),_=e}})),g.onclick=function(){const e=new v(`${t.value}`,`${n.value}`,`${w.value}`,`${C.value}`);if(null!=m)for(let t=0;t<x.projects_list.length;t++)x.projects_list[t].title==m&&(x.projects_list[t].add_todo_item(e),console.log("new item created"+e),console.log(x));o.style.display="none"}}(),e=!0,t=!1,n=!1)},c.append(r)}(),function(){const r=document.createElement("button");r.setAttribute("id","project_button_modal"),r.textContent="Projects",r.onclick=function(){console.log(t),0==t&&(s.innerHTML="",function(){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column";const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","New project"),e.appendChild(t),s.appendChild(e);const n=document.createElement("button");n.setAttribute("id","create_button"),n.textContent="Create",n.onclick=function(){console.log("adding a new project named: "+t.value);let e=new g(`${t.value}`);x.addToDo(e),o.style.display="none"},s.append(n)}(),t=!0,e=!1,n=!1,console.log("project tab on module is now active"))},c.append(r)}(),function(){const r=document.createElement("button");r.setAttribute("id","notes_button_modal"),r.textContent="Notes",r.onclick=function(){console.log(0==n),console.log("clicked notes in modal"),0==n&&(s.innerHTML="",function(){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column";const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","Title"),t.setAttribute("id","notes_title"),e.appendChild(t);const n=document.createElement("textarea");n.setAttribute("type","text"),n.setAttribute("id","notes_description"),n.setAttribute("placeholder","Add description here. If you are creating a list, seperate items by a comma."),e.appendChild(n);const r=document.createElement("label");r.setAttribute("for","notes_type"),r.textContent="select note type: ",e.appendChild(r);const i=document.createElement("select");i.setAttribute("id","notes_type");const l=document.createElement("option");l.setAttribute("value","list"),l.textContent="list",i.appendChild(l);const a=document.createElement("option");a.setAttribute("value","text"),a.textContent="text",i.appendChild(a),e.appendChild(i),s.appendChild(e);const d=document.createElement("button");d.setAttribute("id","create_button"),d.textContent="Create";const c=document.querySelector("#notes_type"),u=document.getElementById("notes_title"),p=document.getElementById("notes_description");d.onclick=function(){console.log("new note created");let e=h(`${u.value}`,`${p.value}`,`${c.value}`);_.addItem(e),o.style.display="none"},s.append(d)}(),n=!0,t=!1,e=!1,console.log("notes tab on modal now active"))},c.append(r)}(),i.appendChild(d),i.appendChild(l),r.appendChild(i),a.appendChild(c),a.appendChild(s),r.appendChild(a),o.appendChild(r),document.body.appendChild(o)},j.append(I),j.append(M),j.append(S),j.append(L),j.append($),j.append(D),A.append(j),A.append(T),document.body.appendChild(A)})()})();