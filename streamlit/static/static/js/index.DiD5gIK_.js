import{n as o,z as m,j as i,aF as S}from"./index.BNEeLL7s.js";import{S as g,T as y}from"./Toolbar.BoTL6vb9.js";import{w as W,u as b,E as M}from"./withFullScreenWrapper.CwHASTF0.js";const L=o("div",{target:"evl31sl0"})(({theme:t})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",rowGap:t.spacing.lg,maxWidth:"100%",width:"fit-content"})),O=o("div",{target:"evl31sl1"})(({theme:t})=>({display:"flex",flexDirection:"column",alignItems:"stretch",width:"auto",flexGrow:0,">img":{borderRadius:t.radii.default}})),E=o("div",{target:"evl31sl2"})(({theme:t})=>({textAlign:"center",marginTop:t.spacing.xs,wordWrap:"break-word",padding:t.spacing.threeXS}));var p;(function(t){t[t.OriginalWidth=-1]="OriginalWidth",t[t.ColumnWidth=-2]="ColumnWidth",t[t.AutoWidth=-3]="AutoWidth",t[t.MinImageOrContainer=-4]="MinImageOrContainer",t[t.MaxImageOrContainer=-5]="MaxImageOrContainer"})(p||(p={}));function F({element:t,width:u,endpoints:f,disableFullscreenMode:x}){const{expanded:n,width:w,height:r,expand:C,collapse:h}=b(M),d=n?w:u;let l;const a=t.width;if([-1,-3,-4].includes(a))l=void 0;else if([-2,-5].includes(a))l=d;else if(a>0)l=a;else throw Error(`Invalid image width: ${a}`);const e={};return r&&n?(e.maxHeight=r,e.objectFit="contain"):(e.width=l,e.maxWidth="100%"),m(g,{width:d,height:r,useContainerWidth:n,topCentered:!0,children:[i(y,{target:g,isFullScreen:n,onExpand:C,onCollapse:h,disableFullscreenMode:x}),i(L,{className:"stImage","data-testid":"stImage",children:t.imgs.map((I,c)=>{const s=I;return m(O,{"data-testid":"stImageContainer",children:[i("img",{style:e,src:f.buildMediaURL(s.url),alt:c.toString()}),s.caption&&i(E,{"data-testid":"stImageCaption",style:e,children:i(S,{source:s.caption,allowHTML:!1,isCaption:!0,isLabel:!0})})]},c)})})]})}const R=W(F);export{R as default};
