document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === "User" && password === "password") {
    window.location.href = "MainForm.html";
  } else {
    error.textContent = "ユーザー名またはパスワードが違います。";
  }
});

// PWA用：Service Worker登録
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service_worker.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.error("Service Worker error:", err));
}
