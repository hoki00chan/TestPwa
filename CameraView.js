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