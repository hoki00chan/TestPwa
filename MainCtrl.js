console.log("Main screen loaded");

// PWA用：Service Worker登録（再度必要）
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.error("Service Worker error:", err));
}
