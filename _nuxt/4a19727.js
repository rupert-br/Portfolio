(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6,8],{255:function(t,e,r){"use strict";r.r(e);var n=r(254),o={data:function(){return{isOpen:!1}},mounted:function(){this.init()},methods:{init:function(){n.a.from("#logo",{opacity:0,duration:.6,delay:.4}),n.a.from("#projekte",{opacity:0,duration:.6,delay:.5}),n.a.from("#blog",{opacity:0,duration:.6,delay:.6}),n.a.from("#contact-me",{opacity:0,duration:.6,delay:.7}),n.a.from("#mobile-burger",{opacity:0,duration:.6,delay:.8})},toggleNavbar:function(){this.isOpen=!this.isOpen}}},l=r(45),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"px-4 sm:px-4 py-8"},[r("div",{staticClass:"container flex flex-wrap justify-between items-center mx-auto font-spacegrotesk"},[r("a",{staticClass:"flex text-3xl md:text-5xl font-extrabold p-4 rounded-lg text-neutral-800 dark:text-rose-500 hover:text-rose-500 dark:hover:text-rose-600 transition",attrs:{id:"logo",href:"/"}},[t._v("\n      RB\n    ")]),t._v(" "),r("div",{staticClass:"flex md:order-2"},[r("a",{staticClass:"text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 px-3 py-2 md:hover:py-3 transition-all text-center mr-3 dark:bg-rose-500 dark:hover:bg-rose-700 dark:focus:ring-rose-800",attrs:{id:"contact-me",href:"mailto:rupert.brandstaetter@gmail.com"}},[t._v("\n        Kontaktiere mich!\n      ")]),t._v(" "),r("button",{staticClass:"inline-flex items-center p-2 text-sm text-gray-500 bg-transparent rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",attrs:{id:"mobile-burger","data-collapse-toggle":"mobile-menu",type:"button","aria-controls":"mobile-menu","aria-expanded":"false"},on:{click:t.toggleNavbar}},[r("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:!t.isOpen,expression:"!isOpen"}],staticClass:"w-6 h-6 transition",attrs:{id:"hamburger-icon",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-6 h-6 transition",attrs:{id:"close-icon",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),r("div",{staticClass:"justify-between items-center w-full md:flex md:w-auto md:order-1",class:{hidden:!t.isOpen},attrs:{id:"mobile-menu"}},[r("ul",{staticClass:"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"},[r("li",[r("NuxtLink",{staticClass:"block text-lg py-2 pr-4 pl-3 text-zinc-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-rose-600 md:p-0 md:dark:hover:text-rose-400 dark:text-zinc-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition",attrs:{id:"projekte",to:"/project",href:"#"}},[t._v("\n            Projekte\n          ")])],1),t._v(" "),r("li",[r("NuxtLink",{staticClass:"block text-lg py-2 pr-4 pl-3 text-zinc-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-rose-600 md:p-0 md:dark:hover:text-rose-400 dark:text-zinc-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all",attrs:{id:"blog",to:"/blog",href:"#"}},[t._v("\n            Blog\n          ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,r){"use strict";r.r(e);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"bg-neutral-800 text-white py-8 pl-8 dark:bg-rose-500"},[r("div",[t._v("\n    © Rupert Brandstätter 2022\n  ")])])}],!1,null,null,null);e.default=component.exports},258:function(t,e,r){"use strict";r.r(e);var n=r(254),o={mounted:function(){this.init()},methods:{init:function(){n.a.from("#blog-container",{opacity:0,y:200,duration:1,delay:1.5})}}},l=r(45),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"px-2 md:px-40 h-screen mt-24 text-4xl font-spacegrotesk dark:text-white",attrs:{id:"blog-container"}},[t._v("\n  Erster Blog-Eintrag folgt in Kürze ...\n")])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,r){"use strict";r.r(e);var n={name:"BlogSite"},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-neutral-50 dark:bg-neutral-800"},[r("NavBar"),t._v(" "),r("BlogPage"),t._v(" "),r("MainFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:r(255).default,BlogPage:r(258).default,MainFooter:r(256).default})}}]);