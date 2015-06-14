var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  // ここではユーザ名の有無判断のみ行っている
  // パスワード認証の場合はユーザ名、パスワードの有無判断に加えて
  // データストア(DBなど)内の存在チェックを合わせて行う
  if(req.body.userName) {
    // セッションへの格納処理
    // ここでは入力されたユーザ名だけだが、処理要件に応じて
    // DBから取得した値など（ユーザごとの設定値とか）を格納する
    req.session.user = {name: req.body.userName};
    res.redirect('../');
  } else {
    var err = '入力が正しくありません。確認して再入力してください。';
    res.render('login', {error: err});
  }
});

module.exports = router;
