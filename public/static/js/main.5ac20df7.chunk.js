(this["webpackJsonppet-hotel-front"]=this["webpackJsonppet-hotel-front"]||[]).push([[0],{113:function(e,t,c){},174:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(3),n=c.n(a),r=c(33),o=c.n(r),l=(c(87),c(9)),i=c(7),j=(c(88),c(89),c(12));c(90);var d=function(){var e=Object(a.useState)("hidden"),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){window.onscroll=function(){document.documentElement.scrollTop>450?n("show"):n("hidden")}}),[]),Object(s.jsx)("div",{className:c,children:Object(s.jsx)("div",{className:"nav",children:Object(s.jsxs)("div",{className:"nav-content",children:[Object(s.jsx)(l.b,{className:"nav-content",to:"/",children:Object(s.jsx)("p",{children:"Entrar"})}),Object(s.jsx)(l.b,{className:"nav-content",to:"/",children:Object(s.jsx)("p",{children:"Cadastre-se"})})]})})})};var b=function(e){return e.type?Object(s.jsx)("button",{type:e.type,className:"botao-".concat(e.color),children:e.label}):Object(s.jsx)(l.b,{to:e.targetUrl,children:Object(s.jsx)("button",{className:"botao-".concat(e.color),children:e.label})})},m=c(29),p=c.n(m),O=c(36),h=c(25),u=c(10),x=c(37),g=c.n(x);var v=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{name:e.name,type:e.type,placeholder:e.label,value:e.value,onChange:e.onChange}),e.error?Object(s.jsx)("small",{children:e.error}):Object(s.jsx)(s.Fragment,{})]})},f=Object(a.createContext)({token:"",user:{}});function N(e){var t=Object(a.useState)({token:"",user:{}}),c=Object(j.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("loggedInUser"),t=JSON.parse(e||'""');t.user&&r(Object(u.a)({},t))}),[]),Object(s.jsx)(f.Provider,{value:{loggedInUser:n,setLoggedInUser:r},children:e.children})}var w=function(){var e=Object(a.useState)({email:"",password:""}),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(f),o=Object(i.g)();function l(e){n(Object(u.a)(Object(u.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))}function d(){return(d=Object(O.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.a.post("http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/user/login",c);case 4:s=e.sent,r.setLoggedInUser(Object(u.a)({},s.data)),localStorage.setItem("loggedInUser",JSON.stringify(Object(u.a)({},s.data))),o.push("/dashboard"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(s.jsx)("div",{className:"signin",children:Object(s.jsxs)("form",{onSubmit:function(e){return d.apply(this,arguments)},children:[Object(s.jsx)(v,{name:"email",label:"e-mail",type:"text",value:c.email,onChange:l}),Object(s.jsx)(v,{name:"password",label:"Password",type:"password",value:c.password,onChange:l}),Object(s.jsx)(b,{type:"submit",color:"laranja",label:"Entrar"})]})})};var y=function(){return Object(s.jsxs)("div",{className:"home-info",children:[Object(s.jsx)(w,{}),Object(s.jsx)("div",{className:"barra",children:Object(s.jsx)("p",{children:"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014"})}),Object(s.jsx)("small",{children:Object(s.jsx)("p",{children:"Ainda n\xe3o tem conta?"})}),Object(s.jsx)(b,{targetUrl:"/register",color:"azul",label:"Cadastre-se"})]})},C=c.p+"static/media/alceu (2).98277e59.jpeg",z=c.p+"static/media/lummy.a3da264c.jpeg",I=c.p+"static/media/zoe.036b232d.jpeg",S=c.p+"static/media/earl.28dd3a00.jpeg",P=c.p+"static/media/amora.d70a697b.jpeg",k=c.p+"static/media/cristoff.15aa8aa4.jpeg",E=c.p+"static/media/buzz.664b559b.jpg",A=c.p+"static/media/logo.f235338a.png",D=c.p+"static/media/missaoImg.12e9fbc0.jpg",F=c.p+"static/media/visaoImg.67f09341.jpg",M=c.p+"static/media/valoresImg.bad94384.jpg";var U=function(){return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)(d,{}),Object(s.jsxs)("div",{className:"home-container",children:[Object(s.jsx)("img",{className:"logo",src:A,alt:"logo"}),Object(s.jsx)(y,{})]}),Object(s.jsxs)("div",{className:"about",children:[Object(s.jsx)("h2",{children:"O hotel"}),Object(s.jsxs)("p",{children:["Um lugar para deixar seu pet com toda tranquilidade e seguran\xe7a.",Object(s.jsx)("br",{}),"Profissionais capacitados com anos de experi\xeancia em comportamento animal."]})]}),Object(s.jsxs)("div",{className:"mvv",children:[Object(s.jsxs)("div",{className:"dinossauro",children:[Object(s.jsx)("img",{src:D,alt:"Miss\xe3o"}),Object(s.jsxs)("div",{className:"text",children:[Object(s.jsx)("h3",{children:"Miss\xe3o"}),Object(s.jsx)("p",{children:"Nosso prop\xf3sito \xe9 ser um local seguro, feliz e saud\xe1vel, que proporciona uma experi\xeancia com muita divers\xe3o, amor, carinho, dedica\xe7\xe3o e aten\xe7\xe3o para os pets. Amamos cada animalzinho como se fosse nosso!"})]})]}),Object(s.jsxs)("div",{className:"dinossauro",children:[Object(s.jsxs)("div",{className:"text",children:[Object(s.jsx)("h3",{children:"Vis\xe3o"}),Object(s.jsx)("p",{children:"Queremos ser refer\xeancia e primeira lembran\xe7a e escolha de lugar para deixar o seu pet, atrav\xe9s de um trabalho confi\xe1vel e de excel\xeancia. Ser segunda casa e segunda fam\xedlia para o seu bichinho na sua aus\xeancia, com muita dedica\xe7\xe3o e amor."})]}),Object(s.jsx)("img",{src:F,alt:"Vis\xe3o"})]}),Object(s.jsxs)("div",{className:"dinossauro",children:[Object(s.jsx)("img",{src:M,alt:"Valores"}),Object(s.jsxs)("div",{className:"text",children:[Object(s.jsx)("h3",{children:"Valores"}),Object(s.jsx)("p",{children:"Comprometimento, respeito, credibilidade, \xe9tica, transpar\xeancia, confian\xe7a, seguran\xe7a, conforto, dedica\xe7\xe3o, cuidado, amor e carinho. Isso nos garante satisfa\xe7\xe3o plena de todos os nossos clientes e h\xf3spedes!"})]})]})]}),Object(s.jsxs)("div",{className:"structure",children:[Object(s.jsx)("h2",{children:"Estrutura"}),Object(s.jsxs)("div",{className:"structure-imgs",children:[Object(s.jsx)("img",{src:"https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-cachorros-e-gatos-1-768x432.jpg",alt:""}),Object(s.jsx)("img",{src:"https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-chorros-gatos.png",alt:""}),Object(s.jsx)("img",{src:"https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-cachorros-e-gatos.jpg",alt:""})]})]}),Object(s.jsxs)("div",{className:"clients",children:[Object(s.jsx)("h2",{children:"Clientes VIP"}),Object(s.jsxs)("div",{className:"client-pets",children:[Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:P,alt:"amora"}),Object(s.jsx)("p",{children:"Amora"})]}),Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:z,alt:"lummy"}),Object(s.jsx)("p",{children:"Lummy"})]}),Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:C,alt:"alceu"}),Object(s.jsx)("p",{children:"Alceu"})]}),Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:E,alt:"buzz"}),Object(s.jsx)("p",{children:"Buzz"})]})]}),Object(s.jsxs)("div",{className:"client-pets",children:[Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:I,alt:"zoe"}),Object(s.jsx)("p",{children:"Zoe"})]}),Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:E,alt:"buzz"}),Object(s.jsx)("p",{children:"Buzz"})]}),Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:k,alt:"christoff"}),Object(s.jsx)("p",{children:"Christoff"})]}),Object(s.jsxs)("div",{className:"client-pet",children:[Object(s.jsx)("img",{className:"pet-img",src:S,alt:"earl"}),Object(s.jsx)("p",{children:"Earl"})]})]})]}),Object(s.jsx)("div",{className:"footer",children:Object(s.jsxs)("footer",{children:[Object(s.jsx)("p",{children:"Projeto desenvolvido para o bootcamp de Web Development da IRONHACK."}),Object(s.jsxs)("div",{className:"footer-links",children:[Object(s.jsx)(l.b,{className:"footer-link",to:"/",children:"Rodrigo Matos | GitHub"}),Object(s.jsx)(l.b,{className:"footer-link",to:"/",children:"Laura Ferraz | GitHub"}),Object(s.jsx)(l.b,{className:"footer-link",to:"/",children:"Thal\xeda Berger | GitHub"})]})]})})]})};var G=function(){var e=Object(a.useState)({email:"",password:""}),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({email:null,password:null}),o=Object(j.a)(r,2),l=o[0],d=o[1],m=Object(i.g)();function x(e){n(Object(u.a)(Object(u.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))}function f(){return(f=Object(O.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.a.post("http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/user/signup",c);case 4:s=e.sent,console.log(s.data),m.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response),d(Object(u.a)({},e.t0.response.data.errors));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(s.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(s.jsx)(v,{name:"email",label:"e-mail",type:"text",value:c.email,onChange:x,error:l.email}),Object(s.jsx)(v,{name:"password",label:"Password",type:"password",value:c.password,onChange:x,error:l.password}),Object(s.jsxs)("div",{className:"botoes-cadastro",children:[Object(s.jsx)(b,{type:"submit",color:"laranja",label:"Cadastrar"}),Object(s.jsx)(b,{targetUrl:"/",color:"azul",label:"Voltar"})]})]})};c(68);var T=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"cadastro",children:[Object(s.jsx)("h2",{children:"Cadastre-se"}),Object(s.jsx)(G,{}),Object(s.jsx)(l.b,{to:"/api/auth/google",children:"Cadastrar com Google"})]})})};var V=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"cadastro cadastro-pet",children:[Object(s.jsx)("h2",{children:"Sobre o Pet"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",placeholder:"Nome"}),Object(s.jsxs)("select",{className:"select",name:"tipo-pet",children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Tipo de Pet"}),Object(s.jsx)("option",{value:"Dog",children:"Cachorro"}),Object(s.jsx)("option",{value:"Cat",children:"Gato"}),Object(s.jsx)("option",{value:"Rabbit",children:"Coelho"}),Object(s.jsx)("option",{value:"Dinossaur",children:"Dinossauro"})]}),Object(s.jsxs)("select",{className:"select",name:"porte-pet",children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Porte"}),Object(s.jsx)("option",{value:"Small",children:"Pequeno"}),Object(s.jsx)("option",{value:"Medium",children:"M\xe9dio"}),Object(s.jsx)("option",{value:"Big",children:"Grande"})]}),Object(s.jsxs)("select",{className:"select",name:"breed",children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"G\xeanero"}),Object(s.jsx)("option",{value:"Macho",children:"Macho"}),Object(s.jsx)("option",{value:"F\xeamea",children:"F\xeamea"})]}),Object(s.jsx)("input",{type:"text",placeholder:"Alergias"}),Object(s.jsx)("input",{type:"text",placeholder:"Doen\xe7as"}),Object(s.jsx)("input",{type:"text",placeholder:"Recomenda\xe7\xf5es"}),Object(s.jsx)("label",{htmlFor:"image-upload",children:"Enviar Imagem"}),Object(s.jsx)("input",{type:"file",name:"image-upload",id:"image-upload"}),Object(s.jsxs)("div",{className:"botoes-cadastro",children:[Object(s.jsx)("button",{className:"botao-azul",children:"Adicionar outro Pet"}),Object(s.jsx)("button",{type:"submit",className:"botao-laranja",children:"Concluir"})]})]})]})})};c(113);var B=function(){return Object(s.jsxs)("div",{className:"sobre-humano",children:[Object(s.jsx)("h2",{children:"Meu Perfil"}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Nome:"})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Telefone:"})," "]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Email:"})," "]})]})};var L=function(){return Object(s.jsxs)("div",{className:"sobre-pet",children:[Object(s.jsx)("h2",{children:"Meus Pets"}),Object(s.jsx)("img",{src:"https://i.ibb.co/3Svc7K4/Whats-App-Image-2020-12-03-at-20-08-29.jpg",alt:""}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Nome:"})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Tipo:"})," "]}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Porte:"})}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"G\xeanero:"})})]})};var R=function(){return Object(s.jsxs)("div",{className:"agendamentos",children:[Object(s.jsx)("h2",{children:"Meus Agendamentos"}),Object(s.jsx)("p",{children:"Nenhum agendamento"})]})},H=c(78),J=c.n(H);c(114);var q=function(){var e=Object(a.useState)(new Date),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),o=Object(j.a)(r,2),l=o[0],i=o[1];return console.log(c),console.log(l),Object(s.jsxs)("div",{children:[Object(s.jsx)(J.a,{selected:c,onChange:function(e){var t=Object(j.a)(e,2),c=t[0],s=t[1];n(c),i(s)},startDate:c,endDate:l,selectsRange:!0,inline:!0}),Object(s.jsx)("h4",{children:"Voc\xea selecionou:"}),Object(s.jsxs)("p",{children:["In\xedcio: ".concat(c)," "]}),Object(s.jsx)("p",{children:"null"==="".concat(l)?"":"Fim: ".concat(l)}),Object(s.jsx)(b,{type:"submit",color:"azul",label:"Agendar"})]})};var K=function(){return Object(s.jsxs)("div",{className:"agendar",children:[Object(s.jsx)("h2",{children:"Agendar Estadia"}),Object(s.jsx)(q,{})]})};var W=function(){return Object(s.jsx)("div",{className:"dash-container",children:Object(s.jsxs)("div",{className:"dashboard",children:[Object(s.jsxs)("div",{className:"sobre",children:[Object(s.jsx)(B,{}),Object(s.jsx)(L,{}),Object(s.jsx)(b,{type:"submit",color:"laranja",label:"Editar"})]}),Object(s.jsxs)("div",{className:"agenda",children:[Object(s.jsx)(R,{}),Object(s.jsx)(K,{})]})]})})},Q=c(81);var Z=function(e){var t=e.component,c=Object(Q.a)(e,["component"]),n=Object(a.useContext)(f);return Object(s.jsx)(i.b,Object(u.a)(Object(u.a)({},c),{},{render:function(e){return n.loggedInUser.user._id?Object(s.jsx)(t,Object(u.a)(Object(u.a)({},e),c)):Object(s.jsx)(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var _=function(){return Object(s.jsx)("div",{className:"",children:Object(s.jsx)(l.a,{children:Object(s.jsx)(N,{children:Object(s.jsxs)(i.d,{children:[Object(s.jsx)(i.b,{exact:!0,path:"/",component:U}),Object(s.jsx)(i.b,{exact:!0,path:"/register",component:T}),Object(s.jsx)(Z,{exact:!0,path:"/cadastro/pet",component:V}),Object(s.jsx)(Z,{exact:!0,path:"/dashboard",component:W})]})})})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,179)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),X()},68:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){}},[[174,1,2]]]);
//# sourceMappingURL=main.5ac20df7.chunk.js.map