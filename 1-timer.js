import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as x,i as v}from"./assets/vendor-BbbuE1sJ.js";const g=document.head,h=document.createElement("style");h.innerHTML=`span{
            font-size: 20px;
        }
        [data-days],[data-hours],[data-minutes],[data-seconds]{
            font-size: 40px;
        }
        .field{
            display: flex;
            flex-direction: column;
            margin-right: 20px;
            text-align: center;
        }        
        .label{
            text-transform: uppercase;
            font-size: 14px;
        }
        button{
          font-size: 18px;
        }
        #datetime-picker{
          font-size: 18px;
          margin-bottom: 20px;
        }
        .timer{
          display: flex;
        }
        .field{
          display: flex;
          flex-direction = "column";
        }
        `;g.appendChild(h);const m=document.getElementById("datetime-picker"),a=document.querySelector("button[data-start]");a.style.pointerEvents="none";a.style.opacity="0.5";document.addEventListener("DOMContentLoaded",function(){const t=new Date,o=new Intl.DateTimeFormat("uk-UA",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Europe/Kyiv"}).formatToParts(t),p=o.find(e=>e.type==="day").value,f=o.find(e=>e.type==="month").value,r=o.find(e=>e.type==="year").value,c=o.find(e=>e.type==="hour").value,d=o.find(e=>e.type==="minute").value,l=`${r}-${f}-${p} ${c}:${d}`;m.value=l});let u,y;x("#datetime-picker",{enableTime:!0,dateFormat:"Y-m-d H:i",minuteIncrement:1,onClose:function(t){if(t.length>0){const n=t[0];y=n.getTime(),n<new Date?(v.error({title:"Error",message:"Please choose a date in the future!",position:"topRight"}),u=null):(a.style.pointerEvents="auto",a.style.opacity="1.0",u=n,y=u.getTime())}}});const w=document.querySelector("span[data-days]"),E=document.querySelector("span[data-hours]"),T=document.querySelector("span[data-minutes]"),$=document.querySelector("span[data-seconds]");let s=0;a.addEventListener("click",()=>{m.style.pointerEvents="none",m.style.opacity="0.5";let t=Date.now(),n=setInterval(()=>{t=Date.now(),s=y-t,s===-1&&clearInterval(n),w.textContent=`0${i(s).days}`.slice(-3),E.textContent=`0${i(s).hours}`.slice(-2),T.textContent=`0${i(s).minutes}`.slice(-2),$.textContent=`0${i(s).seconds}`.slice(-2)},1e3);a.style.pointerEvents="none",a.style.opacity="0.5"});function i(t){const r=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5+2),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:c,minutes:d,seconds:l}}
//# sourceMappingURL=1-timer.js.map
