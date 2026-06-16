# GTOver1 Firebase v3 Compare

既存Firestoreデータを保持したまま、閲覧ページに2レンジ比較機能を追加した版です。

## 置き換えるファイル

必須：
- index.html
- view.css
- app.js

同梱：
- admin.html
- style.css
- README.md

## v3の追加機能

- RANGE A / RANGE B の2つを比較
- プルダウン検索を横並びでコンパクト化
- レンジ表は A → B の順で縦に大きく表示
- A/B入れ替えボタン
- 前回の比較条件を端末ごとに保存
- 画像タップ拡大表示
- Firestore保存先はv1/v2と同じ

## 保存済みデータ

保存済み画像・プルダウン項目は消えません。
