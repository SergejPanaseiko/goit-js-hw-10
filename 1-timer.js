import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as h,i as x}from"./assets/vendor-BbbuE1sJ.js";const v=document.head,u=document.createElement("style");u.innerHTML=`span{
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
        `;v.appendChild(u);const d=document.getElementById("datetime-picker"),a=document.querySelector("button[data-start]");a.style.pointerEvents="none";a.style.opacity="0.5";document.addEventListener("DOMContentLoaded",function(){const e=new Date,o=new Intl.DateTimeFormat("uk-UA",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(e);o.find(t=>t.type==="day").value,o.find(t=>t.type==="month").value,o.find(t=>t.type==="year").value,o.find(t=>t.type==="hour").value,o.find(t=>t.type==="minute").value;const l=e.toISOString().slice(0,16).replace("T"," ");d.value=l});let r,c;h("#datetime-picker",{enableTime:!0,dateFormat:"Y-m-d H:i",minuteIncrement:1,onClose:function(e){if(e.length>0){const n=e[0];c=n.getTime(),n<new Date?(x.error({title:"Error",message:"Please choose a date in the future!",position:"topRight"}),r=null):(a.style.pointerEvents="auto",a.style.opacity="1.0",r=n,c=r.getTime())}}});const g=document.querySelector("span[data-days]"),w=document.querySelector("span[data-hours]"),T=document.querySelector("span[data-minutes]"),E=document.querySelector("span[data-seconds]");let s=0;a.addEventListener("click",()=>{d.style.pointerEvents="none",d.style.opacity="0.5";let e=Date.now(),n=setInterval(()=>{e=Date.now(),s=c-e,s<=0&&clearInterval(n),g.textContent=`0${i(s).days}`.slice(-3),w.textContent=`0${i(s).hours}`.slice(-2),T.textContent=`0${i(s).minutes}`.slice(-2),E.textContent=`0${i(s).seconds}`.slice(-2)},1e3);a.style.pointerEvents="none",a.style.opacity="0.5"});function i(e){const m=Math.floor(e/864e5),p=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:p,minutes:y,seconds:f}}
//# sourceMappingURL=1-timer.js.map
