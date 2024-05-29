// 서버 설정: server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 사용자 데이터 (예시)
const users = {
  'testuser': 'password123'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    res.redirect('/main.html'); // 로그인 성공 시 리디렉션
  } else {
    res.redirect('/?error=1'); // 로그인 실패 시 쿼리 파라미터와 함께 리디렉션
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
