const express = require('express');
const app = express();
const port = 3000;

// JSON 파싱을 위한 미들웨어 설정
app.use(express.json());

// 사용자명과 비밀번호
const validUsername = "user123";
const validPassword = "pass123";

// 로그인 요청 처리
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validUsername && password === validPassword) {
        // 로그인 성공
        res.status(200).json({ message: "Login successful" });
    } else {
        // 로그인 실패
        res.status(401).json({ message: "Invalid username or password" });
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
