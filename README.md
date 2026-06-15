# Poker Practice

iPhoneのGitHubだけで編集しやすい、GTO風画像検索アプリです。

## ファイル構成

```txt
index.html
admin.html
data.js
images/
```

## 使い方

### 検索画面

`index.html` を開きます。

- 参加人数
- スタック
- ポジション
- アクション

を選ぶと、条件に合う画像が表示されます。

### 開発者ページ

`admin.html` を開きます。

- 画像データ追加
- プルダウン項目追加
- 登録済み画像の削除
- data.js出力

ができます。

## 画像追加方法

GitHubで画像を追加する場合は、`images` フォルダに画像を入れます。

例：

```txt
images/btn-open-20bb.png
```

その後、開発者ページで画像ファイルパスに以下のように入力します。

```txt
images/btn-open-20bb.png
```

## 重要

開発者ページで変更しただけではGitHub上の `data.js` は自動更新されません。

変更後は、開発者ページ下部の「data.js出力」をコピーして、GitHubの `data.js` に貼り替えてください。
