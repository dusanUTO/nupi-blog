(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{467:function(t,e,l){var content=l(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(93).default)("49705c30",content,!0,{sourceMap:!1})},468:function(t,e,l){"use strict";l(467)},469:function(t,e,l){var r=l(92)(!1);r.push([t.i,".NuxtLogo{animation:appear 1s}@keyframes appear{0%{opacity:0}}",""]),t.exports=r},470:function(t,e,l){"use strict";l.r(e);l(468);var r=l(76),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("NuxtLink",{attrs:{to:"/"}},[e("svg",{staticClass:"NuxtLogo inline",attrs:{width:"125",height:"60",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#2120DD"}}),t._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#D100F2"}}),t._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#00BFFF"}})])])}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,l){"use strict";l.r(e);var r=l(6),n=(l(43),{name:"Nav",methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$strapi.logout();case 2:t.$nuxt.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}}}),o=l(76),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex space-x-5 items-center justify-center bg-black text-white py-3 sm:py-5"},[e("Logo"),t._v(" "),e("NuxtLink",{staticClass:"text-white hover:text-yellow-400 visited:text-yellow-400",attrs:{to:"/articles"}},[t._v("Articles")]),t._v(" "),null===t.$strapi.user?e("div",[e("NuxtLink",{staticClass:"border-r px-3 hover:text-yellow-400 visited:text-yellow-400",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("NuxtLink",{staticClass:"px-3 pr-0 hover:text-yellow-400 visited:text-yellow-400",attrs:{to:"/signup"}},[t._v("Signup")])],1):t._e(),t._v(" "),null!==t.$strapi.user?e("div",[e("span",{staticClass:"border-r px-3"},[t._v(t._s(t.$strapi.user.username))]),t._v(" "),e("button",{staticClass:"pl-3",on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:l(470).default})}}]);