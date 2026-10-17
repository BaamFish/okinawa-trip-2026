import {ArrowUpRight,MapPin,Info} from 'lucide-react';
import {asset,mapUrl,trip,credits} from '../data';
export function External({href,children,className=''}){return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17}/></a>}
export function SourceLink({className=''}){return <External className={className} href={trip.sourceUrl}>查看原始 Google 行程文件</External>}
export function MapLink({query,children='Google Maps 導航'}){return query?<External className="map-button" href={mapUrl(query)}><MapPin size={17}/>{children}</External>:<span className="pending-location"><Info size={16}/>地點待憑證確認</span>}
export function Photo({file,alt,className='',eager=false,creditLink=true}){const credit=credits.find(c=>c.file===file);return <figure className={`photo ${className}`}><img src={asset(file)} alt={alt+(file.endsWith('.svg')?'（原創示意插畫，非實景）':'')} loading={eager?'eager':'lazy'} onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=asset('boat.svg')}}/>{credit?<figcaption>{creditLink?<External href={credit.source}>{credit.author} · {credit.license}</External>:`${credit.author} · ${credit.license}`}</figcaption>:<figcaption>ORIGINAL ILLUSTRATION · 非實景</figcaption>}</figure>}
export function Heading({eyebrow,title,children}){return <header className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children&&<p className="muted">{children}</p>}</header>}
export function Notice({children}){return <div className="notice"><Info size={18}/><div>{children}</div></div>}
