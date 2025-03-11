import{G as S,j as e,r as i,u as A,d as $,A as C,l as v,m as U,D as G}from"./index-BzYBcspH.js";import{P as O,C as B,a as H,E as J,u,w as R,b as V}from"./jspdf.plugin.autotable-DHxsfK2G.js";import{F as Z}from"./index-DANeoqk1.js";import"./index-B7YoF_5a.js";import"./typeof-QjJsDpFa.js";function Y(l){return S({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"},child:[]}]})(l)}function q(l){return S({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(l)}const K=({totalItems:l,itemsPerPage:p,onPageChange:b,currentPage:a})=>{const r=Math.ceil(l/p),d=`Showing ${a} out of ${r} results`,h=t=>{t>0&&t<=r&&b(t)},m=()=>{const t=[];if(r<=4)for(let n=1;n<=r;n++)t.push(n);else t.push(1),a===1||a===2?(t.push(2),t.push(3)):a===r||a===r-1?(t.push(r-2),t.push(r-1)):(t.push(a-1),t.push(a)),t.includes(r)||t.push(r);return t};return e.jsxs("div",{className:"flex justify-between items-center mt-3 px-3 ",children:[e.jsx("div",{className:"text-sm text-gray-600",children:e.jsx("p",{className:"text-base",children:d})}),e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsxs("button",{className:"flex items-center gap-2 text-orange px-4 py-2 rounded-l-md",onClick:()=>h(a-1),disabled:a===1,children:[e.jsx(Y,{})," Previous"]}),m().map((t,n)=>t==="..."?e.jsx("span",{className:"px-4 py-2",children:"..."},n):e.jsx("button",{className:`px-3 py-1.5 text-sm rounded-md ${a===t?" bg-gradient-to-b from-[#3D03FA] to-[#A71CD2] px-3 py-1 font-medium ":""}`,onClick:()=>h(t),children:t},n)),e.jsxs("button",{className:"flex items-center gap-2 text-orange pl-4 py-2 rounded-r-md",onClick:()=>h(a+1),disabled:a===r,children:["Next ",e.jsx(q,{})]})]})]})},te=({permissions:l})=>{l==null||l.includes("create");const p=l==null?void 0:l.includes("view"),b=l==null?void 0:l.includes("delete"),[a,r]=i.useState(1),[d,h]=i.useState([]),[m,t]=i.useState([]),[n,N]=i.useState(!1),[D,T]=i.useState(""),E=A();i.useEffect(()=>{_()},[n]);const j=10;i.useEffect(()=>{const s=(a-1)*j,o=d.slice(s,s+j);t(o)},[a,d]);const _=async()=>{try{const o=(await $.get(`${C}/api/getcourses`)).data;h(o)}catch(s){console.log(s)}},I=s=>{T(`${C}/api/deletecourse/${s}`),N(!0)},k=()=>{N(!1)},M=s=>{r(s)},f=()=>d.map(s=>({"User Id":s._id,"First Name":s.fname,"Last Name":s.lname,Email:s.email,Phone:s.phone,Topic:s.mainTopic,Type:s.type,Date:v(s.date)})),F=()=>{const s=u.json_to_sheet(f()),o=[{wpx:180},{wpx:100},{wpx:100},{wpx:180},{wpx:80},{wpx:80},{wpx:120},{wpx:100}];s["!cols"]=o;const x=u.book_new();u.book_append_sheet(x,s,"courses"),R(x,"SMC_courses.xlsx")},z=()=>{const s=new V,o=["User Id","First Name","Last Name","Email","Phone","Topic","Type","Date"],x=f().map(c=>[c["User Id"],c["First Name"],c["Last Name"],c.Email,c.Phone,c.Topic,c.Type,c.Date]);s.autoTable({head:[o],body:x,startY:20,theme:"grid",headStyles:{fillColor:[97,144,213],textColor:[255,255,255],fontStyle:"bold",halign:"center"},bodyStyles:{textColor:[0,0,0],halign:"center"}}),s.save("SMC_courses.pdf")},L=(s,o,x,c,g,P)=>{const y=JSON.parse(s);localStorage.setItem("courseId",c),localStorage.setItem("first",g),localStorage.setItem("jsonData",JSON.stringify(y));let w="";g&&(w=P),E("/content",{state:{jsonData:y,mainTopic:o.toUpperCase(),type:x.toLowerCase(),courseId:c,end:w}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" font-extralight",children:[e.jsxs("div",{className:"flex justify-between items-center my-2",children:[e.jsx("p",{className:" mx-2 mt-6",children:"Courses"}),e.jsxs("div",{className:" mx-2 flex gap-6 mt-4",children:[e.jsx("button",{onClick:z,children:e.jsx("img",{className:"size-8",src:O,alt:"Pdf image"})}),e.jsx(B,{data:f(),filename:"SMC_courses.csv",className:"cursor-pointer",target:"_blank",children:e.jsx("img",{className:"size-8",src:H,alt:"csv image"})}),e.jsx("button",{onClick:F,children:e.jsx("img",{className:"size-8 ",src:J,alt:"excel image"})})]})]}),e.jsx("div",{className:"mx-1 overflow-auto no-scrollbar  ",children:e.jsxs("table",{className:" w-full",children:[e.jsx("thead",{className:"text-slate-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 font-extralight border border-slate-400",children:"User Id"}),e.jsx("th",{className:"font-extralight border border-slate-400 text-nowrap",children:"First Name"}),e.jsx("th",{className:"font-extralight border border-slate-400 text-nowrap",children:"Last Name"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Email"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Phone"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Topic"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Type"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Date"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Action"})]})}),e.jsx("tbody",{className:"text-slate-400 ",children:m&&m.map((s,o)=>e.jsxs("tr",{className:" text-nowrap text-center",children:[e.jsx("td",{className:"border border-slate-400",children:s._id}),e.jsx("td",{className:"border border-slate-400 capitalize",children:s.fname}),e.jsx("td",{className:"border border-slate-400 capitalize",children:s.lname}),e.jsx("td",{className:"border border-slate-400",children:s.email}),e.jsx("td",{className:"border border-slate-400",children:s.phone}),e.jsx("td",{className:"border border-slate-400  capitalize",children:s.mainTopic}),e.jsxs("td",{className:"border border-slate-400 capitalize",children:[" ",s.type]}),e.jsx("td",{className:"border border-slate-400 text-slate-500 ",children:v(s.date)}),e.jsxs("td",{className:" border-b border-r border-slate-400 flex items-center justify-evenly  ",children:[p&&e.jsx("p",{onClick:()=>L(s.content,s.mainTopic,s.type,s._id,s.completed,s.end),className:" cursor-pointer p-2  text-green-600 ",children:e.jsx(Z,{size:24})}),b&&e.jsx("p",{onClick:()=>I(s._id),className:"cursor-pointer size-6",children:e.jsx("img",{src:U,alt:"delete image"})})]})]},o))})]})})]}),e.jsx(K,{totalItems:d.length,itemsPerPage:j,currentPage:a,onPageChange:M}),n&&e.jsx(G,{onClose:k,title:"Course",onDelete:D})]})};export{te as default};
