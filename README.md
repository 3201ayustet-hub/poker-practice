# GTOver1 Firebase v1

Firebase Firestoreだけで動く、GTO画像検索アプリです。

## ファイル

- index.html
- admin.html
- app.js
- style.css
- FIRESTORE_RULES.txt

## 特徴

- iPhone / Android / PC対応
- 4人で共有可能
- 画像は写真フォルダから選択
- 画像は自動圧縮してFirestoreに保存
- Storage不要
- 1条件セットにつき画像1枚
- 同じ条件は上書き
- プルダウン項目は追加・削除可能
- 黒基調デザイン

## 最初に必要な作業

Firestoreのルールを `FIRESTORE_RULES.txt` の内容に変更してください。

## GitHubに置くファイル

この5ファイルをリポジトリ直下に置いてください。

```txt
index.html
admin.html
app.js
style.css
FIRESTORE_RULES.txt
```

## 使い方

### 検索

`index.html` を開く。

### 管理

`admin.html` を開く。

画像登録：
1. 条件を選択
2. 写真を選択
3. SAVE / REPLACE IMAGE

プルダウン項目編集：
1. 種類を選択
2. 値を入力
3. ADD OPTION

## 注意

このv1はログインなしです。
URLを知っている人は全員編集できます。
