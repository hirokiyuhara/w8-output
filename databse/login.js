window.onload = function () {
  // フォーム要素を取得
  const form = document.querySelector('form');
  // emailとpasswordの入力欄を取得
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // サイト固有のキーを使用してLocalStorageから値を取得し、入力欄にセット
  emailInput.value = localStorage.getItem('mySiteEmail') || '';
  passwordInput.value = localStorage.getItem('mySitePassword') || '';

  form.onsubmit = function () {
    // サイト固有のキーに対応するデータのみをLocalStorageから削除
    localStorage.removeItem('mySiteEmail');
    localStorage.removeItem('mySitePassword');

    // ローカルストレージに新しい値を設定
    localStorage.setItem('mySiteEmail', emailInput.value);
    localStorage.setItem('mySitePassword', passwordInput.value);
  };
};
