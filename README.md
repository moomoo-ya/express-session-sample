# express-session-sample
Node.js + Express.js + express-sessionでのセッション利用サンプル。

## なにこれ

express-sessionを用いたセッションへのデータ格納のサンプルです。

認証なしログインを行うアプリケーション（匿名チャットなど）を想定しています。

ユーザ名を入力していない状態でアクセスした場合は、ユーザ名入力画面に遷移させてユーザ名の入力を促します。

## 利用しているモジュール

詳細なバージョンは`package.json`参照

* express 4.12.*
* express-session 1.11.*
* jade
* express-generator (グローバルインストール)

## 作業の流れ

1. `express [アプリケーション名]`コマンドにて雛形を自動生成
  * 引数はアプリケーション名のみを想定
  * `--hbs`とか`--ejs`とか使う人は適宜読み替えてください
  * CSSは触れていないので`-c sass`とかは付けても大丈夫
1. [こちらの修正](https://github.com/moomoo-ya/express-session-sample/commit/fab66a9072ec4e196d622b4036dbb196368b75f0)が自動生成した雛形との差分になります
  * 一応パスワード認証を行う場合の変更点もコメントで記載してあります
