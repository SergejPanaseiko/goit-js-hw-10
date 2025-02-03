import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as u,i as m}from"./assets/vendor-BbbuE1sJ.js";const p=document.head,l=document.createElement("style");l.innerHTML=`span{
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
        `;p.appendChild(l);const o=document.getElementById("datetime-picker"),t=document.querySelector("button[data-start]");t.style.pointerEvents="none";t.style.opacity="0.5";document.addEventListener("DOMContentLoaded",function(){const n=new Date().toISOString().slice(0,16).replace("T"," ");o.value=n});let d;u("#datetime-picker",{enableTime:!0,time_24hr:!0,dateFormat:"Y-m-d H:i",minuteIncrement:1,defaultDate:new Date,minDate:"today",onClose:function(e){if(e.length>0){const n=e[0];d=n.getTime(),n<new Date?(m.error({title:"Помилка",message:"Оберіть дату у майбутньому!",position:"topRight"}),o.value="",t.style.pointerEvents="none",t.style.opacity="0.5"):(t.style.pointerEvents="auto",t.style.opacity="1.0")}}});const a=document.querySelector("span[data-days]"),i=document.querySelector("span[data-hours]"),r=document.querySelector("span[data-minutes]"),c=document.querySelector("span[data-seconds]");t.addEventListener("click",()=>{o.style.pointerEvents="none",o.style.opacity="0.5";let e=setInterval(()=>{let n=d-Date.now();if(n<=0){clearInterval(e),a.textContent="00",i.textContent="00",r.textContent="00",c.textContent="00",o.style.pointerEvents="auto",o.style.opacity="1.0",t.style.pointerEvents="auto",t.style.opacity="1.0";return}const s=y(n);a.textContent=`0${s.days}`.slice(-3),i.textContent=`0${s.hours}`.slice(-2),r.textContent=`0${s.minutes}`.slice(-2),c.textContent=`0${s.seconds}`.slice(-2)},1e3);t.style.pointerEvents="none",t.style.opacity="0.5"});function y(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%864e5%36e5/6e4),seconds:Math.floor(e%864e5%36e5%6e4/1e3)}}
//# sourceMappingURL=1-timer.js.map
