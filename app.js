const DATA = {
  "version": "6.0",
  "matrix": [
    [
      "AA",
      "AKs",
      "AQs",
      "AJs",
      "ATs",
      "A9s",
      "A8s",
      "A7s",
      "A6s",
      "A5s",
      "A4s",
      "A3s",
      "A2s"
    ],
    [
      "AKo",
      "KK",
      "KQs",
      "KJs",
      "KTs",
      "K9s",
      "K8s",
      "K7s",
      "K6s",
      "K5s",
      "K4s",
      "K3s",
      "K2s"
    ],
    [
      "AQo",
      "KQo",
      "QQ",
      "QJs",
      "QTs",
      "Q9s",
      "Q8s",
      "Q7s",
      "Q6s",
      "Q5s",
      "Q4s",
      "Q3s",
      "Q2s"
    ],
    [
      "AJo",
      "KJo",
      "QJo",
      "JJ",
      "JTs",
      "J9s",
      "J8s",
      "J7s",
      "J6s",
      "J5s",
      "J4s",
      "J3s",
      "J2s"
    ],
    [
      "ATo",
      "KTo",
      "QTo",
      "JTo",
      "TT",
      "T9s",
      "T8s",
      "T7s",
      "T6s",
      "T5s",
      "T4s",
      "T3s",
      "T2s"
    ],
    [
      "A9o",
      "K9o",
      "Q9o",
      "J9o",
      "T9o",
      "99",
      "98s",
      "97s",
      "96s",
      "95s",
      "94s",
      "93s",
      "92s"
    ],
    [
      "A8o",
      "K8o",
      "Q8o",
      "J8o",
      "T8o",
      "98o",
      "88",
      "87s",
      "86s",
      "85s",
      "84s",
      "83s",
      "82s"
    ],
    [
      "A7o",
      "K7o",
      "Q7o",
      "J7o",
      "T7o",
      "97o",
      "87o",
      "77",
      "76s",
      "75s",
      "74s",
      "73s",
      "72s"
    ],
    [
      "A6o",
      "K6o",
      "Q6o",
      "J6o",
      "T6o",
      "96o",
      "86o",
      "76o",
      "66",
      "65s",
      "64s",
      "63s",
      "62s"
    ],
    [
      "A5o",
      "K5o",
      "Q5o",
      "J5o",
      "T5o",
      "95o",
      "85o",
      "75o",
      "65o",
      "55",
      "54s",
      "53s",
      "52s"
    ],
    [
      "A4o",
      "K4o",
      "Q4o",
      "J4o",
      "T4o",
      "94o",
      "84o",
      "74o",
      "64o",
      "54o",
      "44",
      "43s",
      "42s"
    ],
    [
      "A3o",
      "K3o",
      "Q3o",
      "J3o",
      "T3o",
      "93o",
      "83o",
      "73o",
      "63o",
      "53o",
      "43o",
      "33",
      "32s"
    ],
    [
      "A2o",
      "K2o",
      "Q2o",
      "J2o",
      "T2o",
      "92o",
      "82o",
      "72o",
      "62o",
      "52o",
      "42o",
      "32o",
      "22"
    ]
  ],
  "preflopChoices": [
    "Value",
    "Mix Value",
    "Mix Bluff",
    "Call",
    "Fold"
  ],
  "boardAdvantageChoices": [
    "Dry / PFR有利",
    "Semi Dry / PFR有利",
    "Wet / ほぼ互角",
    "Low / Caller有利",
    "Paired / PFR有利"
  ],
  "preflopQuestions": [
    {
      "id": "PF001",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AAはUTG相手でも明確なバリュー3bet。最強レンジで大きくポットを作る。",
      "tags": [
        "value",
        "premium",
        "utg-btn"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF002",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KK",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "KKも明確なValue。AA以外には大きく有利。",
      "tags": [
        "value",
        "premium",
        "utg-btn"
      ],
      "sharkTip": "KKは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF003",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QQ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "QQはUTG相手でも十分強く、Valueに分類。",
      "tags": [
        "value",
        "premium",
        "utg-btn"
      ],
      "sharkTip": "QQは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF004",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AKsはA/Kブロッカーと高いエクイティがありValue。",
      "tags": [
        "value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AKsは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF005",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AKo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AKoは強いブロッカーと高カード価値でValue。",
      "tags": [
        "value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AKoは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF006",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "JJは強いが、UTGの上位レンジにぶつかるためMix Value。",
      "tags": [
        "mix-value",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "JJは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "PF007",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "TT",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "TTは強いポケットだが、UTG相手には3bet固定ではなくMix。",
      "tags": [
        "mix-value",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "TTは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "PF008",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AQsは強いスーテッドブロードウェイ。Callも3betも成立する。",
      "tags": [
        "mix-value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "PF009",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AQoは強いがAK/QQ+にぶつかるためMix Value。",
      "tags": [
        "mix-value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AQoは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "PF010",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "KQsはプレイアビリティが高いが、UTG相手にはMix。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "KQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "PF011",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはAブロッカーとホイール可能性があり、3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-btn"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "PF012",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A4s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A4sもAブロッカーを持ち、低頻度の3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-btn"
      ],
      "sharkTip": "A4sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "PF013",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A2s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A2sはAブロッカーとスーテッド価値でMix Bluffに使える。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-btn"
      ],
      "sharkTip": "A2sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "PF014",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "KTsはブロッカーとスーテッド価値があるが、実戦簡略化ではCallでも良い。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "PF015",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "99は3bet Valueには足りないが、セットやミドルボードで戦える。",
      "tags": [
        "call",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "99はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF016",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "88",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "88はセットマインとショーダウン価値がありCall。",
      "tags": [
        "call",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "88はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF017",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "AJsは強いスーテッドブロードウェイで、IPでCallしやすい。",
      "tags": [
        "call",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "AJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF018",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "QJsはスーテッド＋接続性があり、IPでプレイしやすい。",
      "tags": [
        "call",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "QJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF019",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "中頻度Call",
      "explanation": "76sはIPで実現率が高く、ナッツを作れる。",
      "tags": [
        "call",
        "suited-connector",
        "utg-btn"
      ],
      "sharkTip": "76sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF020",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KJo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "KJoはUTGの強いKx/Axに支配されやすい。",
      "tags": [
        "fold",
        "offsuit",
        "utg-btn"
      ],
      "sharkTip": "KJoはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF021",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "QToはオフスートでドミネーションされやすくFold。",
      "tags": [
        "fold",
        "offsuit",
        "utg-btn"
      ],
      "sharkTip": "QToはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF022",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNレンジは広いため、AAは明確なValue 3bet。",
      "tags": [
        "value",
        "premium",
        "btn-bb"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF023",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNオープンに対してJJは十分強いValue。",
      "tags": [
        "value",
        "pair",
        "btn-bb"
      ],
      "sharkTip": "JJは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF024",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AQo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNの広いレンジに対してAQoはValue 3bet。",
      "tags": [
        "value",
        "broadway",
        "btn-bb"
      ],
      "sharkTip": "AQoは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF025",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AJsは強いが、BBでは3betとCallが混ざる。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "AJsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "PF026",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "KQsはプレイアビリティが高く、Mix Value。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "KQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "PF027",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "99は強いディフェンスハンドで、3betもCallもある。",
      "tags": [
        "mix-value",
        "pair",
        "btn-bb"
      ],
      "sharkTip": "99は強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "PF028",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはAブロッカーでBTNを降ろす3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "btn-bb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "PF029",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "KTsはGTO寄りではMix Bluff。実戦簡略化ならCallでも自然。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "PF030",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "QTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "QTsはスーテッド＋接続性があり、3betブラフにもCallにも使える。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "QTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "PF031",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "76sはBBでコールも自然だが、低頻度3betブラフにも回せる。",
      "tags": [
        "mix-bluff",
        "suited-connector",
        "btn-bb"
      ],
      "sharkTip": "76sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "PF032",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "55",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "BBはポットオッズが良く、55はCallで守りやすい。",
      "tags": [
        "call",
        "pair",
        "btn-bb"
      ],
      "sharkTip": "55はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF033",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "Q8s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "Q8sはスーテッドでBBの広いディフェンスに入る。",
      "tags": [
        "call",
        "suited",
        "btn-bb"
      ],
      "sharkTip": "Q8sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF034",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "T8s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "T8sはプレイアビリティがあり、BBで守りやすい。",
      "tags": [
        "call",
        "suited-connector",
        "btn-bb"
      ],
      "sharkTip": "T8sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF035",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call寄り",
      "frequencyHint": "中頻度Call",
      "explanation": "A9oはBBで守れるが、ポストフロップは慎重に。",
      "tags": [
        "call",
        "offsuit",
        "btn-bb"
      ],
      "sharkTip": "A9oはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call寄り"
    },
    {
      "id": "PF036",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "K4o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K4oはオフスートでプレイアビリティが低くFold。",
      "tags": [
        "fold",
        "offsuit",
        "btn-bb"
      ],
      "sharkTip": "K4oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF037",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "T5o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "T5oは弱く、BBでも守りにくい。",
      "tags": [
        "fold",
        "offsuit",
        "btn-bb"
      ],
      "sharkTip": "T5oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF038",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "QQ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "UTG相手でもQQは非常に強いValue。",
      "tags": [
        "value",
        "premium",
        "utg-bb"
      ],
      "sharkTip": "QQは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF039",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AKsは強いブロッカーとエクイティがあるValue。",
      "tags": [
        "value",
        "broadway",
        "utg-bb"
      ],
      "sharkTip": "AKsは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF040",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "JJは強いがUTGの上位レンジに注意し、Mix Value。",
      "tags": [
        "mix-value",
        "pair",
        "utg-bb"
      ],
      "sharkTip": "JJは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "PF041",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AQsは強いがUTG相手では慎重に扱うMix Value。",
      "tags": [
        "mix-value",
        "broadway",
        "utg-bb"
      ],
      "sharkTip": "AQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "PF042",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはAブロッカーを使った3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-bb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "PF043",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "KTsはバリューではないが、低頻度の3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "utg-bb"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "PF044",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "99はBBでCall中心。セットや低ボードで価値が出る。",
      "tags": [
        "call",
        "pair",
        "utg-bb"
      ],
      "sharkTip": "99はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF045",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "AJsは強いスーテッドでCall可能。",
      "tags": [
        "call",
        "suited-broadway",
        "utg-bb"
      ],
      "sharkTip": "AJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF046",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "中頻度Call",
      "explanation": "76sはBBでポットオッズとプレイアビリティがある。",
      "tags": [
        "call",
        "suited-connector",
        "utg-bb"
      ],
      "sharkTip": "76sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF047",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "K9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K9oはUTGに支配されやすくFold。",
      "tags": [
        "fold",
        "offsuit",
        "utg-bb"
      ],
      "sharkTip": "K9oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF048",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "54o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "54oはオフスートで弱くFold。",
      "tags": [
        "fold",
        "offsuit",
        "utg-bb"
      ],
      "sharkTip": "54oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF049",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度4bet",
      "explanation": "3betを受けてもAAは明確な4bet Value。",
      "tags": [
        "value",
        "premium",
        "btn-vs-bb3b"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF050",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度4bet",
      "explanation": "AKsは4bet Valueとして十分強い。",
      "tags": [
        "value",
        "broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "AKsは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF051",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "4bet/Call混合",
      "explanation": "AQsは強いが、Callと4betが混ざる。",
      "tags": [
        "mix-value",
        "broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "AQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "PF052",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "4bet/Call混合",
      "explanation": "KQsはプレイアビリティが高く、Mix Value。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "KQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "PF053",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度4bet",
      "explanation": "A5sはAブロッカーを使った4betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "btn-vs-bb3b"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "PF054",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Fold寄りMix",
      "frequencyHint": "低頻度4bet",
      "explanation": "KTsは低頻度のブラフ候補だが、実戦では無理しない。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Fold寄りMix"
    },
    {
      "id": "PF055",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "99はIPでCallして戦える。",
      "tags": [
        "call",
        "pair",
        "btn-vs-bb3b"
      ],
      "sharkTip": "99はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF056",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "QJsはIPでCallしやすいスーテッドブロードウェイ。",
      "tags": [
        "call",
        "suited-broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "QJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "PF057",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "A9oは3betポットで支配されやすくFold。",
      "tags": [
        "fold",
        "offsuit",
        "btn-vs-bb3b"
      ],
      "sharkTip": "A9oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF058",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "K9s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K9sは3betに対して続けるには弱め。",
      "tags": [
        "fold",
        "suited",
        "btn-vs-bb3b"
      ],
      "sharkTip": "K9sはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF059",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Open",
      "frequencyHint": "100% Open",
      "explanation": "SB First InではValueは当然Open。",
      "tags": [
        "value",
        "sb"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Open"
    },
    {
      "id": "PF060",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A9s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Open",
      "frequencyHint": "Open中心",
      "explanation": "SB First InのMix Valueは基本Open頻度が高いという意味。Callではない。",
      "tags": [
        "mix-value",
        "sb"
      ],
      "sharkTip": "A9sは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Open"
    },
    {
      "id": "PF061",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Open",
      "frequencyHint": "Open中心",
      "explanation": "SBはBBを降ろす価値があり、A5sはOpen候補。",
      "tags": [
        "mix-bluff",
        "sb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Open"
    },
    {
      "id": "PF062",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "KTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Open/Fold",
      "frequencyHint": "Open寄り",
      "explanation": "KToはSBで攻撃的に使えるが、相手次第で調整。",
      "tags": [
        "mix-bluff",
        "sb"
      ],
      "sharkTip": "KToは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Open/Fold"
    },
    {
      "id": "PF063",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "72o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "72oは最弱級でFold。",
      "tags": [
        "fold",
        "sb"
      ],
      "sharkTip": "72oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF064",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNの広いレンジに対してSBのJJはValue。",
      "tags": [
        "value",
        "btn-sb"
      ],
      "sharkTip": "JJは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "PF065",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "KJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "KJsはBTNに対して戦えるが、OOPなのでMix。",
      "tags": [
        "mix-value",
        "btn-sb"
      ],
      "sharkTip": "KJsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "PF066",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはSBからの3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "btn-sb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "PF067",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "66",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call低頻度",
      "frequencyHint": "Call/Fold混合",
      "explanation": "SBはコールしすぎ注意だが、66は一部Call候補。",
      "tags": [
        "call",
        "btn-sb"
      ],
      "sharkTip": "66はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call低頻度"
    },
    {
      "id": "PF068",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Foldでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "SBはOOPなので76sはCallより3bet/Fold寄り。",
      "tags": [
        "mix-bluff",
        "btn-sb"
      ],
      "sharkTip": "76sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Foldでも可"
    },
    {
      "id": "PF069",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "QTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "QToはOOPで支配されやすくFold。",
      "tags": [
        "fold",
        "btn-sb"
      ],
      "sharkTip": "QToはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PF070",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "K4s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K4sはSBで無理に守らない。",
      "tags": [
        "fold",
        "btn-sb"
      ],
      "sharkTip": "K4sはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    }
  ],
  "boardAdvantageQuestions": [
    {
      "id": "BA001",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Aハイでレインボー。UTGがAA/AK/AQを多く持つためPFR有利。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA002",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Kハイ・非連結。UTGがAK/KQs/KKを持ちやすい。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA003",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "Q74r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "ドローが少ない高カードボード。PFRの高カード優位が出る。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "Q74rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA004",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "AJ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "AとJが絡むがレインボー。UTGの強いAxが多い。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA005",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "KJ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "KJの高カードがPFRに多く、ドローは少なめ。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "KJ2rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA006",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "QT9r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "高い連結ボード。PFRもCallerも強くヒットするため互角寄り。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA007",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "JT8ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "連結＋ツートーン。BTNも強いが、PFRのブロードウェイも絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA008",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低く連結し、Caller側の小ポケット・コネクターが強い。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA009",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "765ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低中カードでツートーン。Caller側が非常に多く絡む。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "765ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA010",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "QQ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "ペアボードでPFRの高ポケット・Qxが活きやすい。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA011",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "BTNは広いが強いAxも多く、DryなAハイはPFR有利。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA012",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "KハイDryはBTNのKxと高カードが活きる。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA013",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "AJ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "BTNが強いAx/Jxを多く持つためPFR有利。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA014",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "QT9r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BTNもBBもKJ/QJ/JT/T9/98などが絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA015",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "JT8ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BBも多く絡むが、BTNも強いブロードウェイを持つ。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA016",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "BBは低いカードを広く守るためCaller有利。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA017",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "543r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低い連結ボードでBBの守備レンジに強く当たる。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "543rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA018",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "QQ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "ペアボードはPFRのレンジ優位が出やすい。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA019",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "A83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "UTGの強いAxが多く、BBは弱いペアも多い。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA020",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "K72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Kハイ・非連結でUTGのレンジが強い。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA021",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "AQ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "UTGがAA/QQ/AK/AQを多く持つ。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AQ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA022",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "T98r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BBのコネクターが強い一方、UTGのオーバーペアやブロードウェイもある。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "T98rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA023",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "987ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BB側が強いが、PFR側も一部強いドローを持つ。学習上は互角寄り。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "987ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA024",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "652r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "BBは低いカードを広く守るためCaller有利。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "652rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA025",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "763ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低中カード＋ツートーンでBB側が強い。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "763ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA026",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "KK3r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "KペアボードはUTGの強いKx/高ポケットが活きる。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "KK3rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA027",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "SBはAを多く含むためAハイDryはPFR有利。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA028",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "KハイDryはPFR側がCBしやすい。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA029",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "AJ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "SB側に強いAxが多い。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA030",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "QJ8r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "高いウェットボードで双方が強く絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QJ8rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA031",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "BBは広く守るため低い連結ボードに強い。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA032",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "772r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "ペアボードはPFR側のレンジ優位が出やすい。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "772rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA033",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "ここでは3bet側SBをPFR扱い。強いAxを多く持つ。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA034",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "3bet側がAK/KK/KQsを多く持つ。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA035",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "KJ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "3bet側の強いブロードウェイが活きる。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "KJ2rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA036",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "JT8ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "3bet potでは低コネクターが減り、双方ブロードウェイが絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA037",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "3bet potでは差は小さいが、Call側の一部低カードが強く絡む。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA038",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "QQ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "3bet側の高ポケット・強いQxが機能する。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA039",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "ここでは3bet側BBをPFR扱い。強いAxが多い。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA040",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "3bet側はAK/KK/KQsを多く持つ。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA041",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "AQ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "3bet側のAA/QQ/AK/AQが強い。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AQ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA042",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "QT9r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "双方のブロードウェイが絡む。3bet potでは極端な差は小さい。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA043",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "765ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "Call側に一部の低中カードが残り、低いボードはCaller寄り。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "765ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA044",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "AA4r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "Aペアボードは3bet側の強いAxが活きる。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "AA4rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    }
  ],
  "rangeLibrary": {
    "UTG Open → BTN": {
      "category": "Strategy / Defense / 3Bet / SB",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix Value": [
          "AQs",
          "KQs",
          "AQo",
          "JJ",
          "TT"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs"
        ],
        "Call": [
          "AJs",
          "ATs",
          "KJs",
          "QJs",
          "QTs",
          "AJo",
          "JTs",
          "J9s",
          "T9s",
          "T8s",
          "99",
          "98s",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "KQo",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "BTN Open → BB": {
      "category": "Strategy / Defense / 3Bet / SB",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AQs",
          "AKo",
          "KK",
          "AQo",
          "QQ",
          "JJ",
          "TT"
        ],
        "Mix Value": [
          "AJs",
          "ATs",
          "KQs",
          "KJs",
          "KQo",
          "QJs",
          "JTs",
          "99",
          "88"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "K9s",
          "QTs",
          "J9s",
          "T9s",
          "76s",
          "65s",
          "54s"
        ],
        "Call": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "AJo",
          "KJo",
          "QJo",
          "J8s",
          "J7s",
          "J6s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T8s",
          "T7s",
          "A9o",
          "T9o",
          "98s",
          "97s",
          "A8o",
          "98o",
          "87s",
          "86s",
          "A7o",
          "77",
          "75s",
          "A6o",
          "66",
          "64s",
          "A5o",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "Q4s",
          "Q3s",
          "Q2s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "K9o",
          "Q9o",
          "J9o",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "85s",
          "84s",
          "83s",
          "82s",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "74s",
          "73s",
          "72s",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "63s",
          "62s",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "UTG Open → BB": {
      "category": "Strategy / Defense / 3Bet / SB",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix Value": [
          "AQs",
          "KQs",
          "AQo",
          "JJ",
          "TT"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "QTs"
        ],
        "Call": [
          "AJs",
          "ATs",
          "KJs",
          "KQo",
          "QJs",
          "AJo",
          "JTs",
          "J9s",
          "T9s",
          "T8s",
          "99",
          "98s",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "UTG Open → BTN 3bet → UTG": {
      "category": "Strategy / Defense / 3Bet / SB",
      "actions": {
        "4bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK"
        ],
        "Mix Value": [
          "AQs",
          "QQ",
          "JJ"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s"
        ],
        "Call": [
          "AJs",
          "KQs",
          "AQo",
          "TT",
          "99"
        ],
        "Fold": [
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "KJs",
          "KTs",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "KQo",
          "QJs",
          "QTs",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "AJo",
          "KJo",
          "QJo",
          "JTs",
          "J9s",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T9s",
          "T8s",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "98s",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "88",
          "87s",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "77",
          "76s",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "66",
          "65s",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "55",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "44",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "33",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o",
          "22"
        ]
      }
    },
    "BTN Open → BB 3bet → BTN": {
      "category": "Strategy / Defense / 3Bet / SB",
      "actions": {
        "4bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix Value": [
          "AQs",
          "KQs",
          "AQo",
          "JJ",
          "TT"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "QTs",
          "J9s",
          "T9s"
        ],
        "Call": [
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "KJs",
          "KQo",
          "QJs",
          "KJo",
          "JTs",
          "J8s",
          "T8s",
          "99",
          "98s",
          "97s",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "AJo",
          "QJo",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "SB First In": {
      "category": "Open Ranges",
      "actions": {
        "Value Open": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "KTs",
          "K9s",
          "K8s",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "QTs",
          "Q9s",
          "AJo",
          "KJo",
          "QJo",
          "JJ",
          "JTs",
          "J9s",
          "ATo",
          "JTo",
          "TT",
          "T9s",
          "T8s",
          "99",
          "98s",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "55"
        ],
        "Mix Open": [],
        "Fold": [
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "KTo",
          "QTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "65s",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "44",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "33",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o",
          "22"
        ]
      }
    },
    "BTN Open → SB": {
      "category": "Strategy / Defense / 3Bet / SB",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AQs",
          "AKo",
          "KK",
          "AQo",
          "QQ",
          "JJ",
          "TT"
        ],
        "Mix Value": [
          "AJs",
          "ATs",
          "KQs",
          "KJs",
          "KQo",
          "QJs",
          "AJo",
          "JTs",
          "99",
          "88",
          "77"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "K9s",
          "QTs",
          "Q9s",
          "J9s",
          "T9s",
          "98s",
          "87s",
          "76s",
          "65s"
        ],
        "Call": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K8s",
          "K7s",
          "Q8s",
          "J8s",
          "T8s",
          "66",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "UTG Open": {
      "category": "Open Ranges",
      "actions": {
        "Open": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "AJo",
          "JJ",
          "JTs",
          "TT",
          "99",
          "88",
          "77"
        ],
        "Fold": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J9s",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T8s",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "66",
          "65s",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "55",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "44",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "33",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o",
          "22"
        ],
        "Mix Open": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "QTs",
          "T9s",
          "98s",
          "87s",
          "76s"
        ]
      }
    },
    "BTN Open": {
      "category": "Open Ranges",
      "actions": {
        "Fold": [
          "Q4s",
          "Q3s",
          "Q2s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "K9o",
          "Q9o",
          "J9o",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ],
        "Value Open": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "Q7s",
          "Q6s",
          "Q5s",
          "AJo",
          "KJo",
          "QJo",
          "JJ",
          "JTs",
          "J7s",
          "ATo",
          "TT",
          "T7s",
          "99",
          "88",
          "77",
          "66",
          "55",
          "44",
          "33",
          "22"
        ],
        "Mix Open": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "K9s",
          "K8s",
          "QTs",
          "Q9s",
          "Q8s",
          "J9s",
          "J8s",
          "KTo",
          "QTo",
          "JTo",
          "T9s",
          "T8s",
          "A9o",
          "T9o",
          "98s",
          "97s",
          "A8o",
          "98o",
          "87s",
          "86s",
          "76s",
          "75s",
          "65s",
          "64s",
          "54s"
        ]
      }
    }
  },
  "boardDictionary": [
    {
      "board": "A72r",
      "category": "Dry",
      "advantage": "PFR有利",
      "body": "Aハイ・レインボー。AA/AK/AQをPFRが多く持ち、CBしやすい。",
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "board": "K83r",
      "category": "Dry",
      "advantage": "PFR有利",
      "body": "Kハイ・非連結・レインボー。PFRのAK/KQ/KKが強く機能。",
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "board": "AJ5r",
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "body": "AとJが絡むがレインボー。PFRの強いAxとセットが多い。",
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "board": "QT9r",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "body": "高い連結ボード。PFRもCallerもKJ/QJ/JT/T9などが絡む。",
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "board": "JT8ss",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "body": "連結＋ツートーン。双方が強くヒットしやすい。",
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "board": "654r",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "低く連結。Callerの小ポケットやスーテッドコネクターが強い。",
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "board": "765ss",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "低中カード＋ツートーン。Caller側のドローとツーペアが多い。",
      "sharkTip": "765ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "board": "QQ2r",
      "category": "Paired",
      "advantage": "PFR有利",
      "body": "ペアボード。PFRの高いポケットやQxが活きやすい。",
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "board": "KK8r",
      "category": "Paired",
      "advantage": "PFR有利",
      "body": "Kペア。PFRの強いKxや高ポケットが有利。",
      "sharkTip": "KK8rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    }
  ],
  "terms": [
    {
      "term": "PFR",
      "body": "Pre Flop Raiser。プリフロップで最後にレイズした人。"
    },
    {
      "term": "Caller",
      "body": "プリフロップでコールして参加した側。低いカードやコネクターを多く含むことがある。"
    },
    {
      "term": "Dry",
      "body": "ドローが少ないボード。例：A72r、K83r。PFR有利になりやすい。"
    },
    {
      "term": "Semi Dry",
      "body": "少しだけ接続やドローがあるが、まだPFR有利になりやすいボード。例：AJ5r。"
    },
    {
      "term": "Wet",
      "body": "ストレートやフラッシュドローが多いボード。例：QT9r、JT8ss。"
    },
    {
      "term": "Low",
      "body": "低いカード中心のボード。Caller側の小ポケットやコネクターに強く当たりやすい。"
    },
    {
      "term": "Paired",
      "body": "同じランクが2枚あるボード。例：QQ2r。PFR側が有利になりやすい。"
    },
    {
      "term": "r / ss / m",
      "body": "rはRainbow、ssはTwo-tone、mはMonotone。A72rは3スート別、JT8ssは同スート2枚。"
    },
    {
      "term": "プレイアビリティ",
      "body": "フロップ以降でどれだけ戦いやすいか。スーテッド、連結、ポケットは高い。"
    },
    {
      "term": "ブロッカー",
      "body": "自分のカードが相手の強い役の組み合わせを減らすこと。A5sはAA/AK/AQを減らす。"
    },
    {
      "term": "スーテッドブロードウェイ",
      "body": "T以上のカード同士で同じスート。AKs, KQs, QJs, JTsなど。"
    },
    {
      "term": "Mix Open",
      "body": "OpenとFoldを混ぜるハンド。UTGのA5sなど、GTOでは開く頻度があるが、実戦では慣れるまで絞ってもよい。"
    },
    {
      "term": "Mix Bluffの考え方",
      "body": "Mix Bluffは強さ順ではなくアクション分類。基本はレイズ寄りだが、スポットによってコールやフォールドが混ざることもある。"
    },
    {
      "term": "レンジ整合性",
      "body": "後のアクションに出るハンドは、前段階のレンジにも必ず存在する必要がある。v6ではMix Openでこの矛盾を補正。"
    }
  ],
  "openChoices": [
    "Value Open",
    "Mix Open",
    "Fold"
  ]
};

let state = {
  mode: "preflop",
  order: [],
  index: 0,
  score: 0,
  total: 0,
  answered: false
};

const quizModes = ["preflop", "boardAdvantage"];
const refModes = ["rangeLibrary", "boardDictionary", "terms"];

function getQuestions(mode) {
  if (mode === "preflop") return DATA.preflopQuestions;
  if (mode === "boardAdvantage") return DATA.boardAdvantageQuestions;
  return DATA.preflopQuestions;
}
function modeTitle(mode) {
  return {
    preflop: "プリフロップ",
    boardAdvantage: "ボード有利不利",
    rangeLibrary: "レンジライブラリ",
    boardDictionary: "ボード辞典",
    terms: "用語集"
  }[mode] || mode;
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function startMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  if (refModes.includes(mode)) {
    renderReference(mode);
    return;
  }
  const qs = getQuestions(mode);
  state.order = shuffleArray([...Array(qs.length).keys()]);
  state.index = 0;
  state.score = 0;
  state.total = 0;
  state.answered = false;
  renderQuiz();
}
function currentList() { return getQuestions(state.mode); }
function currentQuestion() { return currentList()[state.order[state.index]]; }
function choicesFor(q) {
  if (q.type === "preflop") return DATA.preflopChoices;
  return DATA.boardAdvantageChoices;
}
function renderQuiz() {
  document.querySelector("#quizArea").style.display = "block";
  document.querySelector("#refArea").style.display = "none";
  const q = currentQuestion();
  const list = currentList();
  document.querySelector("#modeTitle").textContent = modeTitle(state.mode);
  document.querySelector("#progress").textContent = `${state.index + 1} / ${list.length}`;
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
  document.querySelector("#phase").textContent = modeTitle(state.mode);
  document.querySelector("#spot").textContent = q.spot || "-";
  document.querySelector("#hero").textContent = q.heroPosition || "-";
  document.querySelector("#hand").textContent = q.hand || "-";
  document.querySelector("#board").textContent = q.board || "-";
  document.querySelector("#feedback").innerHTML = "";
  document.querySelector("#explanation").innerHTML = "";
  document.querySelector("#nextBtn").disabled = true;
  state.answered = false;

  const box = document.querySelector("#choices");
  box.innerHTML = "";
  choicesFor(q).forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `<span>${idx + 1}</span>${choice}`;
    btn.onclick = () => answer(idx + 1, btn);
    box.appendChild(btn);
  });
}
function answer(num, clicked) {
  if (state.answered) return;
  const q = currentQuestion();
  const ok = num === q.answer;
  state.answered = true;
  state.total++;
  if (ok) state.score++;
  document.querySelectorAll(".choice").forEach((b, idx) => {
    b.disabled = true;
    if (idx + 1 === q.answer) b.classList.add("correct");
    if (b === clicked && !ok) b.classList.add("wrong");
  });
  document.querySelector("#feedback").innerHTML = ok ? "⭕ 正解！" : `❌ 不正解。正解は ${q.answer}. ${q.label}`;
  document.querySelector("#explanation").innerHTML = buildExplanation(q);
  document.querySelector("#nextBtn").disabled = false;
  document.querySelector("#nextBtn").textContent = state.index + 1 === currentList().length ? "もう一周する" : "次の問題へ";
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
}
function sharkBox(text) {
  return `<div class="shark-teacher"><div class="mini-shark">🦈</div><div><b>サメ先生</b><p>${text}</p></div></div>`;
}
function buildExplanation(q) {
  if (q.type === "preflop") {
    const practical = q.practicalLabel && q.practicalLabel !== q.label
      ? `<p class="hint"><b>実戦簡略化：</b>${q.practicalLabel}<br><b>頻度目安：</b>${q.frequencyHint || "-"}</p>`
      : `<p class="hint"><b>頻度目安：</b>${q.frequencyHint || "-"}</p>`;
    return `${sharkBox(q.sharkTip || "")}<h3>プリフロップ解説</h3><p>${q.explanation}</p>${practical}`;
  }
  return `${sharkBox(q.sharkTip || "")}<h3>ボード解説</h3><p>${q.explanation}</p><p class="hint"><b>分類：</b>${q.category}<br><b>有利不利：</b>${q.advantage}</p>`;
}
function next() {
  state.index++;
  if (state.index >= currentList().length) {
    state.order = shuffleArray([...Array(currentList().length).keys()]);
    state.index = 0;
  }
  renderQuiz();
}
function randomNext() {
  state.order = shuffleArray([...Array(currentList().length).keys()]);
  state.index = 0;
  state.score = 0;
  state.total = 0;
  state.answered = false;
  renderQuiz();
}
function resetSession() {
  state.index = 0;
  state.score = 0;
  state.total = 0;
  state.answered = false;
  state.order = shuffleArray([...Array(currentList().length).keys()]);
  renderQuiz();
}

function renderReference(mode) {
  document.querySelector("#quizArea").style.display = "none";
  document.querySelector("#refArea").style.display = "block";
  document.querySelector("#modeTitle").textContent = modeTitle(mode);
  document.querySelector("#progress").textContent = "-";
  document.querySelector("#score").textContent = "-";
  if (mode === "rangeLibrary") return renderRangeLibrary();
  if (mode === "boardDictionary") return renderBoardDictionary();
  if (mode === "terms") return renderTerms();
}
function renderRangeLibrary() {
  const area = document.querySelector("#refArea");
  const spots = Object.keys(DATA.rangeLibrary);
  area.innerHTML = `
    <section class="card ref-controls">
      <h2>📚 レンジライブラリ</h2>
      <p class="note">戦略表・SB戦略・オープンレンジを統合。v6ではMix Openを追加し、後続アクションとの整合性を補正しました。</p>
      <label>スポット<select id="refSpot"></select></label>
      <label>アクション<select id="refAction"></select></label>
      <div id="rangeGrid"></div>
    </section>
  `;
  const spotSel = document.querySelector("#refSpot");
  const actionSel = document.querySelector("#refAction");
  spots.forEach(s => spotSel.add(new Option(s, s)));
  function updateActions() {
    actionSel.innerHTML = "";
    Object.keys(DATA.rangeLibrary[spotSel.value].actions).forEach(a => actionSel.add(new Option(a, a)));
    updateGrid();
  }
  function updateGrid() {
    const keep = new Set(DATA.rangeLibrary[spotSel.value].actions[actionSel.value]);
    document.querySelector("#rangeGrid").innerHTML = makeRangeGrid(keep);
  }
  spotSel.onchange = updateActions;
  actionSel.onchange = updateGrid;
  updateActions();
}
function makeRangeGrid(keep) {
  return `<div class="range-grid">${DATA.matrix.flat().map(h => `<div class="cell ${keep.has(h) ? "keep" : "gray"}">${h}</div>`).join("")}</div><p class="note">色付き＝対象レンジ / グレー＝対象外</p>`;
}
function renderBoardDictionary() {
  const area = document.querySelector("#refArea");
  area.innerHTML = `
    <section class="card">
      <h2>📖 ボード辞典</h2>
      <div class="dictionary">
        ${DATA.boardDictionary.map(b => `
          <div class="dict-card">
            <h3>${b.board}</h3>
            <p><b>${b.category}</b> / ${b.advantage}</p>
            <p>${b.body}</p>
            ${sharkBox(b.sharkTip || "")}
          </div>
        `).join("")}
      </div>
    </section>
  `;
}
function renderTerms() {
  const area = document.querySelector("#refArea");
  area.innerHTML = `
    <section class="card">
      <h2>📘 用語集</h2>
      ${DATA.terms.map(t => `<div class="term"><h3>${t.term}</h3><p>${t.body}</p></div>`).join("")}
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mode-btn").forEach(btn => btn.onclick = () => startMode(btn.dataset.mode));
  document.querySelector("#nextBtn").onclick = next;
  document.querySelector("#shuffleBtn").onclick = randomNext;
  document.querySelector("#resetBtn").onclick = resetSession;
  startMode("preflop");
});
