//https://ichi-bit.hateblo.jp/entry/2017/11/01/node_js%E3%81%A0%E3%81%91%E3%81%A7%E6%8E%B2%E7%A4%BA%E6%9D%BF%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B(1)
const http = require('http'); // httpサーバーmodule
const hostname = 'localhost'; // ホスト名
const port = 3000; // port番号

// httpサーバーの定義
const server = http.createServer((req, res) => {
    // 全リクエストを処理
    res.statusCode = 200; // http ステータスコード
    res.setHeader('Content-Type', 'text/plain'); // テキストを返す
    res.write('Hello '); // res.write でコンテンツを送る
    res.end('World!\n'); // res.endでもコンテンツを返せる
});

// サーバー起動
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
