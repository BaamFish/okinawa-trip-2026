import {House,CalendarDays,CarFront,ClipboardCheck,BookOpen} from 'lucide-react';
export const nav=[['home','首頁',House],['daily','行程',CalendarDays],['transport','交通',CarFront],['tools','工具',ClipboardCheck],['journal','旅記',BookOpen]];
export default function BottomNavigation({page,go}){return <nav className="bottom-nav" aria-label="手機主要導覽">{nav.map(([id,label,Icon])=><button key={id} onClick={()=>go(id)} aria-current={page===id?'page':undefined}><Icon size={23}/><span>{label}</span></button>)}</nav>}
