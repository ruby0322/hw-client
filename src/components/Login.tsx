import React from 'react';

const login = () => (
  <div>
    <form>
      <input type="text" placeholder="帳號" required />
      <input type="password" placeholder="密碼" required />
      <button type="submit">登入</button>
    </form>
  </div>
);

export default login;
