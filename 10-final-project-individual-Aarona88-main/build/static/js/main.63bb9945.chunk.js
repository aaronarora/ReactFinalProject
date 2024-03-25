(this["webpackJsonplibrary-browser"]=this["webpackJsonplibrary-browser"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(13),s=n.n(a),o=(n(19),n(5)),i=n(2),l=(n(20),n(7)),u=n.n(l),j=n(6),b=n(9),h=n(3),v=(n(22),n(1));var f=function(){var e=Object(o.c)(),t=Object(h.a)(e,2),n=(t[0],t[1]),c=Object(r.useState)(""),a=Object(h.a)(c,2),s=a[0],i=a[1];return Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({q:s})},children:[Object(v.jsx)("input",{className:"SearchBox-search-input",value:s,onChange:function(e){i(e.target.value)}})," ",Object(v.jsx)("button",{className:"SearchBox-search-button",type:"submit",children:"Search"})]})},d=n(11),O=n(14);function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new URLSearchParams(Object(O.a)({jscmd:"details"},t)).toString(),r="https://openlibrary.org/works/"+e+".json?"+n;return fetch(r,{redirect:"follow"}).then((function(e){return e.json()}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new URLSearchParams(Object(O.a)({jscmd:"details"},t)).toString(),r="https://openlibrary.org/authors/"+e+".json?"+n;return fetch(r).then((function(e){return e.json()}))}function m(e){var t=e.split("/");return t[t.length-1]}n(24);var g=function(e){var t=e.olid,n=e.onFavoriteChange,c=Object(r.useState)(null),a=Object(h.a)(c,2),s=a[0],o=a[1];return Object(r.useEffect)((function(){o(function(e){var t=localStorage.getItem("favorites");return null!==t&&JSON.parse(t).includes(e)}(t))}),[t]),null===s?null:Object(v.jsx)("div",{children:Object(v.jsx)("a",{href:"#",className:"Star-star"+(s?" favorited":""),onClick:function(e){e.preventDefault();var r=!s;!function(e,t){var n=localStorage.getItem("favorites");if(null!==n){var r=JSON.parse(n);t?r.includes(e)||localStorage.setItem("favorites",JSON.stringify([].concat(Object(d.a)(r),[e]))):localStorage.setItem("favorites",JSON.stringify(r.filter((function(t){return t!==e}))))}else localStorage.setItem("favorites",JSON.stringify(t?[e]:[]))}(t,r),o(!s),"undefined"!==typeof n&&n({olid:t,isFavorite:r})},children:"\u2605"})})};n(25);var k=function(e){var t=e.book,n=e.compact,r=void 0!==n&&n,c=e.onFavoriteChange;function a(e){return!r||e.length<=500?e:e.substr(0,300)+"..."}var s,o,i,l=t.title,u=t.authorNames,j=t.olid,b=t.description,f=t.covers;return s="undefined"===typeof b?Object(v.jsx)("em",{children:"No description"}):a("object"===typeof b&&null!==b?b.value:b),o="undefined"===typeof f||0===f.length?Object(v.jsx)("div",{className:"Book-cover-placeholder",children:"Cover art missing"}):Object(v.jsx)("img",{className:"Book-cover",src:"https://covers.openlibrary.org/b/id/"+f[0]+"-M.jpg",alt:"Cover for "+l}),i="undefined"===typeof u?Object(v.jsx)("div",{children:"No author information"}):Object(v.jsxs)("div",{children:["by"," ",Object(d.a)(u.entries()).map((function(e){var t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(v.jsxs)(v.Fragment,{children:[n>0&&n==u.length-1?" and ":null,n>0&&n!==u.length-1?", ":null,Object(v.jsx)("span",{className:"Book-author",children:r})]})}))]}),Object(v.jsxs)("article",{className:"Book-container"+(r?" compact":""),children:[Object(v.jsxs)("div",{className:"Book-header-and-star",children:[Object(v.jsx)("h3",{children:Object(v.jsx)("a",{className:"Book-title",href:"https://openlibrary.org/works/"+j,children:l})}),Object(v.jsx)(g,{olid:j,onFavoriteChange:c})]}),i,Object(v.jsx)("div",{className:"book-cover-container",children:o}),Object(v.jsx)("div",{className:"Book-description",children:s})]})};var S=function(e){var t=e.books,n=e.onFavoriteChange;return Object(v.jsx)("div",{children:t.map((function(e){return Object(v.jsx)(k,{onFavoriteChange:n,handlekey:e.olid,book:e})}))})},N=(n(26),["OL8483260W","OL257263W","OL17930368W","OL16995607W","OL4620995W"]),y=5e3;var w=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),s=Object(h.a)(a,2),o=s[0],i=s[1],l=Object(r.useRef)(null);return Object(r.useRef)(null).current=n,Object(r.useEffect)(Object(b.a)(u.a.mark((function e(){var t,n,r,a,s,o,b,h,v,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=Object(j.a)(N),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=32;break}return a=r.value,e.next=8,p(a);case 8:s=e.sent,o=[],b=Object(j.a)(s.authors),e.prev=11,b.s();case 13:if((h=b.n()).done){e.next=21;break}return v=h.value,e.next=17,x(m(v.author.key));case 17:f=e.sent,o.push(f.name);case 19:e.next=13;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(11),b.e(e.t0);case 26:return e.prev=26,b.f(),e.finish(26);case 29:t.push({authorNames:o,description:s.description,title:s.title,covers:s.covers,olid:a});case 30:e.next=4;break;case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(2),n.e(e.t1);case 37:return e.prev=37,n.f(),e.finish(37);case 40:return c(t),l.current=setInterval((function(){i((function(e){return e<N.length-1?e+1:0}))}),y),e.abrupt("return",(function(){null!==l.current&&clearInterval(l.current)}));case 43:case"end":return e.stop()}}),e,null,[[2,34,37,40],[11,23,26,29]])}))),[]),Object(v.jsxs)("div",{className:"TopBooks-container",children:[Object(v.jsx)("h2",{children:"Top books"}),null===n?null:Object(v.jsx)(k,{compact:!0,book:n[o]})]})};n(27);var C=function(){var e=Object(o.c)(),t=Object(h.a)(e,2),n=t[0],c=(t[1],Object(r.useState)([])),a=Object(h.a)(c,2),s=a[0],i=a[1],l=Object(r.useState)(!1),d=Object(h.a)(l,2),O=d[0],x=d[1],g=n.get("q");return Object(r.useEffect)((function(){null!=g&&""!==g.trim()&&(x(!0),function(e){var t="https://openlibrary.org/search.json?"+new URLSearchParams(e).toString();return fetch(t).then((function(e){return e.json()}))}({q:g,limit:8}).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var n,r,c,a,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=Object(j.a)(t.docs),e.prev=2,r.s();case 4:if((c=r.n()).done){e.next=20;break}return a=c.value,s=m(a.key),o=void 0,e.prev=8,e.next=11,p(s);case 11:o=e.sent,e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(8),e.abrupt("continue",18);case 17:n.push({authorNames:a.author_name,description:o.description,title:a.title,covers:o.covers,olid:s});case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),r.e(e.t1);case 25:return e.prev=25,r.f(),e.finish(25);case 28:i(n),x(!1);case 30:case"end":return e.stop()}}),e,null,[[2,22,25,28],[8,14]])})));return function(t){return e.apply(this,arguments)}}()))}),[n]),Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Search books"}),Object(v.jsx)(f,{}),null===g?null:O?Object(v.jsx)("div",{className:"SearchPage-results-notice",children:"Loading search results..."}):0===s.length?Object(v.jsxs)("div",{className:"SearchPage-results-notice",children:["No results for ",Object(v.jsx)("q",{children:g})]}):Object(v.jsx)(S,{books:s})]})]})};var F=function(){var e=Object(o.c)(),t=Object(h.a)(e,2),n=(t[0],t[1],Object(r.useState)([])),c=Object(h.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(!0),l=Object(h.a)(i,2),f=l[0],d=l[1],O=null===localStorage.getItem("favorites")?[]:JSON.parse(localStorage.getItem("favorites"));return Object(r.useEffect)(Object(b.a)(u.a.mark((function e(){var t,n,r,c,a,o,i,l,b,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=Object(j.a)(O),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=32;break}return c=r.value,e.next=8,p(c);case 8:a=e.sent,o=[],i=Object(j.a)(a.authors),e.prev=11,i.s();case 13:if((l=i.n()).done){e.next=21;break}return b=l.value,e.next=17,x(m(b.author.key));case 17:h=e.sent,o.push(h.name);case 19:e.next=13;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(11),i.e(e.t0);case 26:return e.prev=26,i.f(),e.finish(26);case 29:t.push({authorNames:o,description:a.description,title:a.title,covers:a.covers,olid:c});case 30:e.next=4;break;case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(2),n.e(e.t1);case 37:return e.prev=37,n.f(),e.finish(37);case 40:d(!1),s(t);case 42:case"end":return e.stop()}}),e,null,[[2,34,37,40],[11,23,26,29]])}))),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Favorites"}),f?null:0===a.length?Object(v.jsx)("em",{children:"No saved favorites"}):Object(v.jsx)(S,{books:a,onFavoriteChange:function(e){var t=e.olid;if(!e.isFavorite){var n=a.filter((function(e){return e.olid!==t}));s(n)}}})]})};var B=function(){return Object(v.jsxs)("div",{className:"App-container",children:[Object(v.jsxs)("nav",{className:"App-navbar",children:[Object(v.jsx)("h1",{children:"Library browser"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"search",activeClassName:"active",children:"Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"favorites",activeClassName:"active",children:"Favorites"})})]})]}),Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{path:"/",element:Object(v.jsx)(i.a,{replace:!0,to:"/search"})}),Object(v.jsx)(i.b,{path:"/search",element:Object(v.jsx)(C,{})}),Object(v.jsx)(i.b,{path:"/favorites",element:Object(v.jsx)(F,{})})]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(o.a,{children:Object(v.jsx)(B,{})})}),document.getElementById("root")),L()}},[[28,1,2]]]);
//# sourceMappingURL=main.63bb9945.chunk.js.map