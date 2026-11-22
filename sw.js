const CACHE='gym-tracker-v4';
const FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable-192.png','./icon-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  // Nunca guardar em cache a API/autenticação do Supabase (dados sempre atuais)
  if(url.hostname.endsWith('supabase.co'))return;
  // Páginas: rede primeiro (pega atualizações), cache se estiver offline
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put('./',copy));return res}).catch(()=>caches.match('./')));
    return;
  }
  // Demais arquivos (ícones, biblioteca do Supabase): cache primeiro
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match('./'))));
});
