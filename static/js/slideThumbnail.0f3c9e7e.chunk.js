"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[66],{86597:(e,t,n)=>{n.r(t),n.d(t,{SlideThumbnail:()=>Ke,default:()=>Ue});var r=n(17588),o=n(14726),a=n(76336),i=n(54816);let s={getInteractivityActionsSnapshot:()=>{throw new Error("interactivity actions snapshot cannot be resolved with the default document model env")},resolveTaskRef:e=>{const t=(0,i.KW)(e);if(!t)return e;throw new Error("task ref '".concat(t,"' cannot be resolved with the default document model env"))}};function l(){return s}var c=n(43488),d=n(89545),u=n(19769);const m={position:"absolute",left:0,right:0,top:0,bottom:0,contain:"strict"},f=(0,o.PA)((e=>{var t,n,o,a;let{backgroundImage:i,backgroundImageOpacity:s,backgroundImageSize:l,backgroundImagePosition:c,backgroundColor:d,onClick:u}=e;const f=u;return r.createElement(r.Fragment,null,r.createElement("div",{onClick:f,style:{...m,backgroundColor:d},role:"button",tabIndex:f?0:void 0,"aria-label":f?"slide background":void 0}),i&&r.createElement("div",{style:{...m,opacity:s,backgroundRepeat:"no-repeat",backgroundPositionX:null!==(t=null===c||void 0===c?void 0:c.PositionLeft)&&void 0!==t?t:0,backgroundPositionY:null!==(n=null===c||void 0===c?void 0:c.PositionTop)&&void 0!==n?n:0,backgroundSize:"".concat(null!==(o=null===l||void 0===l?void 0:l.Width)&&void 0!==o?o:0," ").concat(null!==(a=null===l||void 0===l?void 0:l.Height)&&void 0!==a?a:0),backgroundImage:"url('".concat(encodeURI(i),"')"),pointerEvents:"none"}}))})),p=(0,r.createContext)(void 0);function g(){const e=(0,r.useContext)(p);if(!e)throw new Error("FakeItems context missing");return e}const v="CHART_DATA_TABLE",h=e=>{if("data"in e&&e.data){const{renderZIndex:t}=e;if(void 0!==t&&null!==t)return Number(t);const{ZIndex:n}=e.data;if(void 0!==n&&null!==n)return Number(n)}if("ZIndex"in e){const{ZIndex:t}=e;if(void 0!==t&&null!==t)return Number(t)}};function I(e){return"serializedData"in e?e.serializedData:"data"in e?"serializedData"in e.data?e.data.serializedData:e.data:e}var w=n(33964),y=n(38850);function b(e){let{item:t,parentContainerBoxItem:n,positioned:r}=e;const o=I(t),a=n?I(n):void 0,i=(0,y.M)({item:o,parentContainerBoxItem:a,positioned:r});return i.zIndex=h(t),i}var C=n(37577);const x=C.Ay.div((e=>{let{theme:{color:t}}=e;return{position:"absolute",margin:0,backgroundColor:t.background.accent.default(.15),"& img":{border:"1px solid ".concat(t.border.accent.default()),width:"100%",height:"100%",userSelect:"none"}}})),k=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i);return r.createElement(x,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{width:"100%",height:"100%",contain:"strict",...b({item:n,parentContainerBoxItem:a})},...l})})));var S=n(97690),A=n(67702),B=n(50844),E=n(75743);var P=n(3784),T=n(8889),z=n(40039),D=n(79410);const R=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:s,rotate:l,events:c}=e;const{delta:d,slide:u,documentConfig:m}=g(),f=(0,w.l)(c,o,a,i,s),p=I(o),{color:v,curveTos:b,dash:C,headType:x,lineCap:k,Opacity:R,source:F,tailType:L,target:M,thickness:W}=p,{sourceRect:G,targetRect:_}=(0,z.w)(F,M,"logical")(u.items),N=null!==(n=p.dataPositionAndSizeWithoutCurveTos)&&void 0!==n?n:(0,P._)(F,M,"logical")(u.items),Q=(0,T.Bw)(b,N),H=e=>e?(0,y.i)(I(e)):void 0,q=function(e){var t,n;let{parentSlideSize:r,parentContainerBoxLayout:o,parentGroupLayout:a}=e;const i={x:0,y:0,width:null===(t=null!==a&&void 0!==a?a:r)||void 0===t?void 0:t.width,height:null===(n=null!==a&&void 0!==a?a:r)||void 0===n?void 0:n.height,rotate:0};return o?(0,E.c)({layout:i,parentLayout:o}):i}({parentGroupLayout:H(a),parentContainerBoxLayout:H(i),parentSlideSize:u.size}),V={...q,rotate:0},{sourceItemSide:O,targetItemSide:j}=(0,D.Q)({source:F,sourceRect:G,target:M,targetRect:_});return r.createElement(B.i,{"data-cy":"fakeItem-".concat(o.type,"-").concat(o.Id),color:v,curveTos:Q,dash:C,delta:d,documentConfigColors:null===m||void 0===m?void 0:m.colors,eventHandlers:f,headType:x,itemStyle:{display:p.IsHidden?"none":void 0,zIndex:h(o),...(0,A.k)(V)},lineCap:k,opacity:R,ref:t,rotate:l,sourceItemSide:O,sourceRect:G,tailType:L,targetItemSide:j,targetRect:_,thickness:W,viewBox:q,arrowBetweenItemSidesProps:{style:{transformOrigin:"center center",transform:(0,S.Y)(q.rotate)},selectable:!!t}})}))),F=C.Ay.div((e=>{let{theme:{color:t}}=e;return{position:"absolute",margin:0,"& img":{border:"1px solid ".concat(t.border.accent.default()),width:"100%",height:"100%",userSelect:"none"}}})),L=C.Ay.div.attrs((e=>{let{$thumbnail:t}=e;return{style:{background:"center / cover url(".concat(t,") no-repeat")}}}))((e=>{let{theme:{size:t}}=e;return{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:t.units(2)}})),M=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i),c=I(n),{thumbnail:d}=c;return r.createElement(F,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{width:"100%",height:"100%",contain:"strict",...b({item:n,parentContainerBoxItem:a})},...l},d?r.createElement(L,{$thumbnail:d}):r.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fabada"}}))})));var W=n(8144);const G=r.lazy((()=>Promise.all([n.e(342),n.e(176)]).then(n.bind(n,3144)))),_=e=>r.createElement(r.Suspense,{fallback:null},r.createElement(G,{...e})),N=r.lazy((()=>n.e(227).then(n.bind(n,7546)))),Q=e=>r.createElement(r.Suspense,{fallback:null},r.createElement(N,{...e})),H=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{documentConfig:l}=g(),c=(0,w.l)(s,n,o,a,i),{Data:d,Id:u,Options:m,Size:f,Type:p,RawData:h,tableRawData:I,Version:y}="data"in n?n.data:n,C=p,x=C===v,k=y>=1,S=y>=2?W.j.LabelsFontSize:void 0,A=y<2,B=y>=3?m.TextColor:void 0,E={pointerEvents:"none"};return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...b({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===c.onClick?0:void 0,...c},x?r.createElement(Q,{cellStyles:m.CellStyles,data:I||h,id:u,tableStyles:m.TableStyles,normalWordBreak:k,style:E}):r.createElement(_,{colors:[...m.Colors],data:d,enableAnimation:!1,height:f.Height,id:u,invertYAxis:m.InvertYAxis,prefix:m.Prefix,showAxisLabels:m.AxisLabels,showLegend:m.Legend,showTooltip:m.Tooltip,suffix:m.Suffix,textColor:m.TextColor,type:C,width:f.Width,documentConfig:l,lineVariant:m.LineVariant,showLineMarkers:m.ShowMarkers,labelsFontSize:S,showTitles:A,colorAllTexts:B,style:E}))})));var q=n(47019),V=n(55634);const O=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,events:a}=e;const{slide:i}=g(),s=null!==(n=i.containerBoxStateMap.get(o.Id))&&void 0!==n?n:{containedItems:[],side:void 0},l={...I(o),ZIndex:String(h(o)),type:o.type},c=function(e,t){const n=(0,r.useMemo)((()=>{const n={};return V.K.forEach((r=>{const o=null===e||void 0===e?void 0:e[r];n[r]=o?function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];o(t,...r)}:void 0})),n}),[e,t]);return n}(a,o);return r.createElement(q.x,{ref:t,itemData:l,positioned:!0,sized:!0,rotated:!0,side:s.side,events:c},s.containedItems.map((e=>I(e).containerBoxSide!==s.side?null:r.createElement(Ze,{key:e.Id,itemType:e.type,item:e,parentGroupItem:void 0,directParentContainerBoxItem:o,indirectParentContainerBoxItem:o,events:a}))))}))),j=C.Ay.div((e=>{let{theme:{size:t}}=e;return{"&.blocked:hover":{"&::before":{content:"",top:t.units(-1/8),left:t.units(-1/8),width:"calc(100% + ".concat(t.units(1/4),")"),height:"calc(100% + ".concat(t.units(1/4),")"),border:"$dashed-border-selected",position:"absolute"}}}})),Z=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i);return r.createElement(j,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"layout style",...b({item:n,parentContainerBoxItem:a})},...l},n.groupedItems.map((e=>r.createElement(Ze,{key:e.Id,itemType:e.type,item:e,parentGroupItem:n,directParentContainerBoxItem:void 0,indirectParentContainerBoxItem:i,events:s}))))}))),$="v=cross_origin",Y=new Date,K="v=".concat(Y.getDay().toString()+Y.getMonth().toString()+Y.getFullYear().toString()),U=(e,t)=>{if(!e||!t)throw new Error("This function needs two params");try{let n=e;if(n.includes(t)){const r=e.split(t)[0];n=r.substring(0,r.length-1)}return n}catch(n){return e}};var X=n(52428),J=n(42059);var ee=n(18537),te=n(22848);const ne=e=>{let{className:t,color:n,height:o,size:a,style:i,width:s,...l}=e;return r.createElement(te.A,{className:t,color:n,height:o,size:a,style:i,viewBox:"0 0 16 16",width:s,...l},r.createElement("g",null,r.createElement("path",{d:"M14,13H2V11L3.59,9.41a2,2,0,0,1,2.82,0L7,10,9.59,7.41a2,2,0,0,1,2.82,0L14,9ZM5.5,4A1.5,1.5,0,1,1,4,5.5,1.5,1.5,0,0,1,5.5,4ZM14,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2Z"})))},re=C.Ay.div((e=>{let{theme:{color:t,size:n,shadow:r}}=e;return{background:t.background.reversed.default(.4),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.content.reversed.default(),borderRadius:n.units(.33),padding:n.units(.5),boxShadow:r.short}})),oe=(0,C.Ay)(ne)((()=>({width:"50%",height:"50%"}))),ae=C.Ay.p((e=>{let{theme:{size:t},$showTitle:n}=e;return{display:n?"block":"none",fontSize:t.units(3)}})),ie=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:s,events:c}=e;const d=(0,w.l)(c,o,a,i,s),u=I(o),{resolveTaskRef:m}=l(),f=function(e){if(!e)return e;if(!e.startsWith("http://")&&!e.startsWith("https://"))return e;let t=e;return e.includes($)&&(t=U(t,K)),e.includes(K)&&(t=U(t,$)),t}(m(u.Source)),p=null!==(n=m(u.Offset))&&void 0!==n?n:X.g,[g,v]=(0,r.useState)(null),[h,y]=(0,r.useState)(!1),[C,x]=(0,r.useState)(null),k=(0,r.useRef)(!1),S=(0,r.useRef)(/\.(gif)|data:image\/gif/.test(f)),A=(0,r.useCallback)((()=>{try{!function(e,t,n){const r=new Image;let o=n;n||(o={mimeType:"image/png"}),r.onload=()=>{try{var e;const n=document.createElement("canvas");n.width=r.width,n.height=r.height;const a=n.getContext("2d");a&&a.drawImage(r,0,0);const i=n.toDataURL(null===(e=o)||void 0===e?void 0:e.mimeType);t(null,i)}catch(n){t(!0,null)}},r.onerror=()=>{t(!0,null)},r.setAttribute("crossOrigin","anonymous"),r.src=(0,J.g)(e,{v:"anonymous"})}(f,((e,t)=>{k.current&&(e?y(!0):(v(t),x(f)))}))}catch(e){console.warn(e),y(!0)}}),[f]);if((0,r.useEffect)((()=>(k.current=!0,()=>{k.current=!1})),[]),(0,r.useEffect)((()=>{S.current&&A()}),[A]),(0,r.useEffect)((()=>{S.current?!S.current||g&&C===f||A():(v(null),y(!1),x(null))}),[f,g,C,A]),S.current&&!g&&!h)return null;const B=parseFloat(u.Size.Height)<200;return r.createElement("div",{"data-cy":"fakeItem-".concat(o.type,"-").concat(u.Id),ref:t,style:{contain:"strict",overflow:"hidden",willChange:"transform",...b({item:o,parentContainerBoxItem:i})},className:u.Frame,role:"button",tabIndex:void 0===d.onClick?0:void 0,...d},h?r.createElement(re,null,r.createElement(oe,null),r.createElement(ae,{$showTitle:!B},"GIF")):r.createElement("div",{style:{position:"absolute",top:"".concat(p.top,"%"),left:"".concat(p.left,"%"),right:"".concat(p.right,"%"),bottom:"".concat(p.bottom,"%")}},r.createElement("img",{style:{position:"relative",width:"100%",height:"100%",display:"block",maxWidth:"100%",transform:(0,ee.P)(u.Transformations),objectFit:u.objectFit},src:g||f,alt:u.Name})))})));var se=n(29523),le=n(80182),ce=n(96384);const de=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:l,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:f=!1,timerMessage:p}=e;const{Question:g,Answers:v,Appearance:h,Id:I}=t,w=v.filter((e=>{let{Image:t}=e;return t.length>0}));return r.createElement(ce.D,{type:se.r.Image,itemId:I,question:g||c("__new.editor.activityConfiguration.questionPlaceholder"),disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:h,answers:w,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:f,timerMessage:p,dataCy:"imageInteractiveQuestionItem"})};de.Container=ce.D.Container,de.Question=ce.D.Question,de.Subtitle=ce.D.Subtitle,de.Answers=ce.D.Answers,de.Answer=ce.D.Answer,de.Feedback=ce.D.Feedback,de.Button=ce.D.Button;const ue=(0,o.PA)(de);var me=n(42118);const fe=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:l,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:f=!1,timerMessage:p}=e;const{Question:g,Answers:v,Appearance:h,Id:I}=t,w=v.filter((e=>{let{Text:t}=e;return t.length>0})),y=c("__new.editor.content.questionMultiple");return r.createElement(ce.D,{type:se.r.Quiz,itemId:I,question:g||y,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:h,answers:w,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:f,timerMessage:p,dataCy:"quizInteractiveQuestionItem"})};fe.Container=ce.D.Container,fe.Question=ce.D.Question,fe.Subtitle=ce.D.Subtitle,fe.Answers=ce.D.Answers,fe.Answer=ce.D.Answer,fe.Feedback=ce.D.Feedback,fe.Button=ce.D.Button;const pe=(0,o.PA)(fe);var ge=n(85491);const ve=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:l,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:f=!1,showResultPreview:p=!1,timerMessage:g}=e;const{Question:v,Answers:h,Appearance:I,Id:w}=t,y=h.filter((e=>{let{Text:t}=e;return t.length>0})),b=c("__new.editor.content.questionMultiple");return r.createElement(ce.D,{type:se.r.Survey,itemId:w,question:v||b,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:I,answers:y,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:f,showResultPreview:p,showResultEnabled:t.Options.ShowResults,timerMessage:g,dataCy:"surveyInteractiveQuestionItem"})};ve.Container=ce.D.Container,ve.Question=ce.D.Question,ve.Subtitle=ce.D.Subtitle,ve.Answers=ce.D.Answers,ve.Answer=ce.D.Answer,ve.Feedback=ce.D.Feedback,ve.Button=ce.D.Button;const he=(0,o.PA)(ve),Ie=e=>{let{item:t,disabled:n,feedbackText:o,showAnswersIcon:a,feedbackColor:i,documentColors:s,t:l,hasDefaultAnimation:c=!1,answerSelectedPreview:d=!1,selectedAnswerIds:u,showCorrectAnswers:m=!1,timerMessage:f}=e;const{Question:p,Answers:g,Appearance:v,Id:h}=t;return r.createElement(ce.D,{type:se.r.TrueFalse,itemId:h,question:p||l("__new.editor.content.placeholderQuestionTrueFalse"),disabled:n,showAnswersIcon:a,hasDefaultAnimation:c,documentColors:s,feedbackText:o,feedbackColor:i,appearance:v,answers:g,answerSelectedPreview:d,selectedAnswerIds:u,showCorrectAnswers:m,timerMessage:f,dataCy:"trueFalseInteractiveQuestionItem"})};Ie.Container=ce.D.Container,Ie.Question=ce.D.Question,Ie.Answers=ce.D.Answers,Ie.Answer=ce.D.Answer,Ie.Feedback=ce.D.Feedback,Ie.Button=ce.D.Button;const we=(0,o.PA)(Ie),ye=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,selectedAnswerIds:s,showCorrectAnswers:l=!1,events:c}=e;const{t:d,documentConfig:u}=g(),m=(0,w.l)(c,n,o,a,i),f=I(n),{Frame:p,Type:v}=f;return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",overflow:"hidden",...b({item:n,parentContainerBoxItem:a})},className:p,role:"button",tabIndex:void 0===m.onClick?0:void 0,...m},(()=>{switch(v){case se.r.Quiz:return r.createElement(pe,{key:n.Id,item:f,t:d,selectedAnswerIds:s,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case se.r.OpenAnswer:return r.createElement(me.R,{key:n.Id,item:f,t:d,userAnswer:null!==s&&void 0!==s&&s.length?s[0]:void 0,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case se.r.TrueFalse:return r.createElement(we,{key:n.Id,item:f,t:d,selectedAnswerIds:s,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case se.r.Image:return r.createElement(ue,{key:n.Id,item:f,t:d,selectedAnswerIds:s,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case se.r.Sort:return r.createElement(ge.N,{key:n.Id,item:f,t:d,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case se.r.Survey:return r.createElement(he,{key:n.Id,item:f,t:d,selectedAnswerIds:s});case se.r.FillInTheBlanks:return r.createElement(le.V,{documentColors:null===u||void 0===u?void 0:u.colors,key:n.Id,item:f,showQuestion:!0,isTabletOrMobile:!1,userWordIds:[],setUserWordIds:()=>{}});default:throw new Error("InteractiveQuestion type ".concat(v," does not have any component associated"))}})())}))),be=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i),c=I(n);return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...b({item:n,parentContainerBoxItem:a}),zIndex:99999,maxWidth:"100%",width:"100%",height:"100%"},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},r.createElement("img",{style:{width:32,height:32},src:c.Source,alt:c.Name}))})));var Ce=n(60766);const xe=C.Ay.div((e=>{let{theme:{color:t,size:n}}=e;return{background:t.background.reversed.default(.4),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.content.reversed.default(),borderRadius:n.units(2/3),padding:n.units(1),paddingLeft:void 0,boxShadow:"0 1px ".concat(n.units(1)," 0 ").concat(t.shadow.primary.default(.2)),"& svg":{width:n.units(5.5)}}})),ke=C.Ay.div.attrs((e=>{let{$thumbnail:t}=e;return{style:{background:"center / cover url(".concat(t,") no-repeat")}}}))((()=>({width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}))),Se=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i),c=I(n),{thumbnail:d}=c,u=parseInt(c.Size.Height,10)<50?"80%":"100%";return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...b({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},d?r.createElement(ke,{$thumbnail:d}):r.createElement(xe,null,r.createElement(Ce.A,{height:u})))}))),Ae=C.Ay.div({position:"absolute",display:"inherit",fontSize:"99%","& svg":{display:"inherit",fontSize:"99%",pointerEvents:"none",animation:"none",filter:"none"},"& svg > *":{animation:"none",filter:"none"},"& svg text":{userSelect:"none",cursor:"default",fontSize:"99%"}}),Be=/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent),Ee=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:s,events:c}=e;const d=(0,w.l)(c,o,a,i,s),u=(0,r.useRef)(null),m=I(o),{resolveTaskRef:f}=l(),p=null===(n=m.Colors)||void 0===n?void 0:n[0],g=f(m.SourceSvg);(0,r.useLayoutEffect)((()=>{const e=u.current;e&&(e.querySelectorAll(".color1").forEach((e=>{e.style.fill=p})),Be&&e.querySelectorAll("linearGradient").forEach((e=>{const t=e.id;e.setAttribute("id","rerender"),e.setAttribute("id",t)})))}),[g,p]);const v=(0,r.useCallback)((e=>{u.current=e,t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e))}),[t]);return r.createElement(Ae,{"data-cy":"fakeItem-".concat(o.type,"-").concat(o.Id),className:"svg-item svg-item-fake",dangerouslySetInnerHTML:{__html:g},ref:v,style:{contain:"size layout style",...b({item:o,parentContainerBoxItem:i})},...d})})));var Pe=Array.isArray;function Te(e){var t,n,r=typeof e,o="";if("string"===r||"number"===r)return e||"";if(Pe(e)&&e.length>0)for(t=0,n=e.length;t<n;t++)""!==(r=Te(e[t]))&&(o+=(o&&" ")+r);else for(t in e)e.hasOwnProperty(t)&&e[t]&&(o+=(o&&" ")+t);return o}var ze=n(8944),De=n(65210),Re=n(27943);const Fe=C.Ay.div({"-webkit-line-break":"after-white-space","-webkit-nbsp-mode":"normal",lineBreak:"normal",display:"block",outline:"none","&.text-bold":{fontWeight:"bold"},"&.text-italic":{fontStyle:"italic"},"&.text-align-left":{textAlign:"left"},"&.text-align-right":{textAlign:"right"},"&.text-align-justify":{textAlign:"justify"},"&.text-align-center":{textAlign:"center"},"&.uppercase":{textTransform:"uppercase"},"& sub":{verticalAlign:"sub",fontSize:"60%"},"& sup":{verticalAlign:"super",fontSize:"60%"},"&.genially-view-text-indent-list-v4":{"ul, ol":{paddingLeft:"1.8em",listStylePosition:"outside"}},"& *":{pointerEvents:"none"},"& ul":{listStyleType:"disc",ul:{listStyleType:"circle",ul:{listStyleType:"square"}}},"& ol":{listStyleType:"decimal",ol:{listStyleType:"lower-latin",ol:{listStyleType:"lower-roman"}}}},(e=>{let{theme:{color:t,size:n}}=e;return{"&.text-effect-shadow":{textShadow:"2px 2px 6px ".concat(t.shadow.primary.default(.5))},"&.interparagraph_medium":{...Re.iF.mixins.setInterparagraph(n.units(1))},"&.interparagraph_big":{...Re.iF.mixins.setInterparagraph(n.units(2.25))},"& p":{margin:"0 0 ".concat(n.units(1.25))},"& ul, & ol":{lineBreak:"normal",display:"block",marginTop:0,marginBottom:0,paddingLeft:n.units(3.125),listStylePosition:"inside"},"&.genially-view-text-indent-list-v3":{"ul, ol":{paddingLeft:n.units(6.25),listStylePosition:"outside"}},"&.genially-view-text-indent-paragraph-v5 blockquote":{margin:"0 0 0 ".concat(n.units(5)),border:"none",padding:0}}})),Le=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{canBeTranslated:l}=g(),c=(0,w.l)(s,n,o,a,i),d=I(n),u=(0,De.I)(d),m=d.Version>=6;return r.createElement(Fe,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,className:Te([u,{notranslate:!l}]),style:{contain:"size layout style",...b({item:n,parentContainerBoxItem:a}),backgroundColor:d.Background,color:d.Color,fontSize:d.FontSize,fontFamily:(0,ze.f)(d.FontFamily,m),padding:d.Padding,lineHeight:d.LineHeight,letterSpacing:"".concat(d.LetterSpacing,"px"),wordWrap:d.Version<2?"initial":"break-word"},dangerouslySetInnerHTML:{__html:d.TextMessage},...c})})));var Me=n(63507),We=n(55404);const Ge=(0,C.Ay)(Re.Lf)((e=>{let{theme:{color:t}}=e;return{color:t.content.secondary.default()}})),_e=(0,C.SL)((e=>{let{theme:{color:t},width:n,name:o}=e;const a=(0,Me.v4)(),[i,s]=(0,r.useState)(null),[l,c]=(0,r.useState)(null),d=(0,r.useCallback)((()=>{const e=[];for(let t=0;t<41;t+=1)e.push(128);if(i&&l){l.clearRect(0,0,i.width,i.height),l.fillStyle=t.content.secondary.default();for(let t=0;t<41;t+=1){var n;const r=8*t,o=4,a=-((null!==(n=e[t])&&void 0!==n?n:0)/2||5);l.fillRect(r,i.height,o,a)}}}),[i,l,t.content.secondary]);return(0,r.useEffect)((()=>{const e=document.querySelector("#canva-element-fake".concat(a));e&&(s(e),c(e.getContext("2d")),d())}),[a,d]),r.createElement("div",{className:"widget-audio-player"},r.createElement("div",{className:"widget-audio-player-play-container"},r.createElement(We.A,null)),r.createElement("div",{className:"widget-audio-player-info-container"},r.createElement("div",{className:"widget-audio-player-bars-group",id:"widget-audio-player-bars-group"},r.createElement("canvas",{id:"canva-element-fake".concat(a),style:{width:"100%",height:"42%"}})),r.createElement("div",{className:"widget-audio-player-file-progress-bar"}),r.createElement("div",{className:"widget-audio-player-file-name-container"},r.createElement(Ge,{className:"widget-audio-player-file-name",style:{fontSize:parseFloat(n)/22}},o))))})),Ne=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{t:l}=g(),c=(0,w.l)(s,n,o,a,i),d=I(n),{Name:u,Size:m}=d;return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...b({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===c.onClick?0:void 0,...c},r.createElement(_e,{name:u||l("__new.shared.items.type.widget-audio"),width:m.Width}))})));var Qe=n(26564),He=n(70445),qe=n(47836);const Ve=C.Ay.div((()=>({}))),Oe=C.Ay.div((e=>{let{theme:{color:t}}=e;return{background:t.background.reversed.default(.8),color:t.content.reversed.default(),"& svg":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),je=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const[l,c]=(0,r.useState)(!1),d=I(n),{Thumbnail:u,Name:m,Size:f}=d,p=d.UploadedFrom===Qe.xG.File,{isVideoVisualizationForbidden:v,isOffline:h}=g(),y=(0,r.useCallback)((()=>{c(!0)}),[]),C={...(0,w.l)(s,n,o,a,i),onError:y},x={"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...b({item:n,parentContainerBoxItem:a})},...C};return p&&(l||v)?r.createElement(Ve,{style:x.style},r.createElement(He.S,{isVisualizationForbidden:v,width:parseFloat(f.Width)})):u?r.createElement(qe.u,{alt:null!==m&&void 0!==m?m:"",dataCy:x["data-cy"],itemEvents:C,ref:x.ref,src:u,style:x.style,isOffline:h}):r.createElement(Oe,{...x},r.createElement(ne,{height:"50%",width:"50%"}))}))),Ze=(0,o.PA)((e=>{let{itemType:t,item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=g(),c=(0,r.useRef)(null);function d(e){return{item:e.item,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,ref:l.renderItem?c:void 0,events:s}}function m(e){switch(t){case u.S.Activity:return r.createElement(ye,{...d(e)});case u.S.Area:return r.createElement(k,{...d(e)});case u.S.Arrow:return r.createElement(R,{...d(e)});case u.S.BaseWidget:return r.createElement(M,{...d(e)});case u.S.Chart:case v:return r.createElement(H,{...d(e)});case u.S.Group:return r.createElement(Z,{...d(e)});case u.S.Image:return r.createElement(ie,{...d(e)});case u.S.Pin:return r.createElement(be,{...d(e)});case u.S.RichContent:return r.createElement(Se,{...d(e)});case u.S.Svg:return r.createElement(Ee,{...d(e)});case u.S.Text:return r.createElement(Le,{...d(e)});case u.S.WidgetAudio:{const t=I(n);return t.DisplayPlayer&&!t.IsBackground?r.createElement(Ne,{...d(e)}):null}case u.S.WidgetVideo:return r.createElement(je,{...d(e)});case u.S.ContainerBox:return r.createElement(O,{...d(e)});default:return console.error("tried to render a fake item for the unknown item type ".concat(t)),null}}return l.renderItem?l.renderItem({item:n,itemId:n.Id,itemType:t,itemRef:c,itemZIndex:h(n),parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s,renderItemNode:m}):m({item:n})})),$e=[];function Ye(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((e=>(e=>{const t=I(e);return!((0,c.X)(t)&&t.IdGroup)&&!((0,d.Kb)(t)&&t.containerBoxId)})(e))).map((e=>({item:e,itemType:t}))))&&void 0!==n?n:$e}const Ke=(0,o.PA)((e=>{var t,n,o,i,s;let{canBeTranslated:c=!0,delta:m,documentConfig:g,onBackgroundClick:v,onItemClick:h,onItemMouseEnter:w,onItemMouseLeave:y,renderItem:b,showBackgroundColor:C=!0,showBackgroundImage:x=!0,slide:k,t:S,isVideoVisualizationForbidden:A=!1,containerBoxStateMap:B,isOffline:E=!1,transversalItems:P=[]}=e;const T=((e,t)=>{if(t)return"data"in e?e.data.BackgroundColor:e.BackgroundColor})(k,C),z=((e,t)=>{var n;if(t)return"Background"in e?e.Background:null===(n=e.background)||void 0===n?void 0:n.currentBackgroundImage})(k,x),D=(e=>{if("data"in e){const{resolveTaskRef:t}=l();return t(e.data.SizeBackground)}return e.SizeBackground?e.SizeBackground:e.BackgroundHeight&&e.BackgroundWidth?{Width:e.BackgroundWidth,Height:e.BackgroundHeight}:{Width:e.Size.Width,Height:e.Size.Height}})(k),R=(e=>{if("data"in e){const{resolveTaskRef:t}=l();return t(e.data.PositionBackground)}return e.PositionBackground?e.PositionBackground:e.PositionBackgroundLeft&&e.PositionBackgroundTop?{PositionTop:e.PositionBackgroundTop,PositionLeft:e.PositionBackgroundLeft}:e.PositionBackground})(k),F="data"in k?k.data.OpacityBackground:k.OpacityBackground,L={width:parseFloat(null!==(t=("data"in k?k.data.Size:null!==(n=k.Size)&&void 0!==n?n:k).Width)&&void 0!==t?t:"0"),height:parseFloat(null!==(o=("data"in k?k.data.Size:null!==(i=k.Size)&&void 0!==i?i:k).Height)&&void 0!==o?o:"0")},M=(0,r.useMemo)((()=>({onClick:h,onMouseEnter:w,onMouseLeave:y})),[h,w,y]),W=(e=>{if("allItems"in e&&e.allItems)return e.allItems;const t=[];return Object.values(a.B).forEach((n=>{const r=e[n];r&&t.push(...r)})),t})(k).concat(P);if(B){var G,_;const e=null!==(G=null===(_=k.containerBoxes)||void 0===_?void 0:_.length)&&void 0!==G?G:0;if(e!==B.size)throw new Error("provided containerBoxStateMap size (".concat(B.size,") does not match the number of containerBoxes (").concat(e,")"))}const N=new Map;null===(s=k[a.B.ContainerBoxes])||void 0===s||s.forEach((e=>{var t;const n=null===B||void 0===B||null===(t=B.get(e.Id))||void 0===t?void 0:t.side;N.set(e.Id,{containedItems:[],side:n})})),W.forEach((e=>{const t=I(e);if((0,d.Kb)(t)&&t.containerBoxId){N.get(t.containerBoxId).containedItems.push(e)}}));const Q={slide:{items:W,containerBoxStateMap:N,size:L},delta:m,canBeTranslated:c,documentConfig:g,t:S,renderItem:b,isVideoVisualizationForbidden:A,isOffline:E};return r.createElement(p.Provider,{value:Q},r.createElement(f,{key:k.Id,backgroundImageOpacity:F,backgroundImage:z,backgroundImageSize:D,backgroundImagePosition:R,backgroundColor:T,onClick:v}),[...Ye(k[a.B.Activities],u.S.Activity),...Ye(k[a.B.Areas],u.S.Area),...Ye(k[a.B.Arrows],u.S.Arrow),...Ye(k[a.B.BaseWidgets],u.S.BaseWidget).filter((e=>!P.some((t=>t.Id===e.item.Id)))),...Ye(k[a.B.ContainerBoxes],u.S.ContainerBox),...Ye(k[a.B.Charts],u.S.Chart),...Ye(k[a.B.Groups],u.S.Group),...Ye(k[a.B.Images],u.S.Image),...Ye(k[a.B.Pins],u.S.Pin),...Ye(k[a.B.RichContents],u.S.RichContent),...Ye(k[a.B.Svgs],u.S.Svg),...Ye(k[a.B.Texts],u.S.Text),...Ye(k[a.B.WidgetsAudio],u.S.WidgetAudio),...Ye(k[a.B.WidgetsVideo],u.S.WidgetVideo),...P.map((e=>Ye([e],e.type))).flat()].map((e=>{let{item:t,itemType:n}=e;return r.createElement(Ze,{key:t.Id,itemType:n,item:t,parentGroupItem:void 0,directParentContainerBoxItem:void 0,indirectParentContainerBoxItem:void 0,events:M})})))})),Ue=Ke}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/slideThumbnail.0f3c9e7e.chunk.js.map