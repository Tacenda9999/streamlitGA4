import{n as c,b7 as v,az as y,b8 as l,b9 as t,j as s,ba as C,bb as S}from"./index.BNEeLL7s.js";function k(o,i){switch(o){case l.XSMALL:return{padding:`${i.spacing.twoXS} ${i.spacing.sm}`,fontSize:i.fontSizes.sm};case l.SMALL:return{padding:`${i.spacing.twoXS} ${i.spacing.md}`};case l.LARGE:return{padding:`${i.spacing.md} ${i.spacing.md}`};default:return{padding:`${i.spacing.xs} ${i.spacing.md}`}}}const g=c("a",{target:"efj1jhq0"})(({fluidWidth:o,size:i,theme:r})=>{const a=typeof o=="number"?`${o}px`:"100%";return{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:r.fontWeights.normal,padding:`${r.spacing.xs} ${r.spacing.md}`,borderRadius:r.radii.default,minHeight:r.sizes.minElementHeight,margin:0,lineHeight:r.lineHeights.base,color:r.colors.primary,textDecoration:"none",width:o?a:"auto",userSelect:"none","&:visited":{color:r.colors.primary},"&:focus":{outline:"none"},"&:focus-visible":{boxShadow:`0 0 0 0.2rem ${y(r.colors.primary,.5)}`},"&:hover":{textDecoration:"none"},"&:active":{textDecoration:"none"},...k(i,r)}}),B=c(g,{target:"efj1jhq1"})(({theme:o})=>({backgroundColor:o.colors.primary,color:o.colors.white,border:`${o.sizes.borderWidth} solid ${o.colors.primary}`,"&:hover":{backgroundColor:v(o.colors.primary,.05),color:o.colors.white},"&:active":{backgroundColor:"transparent",color:o.colors.primary},"&:visited:not(:active)":{color:o.colors.white},"&[disabled], &[disabled]:hover, &[disabled]:active, &[disabled]:visited":{borderColor:o.colors.borderColor,backgroundColor:o.colors.transparent,color:o.colors.fadedText40,cursor:"not-allowed"}})),x=c(g,{target:"efj1jhq2"})(({theme:o})=>({backgroundColor:o.colors.lightenedBg05,color:o.colors.bodyText,border:`${o.sizes.borderWidth} solid ${o.colors.borderColor}`,"&:visited":{color:o.colors.bodyText},"&:hover":{borderColor:o.colors.primary,color:o.colors.primary},"&:active":{color:o.colors.white,borderColor:o.colors.primary,backgroundColor:o.colors.primary},"&:focus:not(:active)":{borderColor:o.colors.primary,color:o.colors.primary},"&[disabled], &[disabled]:hover, &[disabled]:active":{borderColor:o.colors.borderColor,backgroundColor:o.colors.transparent,color:o.colors.fadedText40,cursor:"not-allowed"}})),$=c(g,{target:"efj1jhq3"})(({theme:o})=>({padding:o.spacing.none,backgroundColor:o.colors.transparent,color:o.colors.bodyText,border:"none","&:visited":{color:o.colors.bodyText},"&:hover":{color:o.colors.primary},"&:active":{color:o.colors.primary},"&:focus":{outline:"none"},"&:focus-visible":{color:o.colors.primary,boxShadow:`0 0 0 0.2rem ${y(o.colors.primary,.5)}`},"&[disabled], &[disabled]:hover, &[disabled]:active":{backgroundColor:o.colors.transparent,color:o.colors.fadedText40,cursor:"not-allowed"}}));function L({kind:o,size:i,disabled:r,fluidWidth:a,children:d,autoFocus:n,href:e,rel:b,target:u,onClick:f}){let p=B;return o===t.SECONDARY?p=x:o===t.TERTIARY&&(p=$),s(p,{kind:o,size:i||l.MEDIUM,fluidWidth:a||!1,disabled:r||!1,autoFocus:n||!1,href:e,target:u,rel:b,onClick:f,tabIndex:r?-1:0,"data-testid":`stBaseLinkButton-${o}`,children:d})}function T(o){const{disabled:i,element:r,width:a}=o,d={width:a};let n=t.SECONDARY;r.type==="primary"?n=t.PRIMARY:r.type==="tertiary"&&(n=t.TERTIARY);const e=r.help?a:!0,b=u=>{o.disabled&&u.preventDefault()};return s("div",{className:"stLinkButton","data-testid":"stLinkButton",style:d,children:s(C,{help:r.help,children:s(L,{kind:n,size:l.SMALL,disabled:i,onClick:b,fluidWidth:r.useContainerWidth?e:!1,href:r.url,target:"_blank",rel:"noreferrer","aria-disabled":i,children:s(S,{icon:r.icon,label:r.label})})})})}export{T as default};
