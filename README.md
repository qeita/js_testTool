# JSテストツール  
  
フロントエンド関連で使用するテストツールの情報収集、及び情報整理として(現在、編集中)  
  
## ユニットテスト  
  
### - フロントエンドでユニットテストを行う理由  
- 単一機能で動作することを保証 -> 品質担保  
- 開発速度(結合テスト以外でブラウザ越しで動作確認することがなくなる)  
  
### - 手順  
テストにあたって下記の手順で進められる。  
  
1. 機能単位の関数を作成(関数が入力(引数)・出力(返り値)を持つ設計にする必要がある)  
2. 1.の内容に即してテストコードを作成  
3. ユニットテストを実行、テストをパスしたらOK。失敗したら、該当箇所の処理を確認、修正し再実行  
※1.と2.を逆の順番で、テストコードを書いてから実装を進めるケースもある  
  
### - Javascriptテスト環境  
大きく以下の4つのカテゴリに分けられ、それぞれのカテゴリから最大1つずつ選択する。  
テストツールについては、必要なものを随時追加する。  

#### アサーション(「〇〇」は「××」である)  
[assert](https://www.npmjs.com/package/assert) ... シンプルなアサーションコマンド。  
[chai](http://chaijs.com/) ... 同値比較のほか比較演算子などを介したアサーションにも対応。  
[power-assert](https://github.com/power-assert-js/power-assert)  


#### フレームワーク(テスト実行 & 便利キット)  
[Mocha](https://mochajs.org/) ... `describe`,`it`によるテストのグルーピングが行える。  
  
#### テストランナー  
[Karma](https://karma-runner.github.io/1.0/index.html) ... ブラウザテストで前処理(コンパイルとか)の設定も可能。ブラウザを介したテストに使われる。
  
#### テストツール  
[Sinon](http://sinonjs.org/) ... テストダブル(Ajaxといった外部リソースを含めた処理テストや連結処理されている関数のテスト)を実現するライブラリ。スパイ、スタブ、モック、フェイクという代表的なテストダブル機能を有する。  
  
  
### - 通常関数のユニットテスト -> アサーション(assert) & フレームワーク(Mocha) 
例)  
演算して結果を返す関数(`_dev/assets/js/mocha/number-util.js`)を作成、その動作確認としてテストコード(`_dev/assets/js/test/mocha/number-util.js`)を作成。  
  
npm scriptsに、テストコマンドを作成して実行。  
`npm run mocha`  
  
動作結果がターミナルに出力。  
  
### - DOM操作機能のユニットテスト -> アサーション(assert) & フレームワーク(Mocha) & タスクランナー(Karma)  
例)  
リストを動的に追加する関数(`_dev/assets/js/karma/append-list.js`)を作成、その動作確認としてテストコード(`_dev/assets/js/test/karma/append-list.js`)を作成。  
  
Karmaをインストール。npm scriptsに、テストコマンドを作成して実行。  
`npm run karma`  
  
動作結果がターミナルに出力、ブラウザが立ち上がる。  


### - 参考  
[一から始めるJavaScriptユニットテスト](http://developer.hatenastaff.com/entry/2016/12/05/102351)  
[ユニットテストって何?って人向けのmochaとchaiの使い方](http://qiita.com/y_hokkey/items/f73ea6b3d5f6902396b6)  
  
    