import trip from './data/itinerary.json';
import credits from './data/credits.json';
export {trip,credits};
export const asset=file=>`${import.meta.env.BASE_URL}images/${file}`;
export const mapUrl=query=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
export {countdown} from './countdown.js';
export const routes=[{day:1,title:'抵達那霸',mode:'市區交通方式待安排',stops:[['那霸機場','那覇空港'],['住宿',trip.hotel],['國際通','国際通り 那覇'],['唐吉訶德','ドン・キホーテ 国際通り店']]},{day:2,title:'南部 → 首里 → 北谷',mode:'租車自駕；先抵達 11:00 固定船班',stops:[['若狹取車點','Relax car rental 那覇市若狭1丁目15-5'],['新原／OCEANS','新原海底観光センター OCEANS'],['Cafe Yabusachi','Cafe やぶさち 南城市'],['奧武島','奥武島 いまいゆ市場 南城市'],['西來院','西来院 達磨寺 那覇'],['美國村','美浜アメリカンビレッジ'],['住宿',trip.hotel]]},{day:3,title:'那霸 → 美麗海 → 古宇利',mode:'自駕；那霸至北部約 1 小時 45 分–2 小時，依文件估計',stops:[['住宿',trip.hotel],['美麗海','沖縄美ら海水族館'],['古宇利大橋／海灘','古宇利大橋 古宇利ビーチ'],['Ocean Tower','古宇利オーシャンタワー'],['住宿',trip.hotel]]},{day:4,title:'賞鯨 → 浦添 → 還車 → 機場',mode:'租車保留到最後一天；還車地點與機場接駁待確認',stops:[['住宿',trip.hotel],['三重城港','三重城港 那覇'],['ほうき星・候選','ほうき星 港川本店'],['PARCO CITY','サンエー浦添西海岸 PARCO CITY'],['還車點待確認',null],['那霸機場','那覇空港']]}];
export const checklist=[['stay','抵達前再確認 18:00 後自助入住、平板及取鑰匙流程'],['parking','確認住宿停車；備妥住宿方提供的停車許可證'],['rental','確認取車報到、保險、押金與緊急聯絡方式'],['license','準備台灣駕照、官方日文譯本與護照'],['return','確認 12/28 17:00 確切還車地點、滿油規定與機場接駁'],['sea','賞鯨與玻璃底船出發前確認海況及訂單集合須知'],['temple','確認西來院授與所時間與御守款式'],['fireworks','查 12/26 美國村煙火官方公告'],['aquarium','處理美麗海門票，查海豚秀、Ocean Blue 及 Tower 營業資訊'],['gear','準備相機、記憶卡、電池、行動電源、防風外套與雨具']];
export const costs=[['機票・2 人來回',22762],['住宿・3 晚',5927],['租車・Tanto 或同級',3250],['賞鯨・2 位成人',2442],['玻璃底船＋Cafe Yabusachi 午餐',1436]];
export const fallbacks=[{title:'玻璃底船取消',text:'延長新原海灘／奧武島／南城停留，再往西來院與美國村；可改南城咖啡。戶外停留仍依當天天候與安全狀況決定。',query:'奥武島 南城市'},{title:'賞鯨因海況取消',text:'改為瀨長島、那霸市區或提前開始 PARCO 購物；依實際天候選擇室內活動。17:00 還車時間照原計畫保留。',query:'サンエー浦添西海岸 PARCO CITY'},{title:'北部下雨／陰天',text:'美麗海照常安排，古宇利縮短停留，把咖啡及室內用餐時間拉長。夕陽視為加分，不為等落日拖太晚。',query:'沖縄美ら海水族館'}];

