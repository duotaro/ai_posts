(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{7783:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/detail/[id]",function(){return r(41)}])},41:function(e,t,r){"use strict";r.r(t),r.d(t,{Text:function(){return _},__N_SSG:function(){return h},default:function(){return p}});var n=r(5893),l=r(7294),i=r(9008),c=r.n(i),s=r(1664),a=r.n(s),d=r(7819),o=r.n(d),h=!0;let _=e=>{let{text:t}=e;return t?t.map(e=>{let{annotations:{bold:t,code:r,color:l,italic:i,strikethrough:c,underline:s},text:a}=e;return(0,n.jsx)("span",{className:[t?o().bold:"",r?o().code:"",i?o().italic:"",c?o().strikethrough:"",s?o().underline:""].join(" "),style:"default"!==l?{color:l}:{},children:a.link?(0,n.jsx)("a",{href:a.link.url,children:a.content}):a.content},a.content)}):null},u=e=>{let{type:t}=e,r=e[t];if(!r)return null;let l="numbered_list_item"===r.children[0].type;return l?(0,n.jsx)("ol",{children:r.children.map(e=>x(e))}):(0,n.jsx)("ul",{children:r.children.map(e=>x(e))})},x=e=>{var t,r,i,c;let{type:s,id:d}=e,h=e[s];switch(s){case"paragraph":return(0,n.jsx)("p",{children:(0,n.jsx)(_,{text:h.rich_text})});case"heading_1":return(0,n.jsx)("h1",{children:(0,n.jsx)(_,{text:h.rich_text})});case"heading_2":return(0,n.jsx)("h2",{children:(0,n.jsx)(_,{text:h.rich_text})});case"heading_3":return(0,n.jsx)("h3",{children:(0,n.jsx)(_,{text:h.rich_text})});case"bulleted_list":return(0,n.jsx)("ul",{children:h.children.map(e=>x(e))});case"numbered_list":return(0,n.jsx)("ol",{children:h.children.map(e=>x(e))});case"bulleted_list_item":case"numbered_list_item":return(0,n.jsxs)("li",{children:[(0,n.jsx)(_,{text:h.rich_text}),!!h.children&&u(e)]},e.id);case"to_do":return(0,n.jsx)("div",{children:(0,n.jsxs)("label",{htmlFor:d,children:[(0,n.jsx)("input",{type:"checkbox",id:d,defaultChecked:h.checked})," ",(0,n.jsx)(_,{text:h.rich_text})]})});case"toggle":return(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(_,{text:h.rich_text})}),null===(t=e.children)||void 0===t?void 0:t.map(e=>(0,n.jsx)(l.Fragment,{children:x(e)},e.id))]});case"child_page":return(0,n.jsxs)("div",{className:o().childPage,children:[(0,n.jsx)("strong",{children:h.title}),e.children.map(e=>x(e))]});case"image":let p="external"===h.type?h.external.url:h.file.url,j=h.caption?null===(r=h.caption[0])||void 0===r?void 0:r.plain_text:"";return(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:p,alt:j}),j&&(0,n.jsx)("figcaption",{children:j})]});case"divider":return(0,n.jsx)("hr",{},d);case"quote":return(0,n.jsx)("blockquote",{children:h.rich_text[0].plain_text},d);case"code":return(0,n.jsx)("pre",{className:o().pre,children:(0,n.jsx)("code",{className:o().code_block,children:h.rich_text[0].plain_text},d)});case"file":let m="external"===h.type?h.external.url:h.file.url,f=m.split("/"),b=f[f.length-1],k=h.caption?null===(i=h.caption[0])||void 0===i?void 0:i.plain_text:"";return(0,n.jsxs)("figure",{children:[(0,n.jsxs)("div",{className:o().file,children:["\uD83D\uDCCE"," ",(0,n.jsx)(a(),{href:m,passHref:!0,children:b.split("?")[0]})]}),k&&(0,n.jsx)("figcaption",{children:k})]});case"bookmark":let g=h.url;return(0,n.jsx)("a",{href:g,target:"_brank",className:o().bookmark,children:g});case"table":return(0,n.jsx)("table",{className:o().table,children:(0,n.jsx)("tbody",{children:null===(c=e.children)||void 0===c?void 0:c.map((e,t)=>{var r,l;let i=h.has_column_header&&0==t?"th":"td";return(0,n.jsx)("tr",{children:null===(r=e.table_row)||void 0===r?void 0:null===(l=r.cells)||void 0===l?void 0:l.map((e,t)=>(0,n.jsx)(i,{children:(0,n.jsx)(_,{text:e})},"".concat(e.plain_text,"-").concat(t)))},e.id)})})});case"column_list":return(0,n.jsx)("div",{className:o().row,children:e.children.map(e=>x(e))});case"column":return(0,n.jsx)("div",{children:e.children.map(e=>x(e))});default:return"❌ Unsupported block (".concat("unsupported"===s?"unsupported by Notion API":s,")")}};function p(e){let{page:t,blocks:r}=e;return t&&r?(0,n.jsxs)("div",{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:t.properties.Name.title[0].plain_text}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("article",{className:o().container,children:[(0,n.jsx)("h1",{className:o().name,children:(0,n.jsx)(_,{text:t.properties.Name.title})}),(0,n.jsxs)("section",{children:[r.map(e=>(0,n.jsx)(l.Fragment,{children:x(e)},e.id)),(0,n.jsx)(a(),{href:"/",className:o().back,children:"← Go home"})]})]})]}):(0,n.jsx)("div",{})}},7819:function(e){e.exports={container:"post_container__JdvFA",name:"post_name__qaYDQ",back:"post_back__MKHSj",bold:"post_bold__h6Yj2",code:"post_code__xuFlw",italic:"post_italic__yqyVO",pre:"post_pre__F2k41",code_block:"post_code_block___nDf3",file:"post_file__M6q2A",strikethrough:"post_strikethrough__n4gN_",underline:"post_underline__eeElt",bookmark:"post_bookmark__J01_K",table:"post_table__S7gXa",row:"post_row__5mwkm",childPage:"post_childPage__q8Z0j"}}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=7783)}),_N_E=e.O()}]);