import React from 'react';
import { Link } from 'react-router-dom';

const nav: React.FC = () => (
  <div>
    <Link to="/">首頁</Link>
    <Link to="/signUp">註冊</Link>
    <Link to="/Login">登入</Link>
    <Link to="/info">會員資訊</Link>
  </div>
);

export default nav;
