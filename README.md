# gulp-ejs-sass-webpack
Gulp + ejs boilerplate for my basic project.  
(ejs Starter)


## Require
* Node.js



## Getting Started

### Clone
    $ git clone git@github.com:42EG4M1/gulp-ejs-sass-webpack.git [projectName]


### Install npm packages
    $ npm i


### Build

    // gulp task
    $ npm run gulp



### Run only when New or Changed

    // svg sprite
    $ npm run svg

    // favicon
    $ npm run favicon

    // yakuHanJP
    $ npm run yakuhanjp



## SCSS ディレクトリ詳細
各ディレクトリの説明。

### Config
サイト構築当初に設定するスタイルなどを入れておくフォルダ。  
基本的に他のSCSSファイルを補助するためのものや、importしたり元となるデータの保管、下地となるスタイルなど。

#### config/mixins
mixin専用のフォルダ。

#### config/settings
サイト構築時の元となる数字やデータ。

#### config/foundation
下地となるスタイル。

### Layout
デザイン、レイアウトの基本となる部分のスタイルを入れておくフォルダ。  
サイト内で一番大きな部品で一度作成が完了すると変更することはあまりなく、利用頻度は高くないフォルダ。  

Prefix : l-

### Component
単体で形となるもの、これだけで完結できるも、使い回す可能性があるスタイルなどを入れておくフォルダ。  
レイアウトよりも部品としては小さいがmainで使用されるような重要な部品。開発時によく利用するフォルダ。  

Prefix : c-

### Project
ページメインの部品ではあるが、使い回すことがない一度きりのスタイルを入れておくフォルダ。  
部品の大きさとしてはcomponentと同等。開発時によく利用するフォルダ。

Prefix : p-

### Module
単体では使用しない、他のスタイルを補うためのスタイルを入れておくフォルダ。  
componentよりも小さい部品。利用頻度は高くないフォルダ。  

Prefix : m-



## git comment

    - Fix: バグ修正
    - Add: 新規の(ファイル)機能追加
    - Modify: バグではない機能の修正
    - Clean: リファクタリング等による整理
    - Remove: 削除
    - Update: 更新