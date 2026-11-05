(() => {
  const root=document.documentElement;
  const ru=root.lang==="ru";
  const labels=ru?{copied:"Адрес скопирован",manual:"Адрес выделен. Скопируйте его вручную."}:{copied:"Address copied",manual:"Address selected. Copy it manually."};
  const video = document.querySelector(".hero-video");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  function resumeMotion() {
    if (!reduced.matches && !document.hidden && video.paused && !video.error) {
      video.play().catch(() => video.classList.remove("is-playing"));
    }
  }
  video.muted = true;
  video.volume = 0;
  video.addEventListener("playing", () => video.classList.add("is-playing"));
  for (const event of ["pause", "error"]) {
    video.addEventListener(event, () => video.classList.remove("is-playing"));
  }
  reduced.addEventListener("change", event => {
    if (event.matches) video.pause();
    else resumeMotion();
  });
  document.addEventListener("visibilitychange", resumeMotion);
  window.addEventListener("pageshow", resumeMotion);
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) resumeMotion();
  }).observe(video.parentElement);
  resumeMotion();
  const menu=document.getElementById("mobile-menu"),toggle=document.querySelector(".menu-toggle"),close=document.querySelector(".close-menu");
  toggle.addEventListener("click",()=>{menu.showModal();toggle.setAttribute("aria-expanded","true");});
  close.addEventListener("click",()=>menu.close());
  menu.addEventListener("close",()=>toggle.setAttribute("aria-expanded","false"));
  menu.addEventListener("click",event=>{if(event.target===menu)menu.close();});
  menu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>menu.close()));
  const buyDialog = document.getElementById("buy-dialog");
  const buyConfirm = document.getElementById("buy-confirm");
  let buyTrigger;
  document.querySelectorAll("[data-buy]").forEach(button => {
    button.addEventListener("click", () => {
      buyTrigger = button;
      if (menu.open) {
        menu.close();
        buyTrigger = toggle;
      }
      buyDialog.showModal();
    });
  });
  buyDialog.addEventListener("close", () => buyTrigger?.focus({preventScroll: true}));
  buyConfirm.addEventListener("click", () => buyDialog.close());
  document.querySelectorAll(".language a").forEach(a=>a.addEventListener("click",()=>{if(location.hash)a.hash=location.hash;}));
  const toast=document.querySelector(".toast");let toastTimer;
  function showToast(text){toast.textContent=text;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);}
  async function copy(button){
    const address=button.dataset.copy;
    try {await navigator.clipboard.writeText(address);showToast(labels.copied);}
    catch {
      const input=document.createElement("textarea");input.value=address;input.style.cssText="position:fixed;opacity:0;pointer-events:none";
      document.body.append(input);input.select();
      const copied=document.execCommand("copy");input.remove();
      if(copied)showToast(labels.copied);else{const target=document.getElementById(button.dataset.addressId);const range=document.createRange();range.selectNodeContents(target);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);showToast(labels.manual);}
    }
  }
  document.querySelectorAll("[data-copy]").forEach(button=>button.addEventListener("click",()=>copy(button)));
})();

