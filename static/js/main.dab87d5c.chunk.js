(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),r=s.n(i),n=s(6),a=s.n(n),l=(s(13),s(4)),d=s.n(l),o=s(7),p=s(2),u=(s(5),function(e){var t=e.product,s=Object(i.useState)(t.priceRetail),r=Object(p.a)(s,2),n=r[0],a=r[1],l=Object(i.useState)(t.priceGold),d=Object(p.a)(l,2),o=d[0],u=d[1],j=Object(i.useState)(0),m=Object(p.a)(j,2),b=m[0],_=m[1],O=Object(i.useState)(!0),h=Object(p.a)(O,2),x=h[0],f=h[1],v=Object(i.useState)(!1),N=Object(p.a)(v,2),g=N[0],w=N[1];return Object(c.jsx)("li",{className:"products-list__item",children:Object(c.jsxs)("div",{className:"products-list__item-wrapper",children:[Object(c.jsxs)("section",{className:"products-list__item-main-info",children:[Object(c.jsx)("div",{className:"products-list__item-img-wrapper",children:Object(c.jsx)("img",{className:"products-list__item-img",src:function(e,t,s){var c=e.lastIndexOf(t);return c<0?e:e.substring(0,c)+s+e.substring(c)}(t.primaryImageUrl,".jpg","_220x220_1"),alt:"product image"})}),Object(c.jsxs)("div",{className:"products-list__item-product-info",children:[Object(c.jsxs)("div",{className:"products-list__item-product-identity",children:[Object(c.jsxs)("div",{className:"products-list__item-product-code",children:[Object(c.jsxs)("span",{children:["\u041a\u043e\u0434: ",t.code.replace(/^0+/,"")]}),Object(c.jsx)("span",{className:"products-list__item-product-status",children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435"})]}),Object(c.jsx)("a",{className:"products-list__item-product-title",href:"#product",children:t.title})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{className:"products-list__item-product-needs",children:["\u041c\u043e\u0433\u0443\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f: "," "]}),t.assocProducts.split("\n").map((function(e,t){return Object(c.jsx)("a",{href:"#",className:"products-list__item-product-needs--link",children:e},t)}))]})]})]}),Object(c.jsxs)("section",{className:"products-list__price-info",children:[Object(c.jsxs)("div",{className:"products-list__price-card",children:[Object(c.jsx)("span",{className:"products-list__price-card-text",children:"\u041f\u043e \u043a\u0430\u0440\u0442\u0435 \u043a\u043b\u0443\u0431\u0430"}),Object(c.jsxs)("span",{className:"products-list__price-card-gold",children:[o," \u20bd"]})]}),Object(c.jsxs)("span",{className:"products-list__price-card-default",children:[n," \u20bd"]}),Object(c.jsxs)("p",{className:"products-list__price-binding",children:["\u041c\u043e\u0436\u043d\u043e \u043a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",o-34.3," \u0431\u0430\u043b\u043b\u0430"]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{className:x?"products-list__item-measure products-list__item-measure-active":"products-list__item-measure",onClick:function(){a(t.priceGold),u(t.priceRetail),f(!x),w(!1),console.log(n),console.log(o)},children:["\u0417\u0430 ",t.unitAlt]}),Object(c.jsxs)("span",{className:g?"products-list__item-measure products-list__item-measure-active":"products-list__item-measure",onClick:function(){a(t.priceGoldAlt.toFixed(2)),u(t.priceRetailAlt.toFixed(2)),w(!g),f(!1),console.log(n),console.log(o)},children:["\u0417\u0430 ",t.unitFull.replace("\u043a\u0430","\u043a\u0443")]})]}),Object(c.jsx)("div",{className:"products-list__price-pack-info-wrapper",children:Object(c.jsxs)("div",{className:"products-list__price-pack-info",children:[Object(c.jsx)("span",{className:"products-list__price-pack-info--icon"}),Object(c.jsxs)("span",{className:"products-list__price-pack-info--text",children:["\u041f\u0440\u043e\u0434\u0430\u0451\u0442\u0441\u044f \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0430\u043c\u0438: 1 \u0443\u043f\u0430\u043a. = ",(t.unitRatio/t.unitRatioAlt).toFixed(2)," ",t.unitAlt]})]})}),Object(c.jsxs)("div",{className:"products-list__price-numbers-container",children:[Object(c.jsx)("div",{className:"products-list__price-numbers-wrapper",children:Object(c.jsxs)("div",{className:"products-list__price-numbers-input-wrapper",children:[Object(c.jsx)("input",{className:"products-list__price-numbers-input",type:"number",readOnly:!0,value:b,onChange:function(e){_(+e.target.value)}}),Object(c.jsxs)("div",{className:"products-list__price-numbers-arrows",children:[Object(c.jsx)("span",{onClick:function(){_((function(e){return e+1}))},children:Object(c.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M8.33266 4.07594C8.6572 4.05948 8.98004 4.15667 9.24182 4.36727L9.35008 4.46446L14.5355 9.64991C15.0562 10.1706 15.0562 11.0148 14.5355 11.5355C14.0148 12.0562 13.1706 12.0562 12.6499 11.5355L8.33261 7.21894L4.01675 11.5355C3.49605 12.0562 2.65183 12.0562 2.13113 11.5355C1.61043 11.0148 1.61043 10.1706 2.13113 9.64991L7.31658 4.46446C7.59557 4.18547 7.96744 4.05597 8.33266 4.07594Z",fill:"#12171B"})})}),Object(c.jsx)("span",{onClick:function(){b>0&&_((function(e){return e-1}))},children:Object(c.jsx)("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M3.90849 5.36556L4.01675 5.46276L8.33261 9.77823L12.6499 5.46276C13.1706 4.94206 14.0148 4.94206 14.5355 5.46276C15.0215 5.94874 15.0539 6.71655 14.6327 7.24011L14.5355 7.34837L9.35008 12.5338C9.07085 12.8131 8.69857 12.9426 8.33304 12.9223C7.96744 12.9423 7.59557 12.8128 7.31658 12.5338L2.13113 7.34837C1.61043 6.82767 1.61043 5.98345 2.13113 5.46276C2.61712 4.97677 3.38493 4.94437 3.90849 5.36556Z",fill:"#12171B"})})})]})]})}),Object(c.jsx)("div",{className:"products-list__price-numbers-cart",children:Object(c.jsx)("span",{"data-product-id":t.productId,children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})})]})]})]})})}),j=function(){var e=Object(i.useState)([]),t=Object(p.a)(e,2),s=t[0],r=t[1],n=Object(i.useState)(!1),a=Object(p.a)(n,2),l=a[0],j=a[1];Object(i.useEffect)((function(){m()}),[]);var m=function(){var e=Object(o.a)(d.a.mark((function e(){var t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("/products");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,r(s),j(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l?Object(c.jsx)("h3",{children:"Loading..."}):Object(c.jsx)("ul",{className:"products-list",children:l||0!==s.length?s.map((function(e){return Object(c.jsx)(u,{product:e},e.productId)})):Object(c.jsx)("p",{children:"No products to show..."})})},m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j,{})})})};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))},5:function(e,t,s){}},[[15,1,2]]]);
//# sourceMappingURL=main.dab87d5c.chunk.js.map