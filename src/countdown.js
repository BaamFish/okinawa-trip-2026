export function countdown(now=new Date()){
 const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
 const value=type=>Number(parts.find(x=>x.type===type).value);
 const days=Math.round((Date.UTC(2026,11,25)-Date.UTC(value('year'),value('month')-1,value('day')))/86400000);
 return days>0?{value:days,label:'距離出發'}:days>=-3?{value:'旅途中',label:'聖誕假期開始了'}:{value:'已珍藏',label:'旅行回憶'};
}
