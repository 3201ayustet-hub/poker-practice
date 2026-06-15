# Poker Practice GTO

iPhoneのGitHubだけで運用しやすい、黒基調のGTO風画像検索アプリです。

## ファイル構成

- index.html
- admin.html
- data.js

## 主な仕様

- 参加人数 / スタック / ポジション / アクションで検索
- 1つの条件セットにつき画像は1枚
- 同じ条件で登録すると既存画像を上書き
- タイトルは「6max / 20bb / BTN / Open」のように自動生成
- 画像は開発者ページから選択
- 画像は自動圧縮され、data.jsに保存
- プルダウン項目は追加・削除可能

## 運用方法

1. `admin.html` を開く
2. 条件を選ぶ
3. 画像を選ぶ
4. SAVE / REPLACE IMAGE
5. 下部の `COPY data.js` を押す
6. GitHub上の `data.js` を編集し、丸ごと貼り替える
7. Commit changes

## 注意

GitHubだけで動くようにするため、開発者ページの変更は自動保存されません。
最後に必ず `data.js` をコピーしてGitHubへ貼り替えてください。
