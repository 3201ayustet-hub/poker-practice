// data.js
// ここを編集すると、検索条件・画像リストを変更できます。
// 画像は images フォルダに入れて、image に "images/ファイル名" を書きます。

const OPTIONS = {
  players: ["2max", "3max", "4max", "5max", "6max", "9max"],
  stack: ["10bb", "15bb", "20bb", "25bb", "30bb", "40bb", "50bb", "100bb"],
  position: ["UTG", "HJ", "CO", "BTN", "SB", "BB"],
  action: ["Open", "Call", "3Bet", "4Bet", "All-in", "Fold"]
};

const IMAGE_DATA = [
  {
    id: 1,
    title: "BTN Open / 6max / 20bb",
    players: "6max",
    stack: "20bb",
    position: "BTN",
    action: "Open",
    image: "images/sample-btn-open.svg",
    memo: "サンプル画像です。実画像に差し替えてください。"
  },
  {
    id: 2,
    title: "SB 3Bet / 6max / 40bb",
    players: "6max",
    stack: "40bb",
    position: "SB",
    action: "3Bet",
    image: "images/sample-sb-3bet.svg",
    memo: "サンプル画像です。実画像に差し替えてください。"
  }
];
