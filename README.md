# HTMLモック作成用のAngularJSを用いたテンプレート

## 目的
WEBシステムのHTMLモックを作成するときのテンプレート。
ただし、サーバ側の実装は使わない前提。(ただし、ajaxを使っているのでfile://では動かないので、厳密にはWebサーバは必要。PHPが動く場合には、index.phpでもよい)
また、HTMLのヘッダ、フッタ、メニューなど基本的な部品は共通ファイルとして管理できるようする。

このテンプレートはSPAとして作られているが、実際にWEBシステムになるときにはSPAにはならない事を想定。
あくまで、HTMLモックの時だけSPAとして動作する。
（これは、ヘッダ、フッタなどの共通ブロックを別ファイルのままでも表示できるようにしたかったので、そのようになっているだけ）

おおよそ、サーバ側で実際に実装する時と似たような仕組みになるようにしている。
（サーバ側を実装する人はindex.phpを参照して、サーバ側のテンプレート設計をする）

## デモ

https://rawgit.com/coltware/ng-html-mock/master/index.html

## SPA(サーバプログラムを必要としない場合)での動作

| ファイル  | |
|---|---|
| index.html | 全体の構造を管理する。ヘッダ、フッタ等を変えたければ、ここで変える |
| js/spa.js | #で続くリクエストから該当するHTMLを返す為の処理をしている |

## 通常のリクエストの度にページ遷移する場合(サーバプログラムを必要とする場合)の動作

| ファイル  | |
|---|---|
| index.php  | SPAではなく、通常のリクエストでページ遷移する場合のPHPプログラム |
| js/server.js | #で続くリクエストから該当するHTMLを返す為の処理をしている |

index.phpの実装は少々強引ではありますが、あえてわかりやすい実装したもの。
この通りに使う為の実装ではありませんので、ご注意。

## 共通で使用するファイル ##

| フォルダ・ファイル  | |
|---|---|
| views | 表示するHTMLファイル。このフォルダがドキュメントルート相当になる |
| views/header.html | このデモテンプレートで使っているヘッダ用ファイル |
| views/footer.html | このデモテンプレートで使っているフッタ用ファイル |
| views/mene.html | このデモテンプレートで使っているメニュー用のファイル |

## ページを追加する場合 ##

ページを追加する場合には、views/ 以下にHTMLファイルを追加してください。
また、そのファイルにアクセスする場合には、SPAでの動作の場合には、index.html#以下にviews以下のフォルダ構成と同じようにアクセスする。
たとえば、/views/form/index.htmlであれば、

    http://......./index.html#/form/index.html
   
リンクを記述するときには、以下のようにする。
    
    <a mock-href=/form/index.html>フォーム</a>
   
 mock-hrefというのが気に入らなければ、js/spa.js内の"mockHref"を書き換える。

