import{n as p,aS as w,r as a,z as x,j as r,D as v,aF as h,aT as e,aU as k,aV as z,F as L,G as R}from"./index.BNEeLL7s.js";const B=p("button",{target:"e1rpgzpk0"})(({theme:o})=>({fontSize:o.fontSizes.sm,lineHeight:o.lineHeights.base,color:o.colors.fadedText60,backgroundColor:o.colors.transparent,fontFamily:"inherit",margin:o.spacing.none,border:"none",boxShadow:"none",padding:o.spacing.none,"&:hover, &:active, &:focus":{border:"none",outline:"none",boxShadow:"none"},"&:hover":{color:o.colors.primary}})),C=p("div",{target:"e1rpgzpk1"})(({theme:o})=>({display:"flex",flexDirection:"row",gap:o.spacing.lg,"> span":{marginTop:o.spacing.twoXS}})),m=p("div",{target:"e1rpgzpk3"})(({theme:o})=>({display:"flex",flexDirection:"column",gap:o.spacing.sm,alignItems:"start",justifyContent:"center",overflow:"hidden",minHeight:"100%",fontSize:o.fontSizes.sm,lineHeight:o.lineHeights.base,div:{display:"inline-flex"}}));function E(o){const t=R(o);return{Body:{props:{"data-testid":"stToast",className:"stToast"},style:{display:"flex",flexDirection:"row",gap:o.spacing.md,width:o.sizes.toastWidth,marginTop:o.spacing.sm,borderTopLeftRadius:o.radii.default,borderTopRightRadius:o.radii.default,borderBottomLeftRadius:o.radii.default,borderBottomRightRadius:o.radii.default,paddingTop:o.spacing.lg,paddingBottom:o.spacing.lg,paddingLeft:o.spacing.twoXL,paddingRight:o.spacing.twoXL,backgroundColor:t?o.colors.gray10:o.colors.gray90,color:o.colors.bodyText,boxShadow:t?"0px 4px 16px rgba(0, 0, 0, 0.16)":"0px 4px 16px rgba(0, 0, 0, 0.7)"}},CloseIcon:{style:{color:o.colors.fadedText40,width:o.fontSizes.lg,height:o.fontSizes.lg,marginRight:`calc(-1 * ${o.spacing.lg} / 2)`,":hover":{color:o.colors.bodyText}}}}}function D(o){if(o.length>104){let s=o.replace(/^(.{104}[^\s]*).*/,"$1");return s.length>104&&(s=s.substring(0,104).split(" ").slice(0,-1).join(" ")),s.trim()}return o}function H({theme:o,body:t,icon:s,width:y}){const n=D(t),d=t!==n,[i,b]=a.useState(!d),[u,S]=a.useState(0),f=a.useCallback(()=>{b(!i)},[i]),c=a.useMemo(()=>E(o),[o]),l=a.useMemo(()=>x(C,{expanded:i,children:[s&&r(v,{iconValue:s,size:"xl",testid:"stToastDynamicIcon"}),x(m,{children:[r(h,{source:i?t:n,allowHTML:!1,isToast:!0}),d&&r(B,{"data-testid":"stToastViewButton",onClick:f,children:i?"view less":"view more"})]})]}),[d,i,t,s,n,f]);a.useEffect(()=>{if(o.inSidebar)return;const g=e.info(l,{overrides:{...c}});return S(g),()=>{e.update(g,{overrides:{Body:{style:{transitionDuration:0}}}}),e.clear(g)}},[]),a.useEffect(()=>{e.update(u,{children:l,overrides:{...c}})},[u,l,c]);const T=r(z,{kind:k.ERROR,body:"Streamlit API Error: `st.toast` cannot be called directly on the sidebar with `st.sidebar.toast`. See our `st.toast` API [docs](https://docs.streamlit.io/develop/api-reference/status/st.toast) for more information.",width:y});return r(L,{children:o.inSidebar&&T})}const M=w(H);export{M as default};
