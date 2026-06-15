# GTOver1 Firebase v2

既存Firestoreデータを保持した改善版です。

## 置き換えるファイル

GitHub上の以下を置き換えてください。

- index.html
- admin.html
- app.js
- style.css

追加：

- view.css

README.mdは任意です。

## v2の改善点

- 閲覧ページを白基調に変更
- 開発者ページは黒基調のまま
- 条件選択で自動検索
- 前回の検索条件を端末ごとに保存
- 画像タップで拡大表示
- 未登録条件の表示改善
- プルダウン項目の並び替え機能
- 登録済み画像の絞り込み検索
- 既存Firestoreデータを保持

## Firestore保存先

v1と同じです。

- settings/options
- images/{conditions}

そのため、保存済み画像は消えません。
