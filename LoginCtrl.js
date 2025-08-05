
// window.addEventListener("DOMContentLoaded", () => {
//   const usernameInput = document.getElementById("username");
//   const keywordInput = document.getElementById("keyword");

//   usernameInput.addEventListener("input", validateUsername);
//   keywordInput.addEventListener("input", validateKeyword);
// });

// function validateUsername() {
//   const username = document.getElementById("username").value.trim();
//   const errorElem = document.getElementById("error");

//   const maxLength = 32;
//   const forbiddenPattern = /['"%;()=<>\\]/;
//   const halfWidthAlphaNum = /^[a-zA-Z0-9]*$/;

//   // 入力なしチェック
//   if (username.length === 0) {
//     errorElem.textContent = "ユーザー名とキーワードを入力してください。";
//     return;
//   }

//   // 文字数制限
//   if (username.length > maxLength) {
//     errorElem.textContent = `ユーザー名は${maxLength}文字以内で入力してください。`;
//     return;
//   }

//   // 半角チェック
//   if (!halfWidthAlphaNum.test(username)) {
//     errorElem.textContent = "ユーザー名は半角英数字のみ使用できます。";
//     return;
//   }

//   // 禁止文字チェック
//   if (forbiddenPattern.test(username))) {
//     errorElem.textContent = "無効な文字が含まれています。使用禁止記号： ' \" % ; ( ) = < > \\";
//     return;
//   }

//   // 問題なし
//   errorElem.textContent = "";
// }

// function validateKeyword() {
//   const keyword = document.getElementById("keyword").value.trim();
//   const errorElem = document.getElementById("error");

//   const maxLength = 1024;
//   const forbiddenPattern = /['"%;()=<>\\]/;

//   // 入力なしチェック
//   if (keyword.length === 0) {
//     errorElem.textContent = "ユーザー名とキーワードを入力してください。";
//     return;
//   }

//   // 文字数制限
//   if (keyword.length > maxLength) {
//     errorElem.textContent = `キーワードは${maxLength}文字以内で入力してください。`;
//     return;
//   }

//   // 禁止文字チェック
//   if (forbiddenPattern.test(keyword)) {
//     errorElem.textContent = "無効な文字が含まれています。使用禁止記号： ' \" % ; ( ) = < > \\";
//     return;
//   }

//   // 問題なし
//   errorElem.textContent = "";
// }

document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const keyword = document.getElementById("keyword").value;
  const error = document.getElementById("error");

  if (username === "user" && keyword === "viettrip") {
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
