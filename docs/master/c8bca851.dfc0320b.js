(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"ExampleChart",(function(){return d})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(9),b=a(0),l=a(202),c={title:"Polar Area Chart"},i={id:"charts/polar",title:"Polar Area Chart",description:"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.",source:"@site/docs/charts/polar.mdx",permalink:"/docs/master/charts/polar",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/charts/polar.mdx",sidebar:"someSidebar",previous:{title:"Doughnut and Pie Charts",permalink:"/docs/master/charts/doughnut"},next:{title:"Bubble Chart",permalink:"/docs/master/charts/bubble"}},o=[{value:"Example Usage",id:"example-usage",children:[]},{value:"Dataset Properties",id:"dataset-properties",children:[{value:"General",id:"general",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Border Alignment",id:"border-alignment",children:[]},{value:"Interactions",id:"interactions",children:[]}]},{value:"Config Options",id:"config-options",children:[]},{value:"Default Options",id:"default-options",children:[]},{value:"Data Structure",id:"data-structure",children:[]}],d=function(){return Object(b.useEffect)((function(){var e=new Chart(document.getElementById("chartjs-0").getContext("2d"),{type:"polarArea",data:{labels:["Red","Green","Yellow","Grey","Blue"],datasets:[{label:"My First Dataset",data:[11,16,7,3,14],backgroundColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(255, 205, 86)","rgb(201, 203, 207)","rgb(54, 162, 235)"]}]}});return function(){return e.destroy()}})),Object(l.b)("div",{className:"chartjs-wrapper"},Object(l.b)("canvas",{id:"chartjs-0",className:"chartjs"}))},p={rightToc:o,ExampleChart:d};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."),Object(l.b)("p",null,"This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context."),Object(l.b)(d,{mdxType:"ExampleChart"}),Object(l.b)("h2",{id:"example-usage"},"Example Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    data: data,\n    type: 'polarArea',\n    options: options\n});\n")),Object(l.b)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(l.b)("p",null,"The following options can be included in a polar area chart dataset to configure options for that specific dataset."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/master/general/options#scriptable-options"}),"Scriptable")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/master/general/options#indexable-options"}),"Indexable")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(l.b)("inlineCode",{parentName:"a"},"backgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#border-alignment"}),Object(l.b)("inlineCode",{parentName:"a"},"borderAlign"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'center'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'#fff'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"2"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"clip"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number","|","object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#data-structure"}),Object(l.b)("inlineCode",{parentName:"a"},"data"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number[]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"required"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interations"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBackgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(l.b)("h3",{id:"general"},"General"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"clip")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. ",Object(l.b)("inlineCode",{parentName:"td"},"0")," = clip at chartArea. Clipping can also be configured per side: ",Object(l.b)("inlineCode",{parentName:"td"},"clip: {left: 5, top: false, right: -2, bottom: 0}"))))),Object(l.b)("h3",{id:"styling"},"Styling"),Object(l.b)("p",null,"The style of each arc can be controlled with the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc background color.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border color.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border width (in pixels).")))),Object(l.b)("p",null,"All these values, if ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/configuration/elements#arc-configuration"}),Object(l.b)("inlineCode",{parentName:"a"},"elements.arc.*"))," options."),Object(l.b)("h3",{id:"border-alignment"},"Border Alignment"),Object(l.b)("p",null,"The following values are supported for ",Object(l.b)("inlineCode",{parentName:"p"},"borderAlign"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'center'")," (default)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'inner'"))),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"'center'")," is set, the borders of arcs next to each other will overlap. When ",Object(l.b)("inlineCode",{parentName:"p"},"'inner'")," is set, it is guaranteed that all the borders do not overlap."),Object(l.b)("h3",{id:"interactions"},"Interactions"),Object(l.b)("p",null,"The interaction with each arc can be controlled with the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"hoverBackgroundColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc background color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"hoverBorderColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"hoverBorderWidth")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border width when hovered (in pixels).")))),Object(l.b)("p",null,"All these values, if ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/configuration/elements#arc-configuration"}),Object(l.b)("inlineCode",{parentName:"a"},"elements.arc.*"))," options."),Object(l.b)("h2",{id:"config-options"},"Config Options"),Object(l.b)("p",null,"These are the customisation options specific to Polar Area charts. These options are merged with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#default-options"}),"global chart default options")," and form the options of the chart."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"startAngle")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting angle to draw arcs for the first item in a dataset. In degrees, 0 is at top.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"animation.animateRotate")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the chart will animate in with a rotation animation. This property is in the ",Object(l.b)("inlineCode",{parentName:"td"},"options.animation")," object.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"animation.animateScale")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, will animate scaling the chart from the center outwards.")))),Object(l.b)("p",null,"The polar area chart uses the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/axes/radial/linear"}),"radialLinear")," scale. Additional configuration is provided via the scale."),Object(l.b)("h2",{id:"default-options"},"Default Options"),Object(l.b)("p",null,"We can also change these default values for each PolarArea type that is created, this object is available at ",Object(l.b)("inlineCode",{parentName:"p"},"Chart.defaults.controllers.polarArea"),". Changing the global options only affects charts created after the change. Existing charts are not changed."),Object(l.b)("p",null,"For example, to configure all new polar area charts with ",Object(l.b)("inlineCode",{parentName:"p"},"animateScale = false")," you would do:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.defaults.controllers.polarArea.animation.animateScale = false;\n")),Object(l.b)("h2",{id:"data-structure"},"Data Structure"),Object(l.b)("p",null,"For a polar area chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each."),Object(l.b)("p",null,"You also need to specify an array of labels so that tooltips appear correctly for each slice."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data = {\n    datasets: [{\n        data: [10, 20, 30]\n    }],\n\n    // These labels appear in the legend and in the tooltips when hovering different arcs\n    labels: [\n        'Red',\n        'Yellow',\n        'Blue'\n    ]\n};\n")))}O.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,m=p["".concat(l,".").concat(j)]||p[j]||O[j]||b;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);