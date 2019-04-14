Firebase の事始めとして https://github.com/po3rin/vue-golang-fireauth をなぞってみる。

### Firebase

* Firebase の apiKey は public にして大丈夫（それはそうか）
  * [Stack Overflow の同質問への Firebase のエンジニアの人の返答](https://stackoverflow.com/a/37484053)

### frontend

* Vue CLI 3 からは webpack4 をベースとした機能があれこれデフォルトで入るので何も気にせず vue create でオッケー
* URL も # が入らないのがデフォルトに
* vue create した直後だと ESLint が no-console: true になってる

### go

* Go Modules について
  * 参考
    * [Go Modules in Go1.12](https://speakerdeck.com/budougumi0617/go-modules-in-go1-dot-12)
    * [Go Modulesの概要とGo1.12に含まれるModulesに関する変更](https://budougumi0617.github.io/2019/02/15/go-modules-on-go112/)
  * off: GOPATH mode
    * 標準パッケージ以外を全て GOPATH 配下のディレクトリで管理
    * バージョンはリポジトリの最新バージョン
  * on: module-aware mode
    * 標準パッケージ以外をモジュールとして管理
    * バージョンはリポジトリごとに管理
  * auto
    * GOPATH 配下では GOPATH mode、それ以外の場所では module-aware mode
  * vendor ディレクトリは無い
* ルーティングは gorilla/mux を使うと便利
* CORS の設定は gorilla/handlers を使うと便利
