# Okinawa Christmas Trip 2026

四天三夜（2026/12/25–12/28）、2 位成人。React + Vite + Tailwind + Lucide，純靜態 GitHub Pages 旅遊手冊，附 PWA 離線快取。操作延續高松網站，獨立使用沖繩海洋藍、白色與珊瑚橘視覺。

## 本機執行

Node.js 22 LTS 或更新版：

```sh
npm install
npm test
npm run dev
npm run build
npm run preview
```

已附 package-lock.json；可重現安裝用 `npm ci`。正式版網址為終端顯示的 `/okinawa-trip-2026/` 路徑，不能直接用 file:// 開啟 index.html。

## 主要內容與來源

唯一主要行程來源：[Google Docs v1.6 Photo Refresh](https://docs.google.com/document/d/1N8ASAmc2JZbwIGBCwwXdeeW64rysBi3X4fRE3a3EMz0/edit)，2026/10/18 經 Google Drive 連接器完整讀取並人工核對。並未修改原文件，也沒有更改其分享權限。

- `src/data/itinerary.json`：四日行程卡片、時間、地點搜尋詞、預約狀態、交通與原文詳細安排。
- `src/data/source-reviewed.json`：人工審閱過、不含個資的文字基準，用於同步比對。
- `src/data/credits.json`：本地照片來源、作者、授權與修改說明。
- `src/data.js`：倒數、路線、費用、待辦與天候備案；內容均依同一文件整理。
- `src/components/`：首頁、日期分頁、時間軸卡片、交通、工具、旅記、底部導覽。
- `src/styles.css`：沿用高松旅記的共用響應式基礎。
- `src/okinawa.css`：沖繩專屬視覺與頁面樣式。

文件沒有內嵌 Google Maps 超連結，因此網站使用文件地名與地址組成 Maps 搜尋連結。租車確切還車點仍未知，不製作假定的還車導航。景點停車費、開放時間沒有文件依據時不補造。

玻璃底船 12/26 11:00、賞鯨 12/28 08:30 集合及還車 12/28 17:00 依文件為已確認安排；還車地點、機場接駁、美國村煙火、海豚秀候選場次仍有待確認。Ocean Blue 水槽側席 ¥1,000／50 分鐘僅為文件所記錄費用，需出發前再查。網站不提供即時天氣、即時路況、訂單查驗或即時營業資訊。

住宿、公共商家地址為導航用途，沒有旅客電話或電子郵件。網站不提供私人預約編號欄位，避免誤將個資放上公開儲存庫。

## 修改行程與重新部署

1. 先在原 Google 文件維護主行程。
2. 執行 `npm run sync:docs`。
3. 檢查 `.sync/review.md` 與 `.sync/source-latest.json`，以原文件再次核對。同步腳本只產生**審閱候選與差異**，不會覆寫正式行程，也不會自動部署。
4. 人工更新 `src/data/itinerary.json` 的時段、狀態、介紹、詳細安排與導航；需要時一起更新 `src/data.js` 的預算、路線、待辦。更新 `source-reviewed.json` 的審閱基準與 reviewedAt。
5. 執行 `npm test`、`npm run build`，預覽手機與桌面版。
6. `git add`、`git commit` 後 `git push origin main`，GitHub Actions 自動建置及部署。

同步腳本已用目前可公開讀取的 Google Docs 文字匯出端點實測，不需要 Google API Key 或 OAuth 憑證，並且不會調整文件權限。**若日後文件改為私人，腳本會失敗，不會繞過權限**；可重新使用已授權 Drive 連接器讀取，或手動匯出 TXT 後審閱。沒有建立排程或即時 Google Docs 自動同步。

`.sync/` 被 Git 忽略，疑似訂單號／電話／電子郵件等行會在候選中遮罩，但機器偵測不是保證。請勿提交未審閱的匯出檔；不要把 Google contentUri、存取 Token、護照或私人訂位資訊貼進來源資料。原文件中的圖片不會由同步腳本自動下載或自動取得再利用授權。

## GitHub Pages

- Repository：`https://github.com/BaamFish/okinawa-trip-2026`
- 網站：`https://baamfish.github.io/okinawa-trip-2026/`
- Vite 固定 `base: '/okinawa-trip-2026/'`。
- Pages Source 使用 **GitHub Actions**，不能使用分支根目錄直接發佈開發用 index.html。
- `.github/workflows/deploy.yml`：npm ci → 資料測試 → build 及產物驗證 → 上傳 dist → deploy-pages。
- hash 導覽（例如 `#daily`）避免重新整理 404；所有本地圖片使用 BASE_URL。
- build 會檢查 `/src/main.jsx` 沒有出現在 dist/index.html，且 JS/CSS、圖片、manifest、PWA 快取完整。

## 本機功能與 PWA

日期選擇、行程完成、待辦、額外費用使用沖繩專用 localStorage key，不與高松資料混用。資料只在本瀏覽器，不跨裝置同步；無法寫入時有錯誤提示。清除瀏覽資料會遺失紀錄。

倒數以 Asia/Taipei 日曆計算，每分鐘更新；出發日到 12/28 顯示旅途中，之後顯示已珍藏。所有旅遊時間依所在地當地時間，未把飛行所在地時差當作航程。

正式 build 首次在 HTTPS／localhost 開啟並完成快取後，可離線閱讀四日內容與本地照片。地圖與原始文件需要網路。iPhone Safari 分享 → 加入主畫面；Android Chrome 選單 → 安裝／加入主畫面。瀏覽器可能清除快取，實體手機安裝與飛航模式請自行驗收。偵測到新版時顯示更新按鈕。

## 照片授權

見 `ASSETS.md` 與網站「旅記」的 Photo Credits。四張照片皆為原文件使用的 Wikimedia Commons 照片，已保存至 public/images，無需登入或第三方熱連結。其餘圖片為本地原創 SVG 示意插畫，清楚標示非實景。字型使用 Noto Sans TC（若本機已安裝）、PingFang TC、Microsoft JhengHei 及系統後備，無外部字型下載。

## 驗證

`npm test` 檢查四天日期、資料完整、原文逐段保留、未知還車地點、預約狀態、已知費用及圖片授權。`npm run build` 最後執行 `scripts/verify-build.mjs`，驗證子路徑、實體資產與離線快取。瀏覽器驗收與部署狀態見交付的驗證紀錄。
