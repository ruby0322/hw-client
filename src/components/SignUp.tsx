import React from 'react';

const signUp = () => (
  <div>
    <form>
      <input type="text" placeholder="帳號" required />
      <br />
      <input type="password" placeholder="密碼" required />
      <br />
      <input type="password" placeholder="確認密碼" required />
      <br />
      <button type="submit">註冊</button>
    </form>
  </div>
);

export default signUp;
