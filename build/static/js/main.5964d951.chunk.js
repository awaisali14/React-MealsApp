(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__13IIu",total:"Cart_total__1-wD1",actions:"Cart_actions__msDHZ","button--alt":"Cart_button--alt__pKTdx",button:"Cart_button__1OOXL"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__Hd4bQ",summary:"CartItem_summary__2-T5Q",price:"CartItem_price__2FoyX",amount:"CartItem_amount__3aX4P",actions:"CartItem_actions__1S3Vk"}},,,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__lOjLm",modal:"Modal_modal__209Wz","slide-down":"Modal_slide-down__1ur1e"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__3-ory",icon:"HeaderCartButton_icon__zDmaT",badge:"HeaderCartButton_badge__1iW8Q",bump:"HeaderCartButton_bump__3BkMy"}},function(e,t,n){e.exports={meal:"MealsItem_meal__29E4v",description:"MealsItem_description__2DSWd",price:"MealsItem_price__3h8YA"}},,function(e,t,n){e.exports={header:"Header_header__1N_nK","main-image":"Header_main-image__3gmXp"}},,function(e,t,n){e.exports={meals:"AvailableMeals_meals__3Xxsv","meals-appear":"AvailableMeals_meals-appear__1u2Sw"}},function(e,t,n){e.exports={card:"Card_card__1CiEi"}},function(e,t,n){e.exports={input:"Input_input__1eBo_"}},function(e,t,n){e.exports={form:"MealsItemForms_form___kz-C"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2eNDy"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),i=(n(24),n(8)),r=n(1),s=n.n(r),o=n(9),d=n.n(o),l=n(0),m=function(e){return Object(l.jsx)("div",{className:d.a.backdrop})},u=function(e){return Object(l.jsx)("div",{className:d.a.modal,children:Object(l.jsx)("div",{className:d.a.content,children:e.children})})},j=document.getElementById("overlays"),b=function(e){return Object(l.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(l.jsx)(m,{}),j),c.a.createPortal(Object(l.jsx)(u,{children:e.children}),j)]})},x=n(3),O=n.n(x),h=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),_=n(4),p=n.n(_),f=function(e){var t="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:p.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:p.a.summary,children:[Object(l.jsx)("span",{className:p.a.price,children:t}),Object(l.jsxs)("span",{className:p.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:p.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},v=function(e){var t=Object(r.useContext)(h),n=function(e){t.removeItem(e)},a=function(e){t.addItem(e)},c=Object(l.jsx)("ul",{className:O.a["cart-items"],children:t.items.map((function(e){return Object(l.jsx)(f,{name:e.name,price:e.price,amount:e.amount,onRemove:n.bind(null,e.id),onAdd:a.bind(null,e)},e.id)}))}),i=t.items.length>0,s="$".concat(t.totalAmount.toFixed(2));return Object(l.jsxs)(b,{children:[c,Object(l.jsxs)("div",{className:O.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:s})]}),Object(l.jsxs)("div",{className:O.a.actions,children:[Object(l.jsx)("button",{className:O.a["button--alt"],onClick:e.hidemodleHandler,children:"Close"}),i&&Object(l.jsx)("button",{className:O.a.button,children:"Order"})]})]})},g=n.p+"static/media/meals.2971f633.jpg",C=n(13),N=n.n(C),y=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},A=n(10),I=n.n(A),H=function(e){var t=Object(r.useContext)(h).items.reduce((function(e,t){return e+t.amount}),0);return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("button",{className:I.a.button,onClick:e.modleHandler,children:[Object(l.jsx)("span",{className:I.a.icon,children:Object(l.jsx)(y,{})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsx)("span",{className:I.a.badge,children:t})]})})},k=function(e){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("header",{className:N.a.header,children:[Object(l.jsx)("h1",{children:"MealsApp"}),Object(l.jsx)(H,{modleHandler:e.modleHandler})]}),Object(l.jsx)("div",{className:N.a["main-image"],children:Object(l.jsx)("img",{src:g,alt:"Food Images"})})]})},M=n(15),w=n.n(M),F=n(16),B=n.n(F),D=function(e){return Object(l.jsx)("div",{className:B.a.card,children:e.children})},E=n(11),S=n.n(E),z=n(2),R=n(17),V=n.n(R),T=s.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:V.a.input,children:[Object(l.jsx)("label",{htmlFor:e.data.id,children:e.label}),Object(l.jsx)("input",Object(z.a)({ref:t},e.data))]})})),X=n(18),P=n.n(X),Q=function(e){var t=Object(r.useRef)();return Object(l.jsxs)("form",{className:P.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5||e.enteredValueHandler(c)},children:[Object(l.jsx)(T,{ref:t,data:{id:"amount_"+e.id,type:"number",defaultValue:"1",min:"1",max:"5",step:"1"},label:"Amount"}),Object(l.jsx)("button",{children:"+ Add"})]})},W=function(e){var t=Object(r.useContext)(h),n="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:S.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{className:S.a.description,children:e.description}),Object(l.jsx)("div",{className:S.a.price,children:n})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(Q,{enteredValueHandler:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})," "]})]})},Y=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],$=function(){var e=Y.map((function(e){return Object(l.jsx)(W,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)("section",{className:w.a.meals,children:Object(l.jsx)(D,{children:Object(l.jsx)("ul",{children:e})})})})},J=n(19),K=n.n(J),L=function(){return Object(l.jsxs)("section",{className:K.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},q=function(){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(L,{}),Object(l.jsx)($,{})]})},G=n(14),Z={items:[],totalAmount:0},U=function(e,t){if("ADD"===t.key){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(z.a)(Object(z.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(G.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.key){var s,o=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[o],l=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(z.a)(Object(z.a)({},d),{},{amount:d.amount-1});(s=Object(G.a)(e.items))[o]=m}return{items:s,totalAmount:l}}return Z},ee=function(e){var t=Object(r.useReducer)(U,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({key:"ADD",item:e})},removeItem:function(e){c({key:"REMOVE",id:e})}};return Object(l.jsx)(h.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(ee,{children:[Object(l.jsx)(k,{modleHandler:function(){a(!0)}}),n&&Object(l.jsx)(v,{hidemodleHandler:function(){a(!1)}}),Object(l.jsx)("main",{children:Object(l.jsx)(q,{})})]})};c.a.render(Object(l.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.5964d951.chunk.js.map