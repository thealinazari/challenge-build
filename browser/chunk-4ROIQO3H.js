import{a as H,c as B}from"./chunk-K7DDGHQ7.js";import{$ as N,B as p,H as d,K as F,L as T,M as j,N as n,O as r,P as s,Q as k,S as l,U as A,W as y,X as U,Z as b,e as L,i as I,j as f,ma as P,oa as x,pa as R,q as m,qa as w,r as h,t as v,u as g,z as u}from"./chunk-HNU362IC.js";var E=class t{static isAsideExpanded(){return document.getElementById("aside")?.classList.contains("app-aside--expanded")}static SidebarExpand(){let e=document.getElementById("aside");e&&(t.isAsideExpanded()?(e.classList.remove("app-aside--expanded"),e.classList.add("app-aside"),console.log(e.classList)):(e.classList.remove("app-aside"),e.classList.add("app-aside--expanded")))}},C=E;var M=function(t){return t.Dashboard="dashboards",t}(M||{});var O=(()=>{let e=class e{constructor(){this.http=u(H)}getDashboards(){return this.http.mainGet([M.Dashboard]).pipe(f(o=>o.body.map(i=>new B(i))))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var S=function(t){return t.Theme="app-theme",t}(S||{});var W=(()=>{let e=class e{constructor(){this.theme=new L("dark")}setTheme(){let o=localStorage.getItem(S.Theme)??"dark";document.querySelector("html")?.setAttribute("data-bs-theme",o),this.theme.next(o)}themeSwitcher(o){localStorage.setItem(S.Theme,o),this.setTheme()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-user-menu"]],decls:12,vars:0,consts:[["id","user-menu","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle","border","py-1","px-3","rounded-pill"],["aria-labelledby","user-menu",1,"dropdown-menu","dropdown-menu-dark","border-0"],[1,"dropdown-item"],[1,"dropdown-item","text-danger"]],template:function(i,a){i&1&&(n(0,"a",0),l(1,` Welbilt inc.
`),r(),n(2,"ul",1)(3,"li")(4,"a",2),l(5,"Profile"),r()(),n(6,"li")(7,"a",2),l(8,"Setting"),r()(),n(9,"li")(10,"a",3),l(11,"Logout"),r()()())}});let t=e;return t})();var Z=(t,e)=>({"fas fa-sun":t,"fa-solid fa-moon":e}),V=(()=>{let e=class e{constructor(){this.layoutService=u(W),this.layoutUtil=C}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-header"]],decls:15,vars:4,consts:[[1,"app-header","fixed-top","d-flex","align-items-center"],[1,"header-logo"],["routerLink","/"],["src","/assets/media/logo.svg",2,"width","100px"],[1,"w-100","d-flex","jusitfy-content-center","align-items-center"],[1,"d-flex","align-items-center"],[1,"btn","btn-sm","btn-icon",3,"click"],[1,"fas","fa-bars"],[1,"app-nav","ms-auto"],[1,"nav-item","pe-3"],[1,"btn","btn-icon",3,"click"],[3,"ngClass"],[1,"nav-item","pe-3","dropdown"]],template:function(i,a){i&1&&(n(0,"header",0)(1,"div",1)(2,"a",2),s(3,"img",3),r()(),n(4,"div",4)(5,"div",5)(6,"button",6),k("click",function(){return a.layoutUtil.SidebarExpand()}),s(7,"i",7),r()(),n(8,"nav",8)(9,"ul",5)(10,"li",9)(11,"button",10),k("click",function(){return a.layoutService.themeSwitcher(a.layoutService.theme.value==="dark"?"light":"dark")}),s(12,"i",11),r()(),n(13,"li",12),s(14,"app-user-menu"),r()()()()()),i&2&&(p(12),d("ngClass",U(1,Z,a.layoutService.theme.value==="dark",a.layoutService.theme.value==="light")))},dependencies:[b,x,q]});let t=e;return t})();var ee=t=>["dashboard",t];function te(t,e){if(t&1&&(n(0,"li",2)(1,"a",3),l(2),r()()),t&2){let D=e.$implicit;d("routerLink",y(2,ee,D.title)),p(2),A(" ",D.title," ")}}var Y=(()=>{let e=class e{constructor(){this.dashboards=[]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-aside"]],inputs:{dashboards:"dashboards"},decls:4,vars:0,consts:[["id","aside",1,"app-aside--expanded","position-fixed","pt-2"],[1,"nav"],["routerLinkActive","active",1,"nav-item","w-100","mt-1",3,"routerLink"],[1,"nav-link","px-2","fw-semibold","fs-6","text-gray-200"],["class","nav-item w-100 mt-1","routerLinkActive","active",3,"routerLink"]],template:function(i,a){i&1&&(n(0,"nav",0)(1,"ul",1),T(2,te,3,4,"li",4,F),r()()),i&2&&(p(2),j(a.dashboards))},dependencies:[x,R]});let t=e;return t})();var oe=t=>({"app-main":t}),$=(()=>{let e=class e{constructor(){this.mainService=u(O),this.layoutUtil=C,this.dashboards=[]}ngOnInit(){I(this.mainService.getDashboards().pipe(f(o=>{this.dashboards=o})))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-layout"]],decls:7,vars:4,consts:[[1,"app-wrapper"],[3,"dashboards"],[1,"p-2",3,"ngClass"]],template:function(i,a){i&1&&(n(0,"div")(1,"div"),s(2,"app-header"),r(),n(3,"div",0),s(4,"app-aside",1),n(5,"main",2),s(6,"router-outlet"),r()()()),i&2&&(p(4),d("dashboards",a.dashboards),p(),d("ngClass",y(2,oe,a.layoutUtil.isAsideExpanded())))},dependencies:[b,P,V,Y],styles:[".main[_ngcontent-%COMP%]{height:calc(100vh - 136px)}.main--full[_ngcontent-%COMP%]{height:100vh}"]});let t=e;return t})();var ne=[{path:"dashboard",loadChildren:()=>import("./chunk-5SXHWERD.js").then(t=>t.DashboardModule)}],z=ne;var re=[{path:"",component:$,children:z}],J=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=g({imports:[w.forChild(re),w]});let t=e;return t})();var ze=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=g({imports:[N,J]});let t=e;return t})();export{ze as LayoutModule};
