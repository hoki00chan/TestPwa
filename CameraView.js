window.addEventListener("load", async () => {
  const video = document.getElementById("camera");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert("カメラアクセスが拒否されました。設定を確認してください。");
    console.error(err);
  }
});

// PWA用：Service Worker登録（再度必要）
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service_worker.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.error("Service Worker error:", err));
}