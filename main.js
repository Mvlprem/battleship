(()=>{"use strict";const e=(e,t)=>({name:e,length:t}),t=e("Carrier",5),n=e("Battleship",4),o=e("Cruiser",3),c=e("Submarine",3),d=e("Destroyer",2),l=[],a=[],r=[t,n,o,c,d];function u(e,t,n,o,c){const d=r[c.length].length,l=[];let a;for(let c=0;c<d;c+=1)a=n?t[e+c]:t[e+10*c],o&&(a.style.backgroundColor="#756b80"),l.push(Number(a.id));c.push(l)}const i=function(e){const t=document.createElement("dialog"),n=document.createElement("h1"),o=document.createElement("button");return t.classList.add("end-game"),o.classList.add("play-again"),n.textContent=e,o.textContent="play again",t.appendChild(n),t.appendChild(o),document.body.appendChild(t),t};let s;const m=[],p=[];let h;const g=[],C=[],f="rgba(255, 166, 116, 255)",b="rgba(158, 252, 198, 255)";function y(e){i(e).showModal(),document.body.querySelector(".play-again").addEventListener("click",(()=>{window.location.reload()}))}function E(e,t){return e.flat().every((e=>t.includes(e)))}function x(e,t,n,o,c){const d=c.some((t=>t.includes(e))),l=o[e];return d?(l.style.backgroundColor=f,l.textContent="X",t.push(e)):(l.style.backgroundColor=b,n.push(e)),d}function L(){const e=Math.floor(100*Math.random()),t=g.includes(e),n=C.includes(e);t||n?L():(x(e,g,C,s,l),E(l,g)&&y("You Loose"))}function v(e){x(Number(e.target.id),m,p,h,a),E(a,m)?y("You Won"):L()}let S,q;function k(){const e=document.querySelector(".axis"),t=e.textContent;"X"===t&&(e.textContent="Y"),"Y"===t&&(e.textContent="X")}function M(){return"X"===document.querySelector(".axis").textContent}function X(e,t){return 0!==t.length&&t.some((t=>t.includes(e)))}function A(e,t,n){const o=[],c=r[n.length].length;for(let n=0;n<=c;n+=1)t&&o.push(e+n),t||o.push(e+10*n);if(0===n.length)return!1;const d=n.flat();return o.some((e=>d.includes(e)))}function w(e,t,n){const o=r[n.length].length;return t?e%10<=10-o:e%100<100-10*o+10}function Y(){if(a.length===r.length)return;const e=Math.floor(100*Math.random());k();const t=M(),n=X(e,a),o=A(e,t,a),c=w(e,t,a);n||o||!c||u(e,S,t,!1,a),Y()}function N(e){const t=Number(e.target.id),n=M(),o=X(t,l),c=A(t,n,l),d=w(t,n,l);o||c||!d||u(t,S,n,!0,l),l.length!==r.length?function(){const e=document.querySelector(".ship"),t=l.length,{name:n}=r[t],o=` - ${r[t].length}`;e.textContent=n+o}():(Y(),function(){const e=document.querySelector(".game-board > .player-board"),t=document.querySelector("dialog .player-board"),n=document.querySelector("dialog");e.parentElement.replaceChild(t,e),n.remove()}(),s=document.querySelectorAll(".player-board > div"),h=document.querySelectorAll(".computer-board > div"),h.forEach((e=>e.addEventListener("click",v,{once:!0}))))}document.addEventListener("DOMContentLoaded",(function(){S=document.querySelectorAll("dialog .block"),S.forEach((e=>e.addEventListener("click",N))),q=document.querySelector("dialog button"),q.addEventListener("click",k)}));function D(e){for(let t=0;t<100;t+=1){const n=document.createElement("div");n.classList.add("block"),n.setAttribute("id",t),e.appendChild(n)}}(function(e){const t=document.createElement("dialog"),n=document.createElement("div"),o=document.createElement("h2"),c=document.createElement("p"),d=document.createElement("span"),l=document.createElement("button"),a=document.createElement("span"),r=document.createElement("div");return o.textContent="Welcome to battleship game",c.textContent="Place your ",d.textContent="Carrier - 5",l.textContent="AXIS - ",a.textContent="X",n.classList.add("popup"),d.classList.add("ship"),a.classList.add("axis"),r.classList.add("player-board"),n.appendChild(o),c.appendChild(d),n.appendChild(c),l.appendChild(a),n.appendChild(l),n.appendChild(r),e(r),t.appendChild(n),document.body.appendChild(t),t})(D).showModal(),function(){const e=document.querySelector(".game-board"),t=document.createElement("div"),n=document.createElement("div");t.classList.add("player-board"),n.classList.add("computer-board"),D(t),D(n),e.appendChild(t),e.appendChild(n)}()})();