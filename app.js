const DATA = {
  "version": "14.3-stable",
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
      "id": "PFO001",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "AA",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "UTGでもAAは当然オープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "AAは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO002",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "AQs",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "AQsはUTGの強いオープンレンジに入る。",
      "tags": [
        "open"
      ],
      "sharkTip": "AQsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO003",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "KQs",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "KQsはUTGからでも十分強い。",
      "tags": [
        "open"
      ],
      "sharkTip": "KQsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO004",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "A5s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "A5sはAブロッカーとホイール可能性があり、UTGでは混合。",
      "tags": [
        "open"
      ],
      "sharkTip": "A5sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO005",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "A4s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "A4sもAブロッカーを使えるが毎回ではない。",
      "tags": [
        "open"
      ],
      "sharkTip": "A4sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO006",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "KTs",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "KTsはプレイアビリティは高いがUTGでは境界。",
      "tags": [
        "open"
      ],
      "sharkTip": "KTsはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO007",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "76s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "76sはUTGではかなり境界寄り。",
      "tags": [
        "open"
      ],
      "sharkTip": "76sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO008",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "KJo",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "KJoはUTGでは支配されやすい。",
      "tags": [
        "open"
      ],
      "sharkTip": "KJoはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO009",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "QTo",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "QToはオフスートでUTGからは弱い。",
      "tags": [
        "open"
      ],
      "sharkTip": "QToはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO010",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "44",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "小さいポケットはUTGでは無理しない簡略レンジ。",
      "tags": [
        "open"
      ],
      "sharkTip": "44はこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO011",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTNでもAAは当然オープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "AAは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO012",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "KTsはBTNでは十分強い。K2sより強いためPure Open側。",
      "tags": [
        "open"
      ],
      "sharkTip": "KTsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO013",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "K2s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTNは広く開けるためK2sもオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "K2sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO014",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "Q5s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "Q5sはBTNならオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "Q5sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO015",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "54s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "54sはポジション有利とプレイアビリティでオープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "54sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO016",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "Q4s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "Q4sはBTNでも境界ハンド。",
      "tags": [
        "open"
      ],
      "sharkTip": "Q4sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO017",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "A5o",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "A5oはBTNで混合。相手次第で調整。",
      "tags": [
        "open"
      ],
      "sharkTip": "A5oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO018",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "K8o",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "K8oはBTNの境界オフスート。",
      "tags": [
        "open"
      ],
      "sharkTip": "K8oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO019",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "J8o",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "J8oはBTNの境界ハンド。",
      "tags": [
        "open"
      ],
      "sharkTip": "J8oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO020",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "72o",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "72oはBTNでも弱い。",
      "tags": [
        "open"
      ],
      "sharkTip": "72oはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO021",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "AA",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Raise",
      "practicalLabel": "Pure Raise",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "SB First InでもAAは当然オープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "AAは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO022",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A9s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Raise",
      "practicalLabel": "Pure Raise",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "A9sはSBから強く使える。",
      "tags": [
        "open"
      ],
      "sharkTip": "A9sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO023",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "KTs",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Raise",
      "practicalLabel": "Pure Raise",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "KTsはSB First Inでは強いオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "KTsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO024",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "77",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Raise",
      "practicalLabel": "Pure Raise",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "77はSBではオープン中心だが混合扱い。",
      "tags": [
        "open"
      ],
      "sharkTip": "77はオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO025",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "A5sはSBではBBにプレッシャーをかけられる。",
      "tags": [
        "open"
      ],
      "sharkTip": "A5sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO026",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "K2s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "K2sはSBでは境界だがオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "K2sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO027",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "65s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "65sはプレイアビリティがある境界ハンド。",
      "tags": [
        "open"
      ],
      "sharkTip": "65sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO028",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "K9o",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "K9oはSB First Inで相手次第。",
      "tags": [
        "open"
      ],
      "sharkTip": "K9oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO029",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "Q5o",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "Q5oはオフスートで弱くFold。",
      "tags": [
        "open"
      ],
      "sharkTip": "Q5oはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO030",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "72o",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "72oは最弱級でFold。",
      "tags": [
        "open"
      ],
      "sharkTip": "72oはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "OLDPF001",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF002",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KK",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF003",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QQ",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF004",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF005",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AKo",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF006",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "JJ",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF007",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "TT",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF008",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF009",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQo",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF010",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF011",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF012",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A4s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF013",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A2s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF014",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF015",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF016",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "88",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF017",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AJs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF018",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF019",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "76s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF020",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KJo",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF021",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QTo",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF022",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AA",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF023",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF024",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AQo",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF025",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF026",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KQs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF027",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF028",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF029",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF030",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "QTs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF031",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF032",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "55",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF033",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "Q8s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF034",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "T8s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF035",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A9o",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF036",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "K4o",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF037",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "T5o",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF038",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "QQ",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF039",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AKs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF040",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF041",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AQs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF042",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF043",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF044",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF045",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF046",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF047",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "K9o",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF048",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "54o",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF049",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 4bet",
      "practicalLabel": "Pure 4bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF050",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 4bet",
      "practicalLabel": "Pure 4bet",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF051",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF052",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF053",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF054",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
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
      "id": "OLDPF055",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF056",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
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
      "id": "OLDPF057",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A9o",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF058",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "K9s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
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
      "id": "OLDPF059",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "AA",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Raise",
      "practicalLabel": "Pure Raise",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "SB First InではValueは当然Open。",
      "tags": [
        "value",
        "sb"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Open"
    },
    {
      "id": "OLDPF060",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A9s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Raise",
      "practicalLabel": "Pure Raise",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "SB First InのMix Valueは基本Open頻度が高いという意味。Callではない。",
      "tags": [
        "mix-value",
        "sb"
      ],
      "sharkTip": "A9sは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Open"
    },
    {
      "id": "OLDPF061",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SBはBBを降ろす価値があり、A5sはOpen候補。",
      "tags": [
        "mix-bluff",
        "sb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Open"
    },
    {
      "id": "OLDPF062",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "KTo",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "KToはSBで攻撃的に使えるが、相手次第で調整。",
      "tags": [
        "mix-bluff",
        "sb"
      ],
      "sharkTip": "KToは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Open/Fold"
    },
    {
      "id": "OLDPF063",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "72o",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "72oは最弱級でFold。",
      "tags": [
        "fold",
        "sb"
      ],
      "sharkTip": "72oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF064",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "JJ",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure 3bet",
      "practicalLabel": "Pure 3bet",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTNの広いレンジに対してSBのJJはValue。",
      "tags": [
        "value",
        "btn-sb"
      ],
      "sharkTip": "JJは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF065",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "KJs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "KJsはBTNに対して戦えるが、OOPなのでMix。",
      "tags": [
        "mix-value",
        "btn-sb"
      ],
      "sharkTip": "KJsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF066",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "A5sはSBからの3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "btn-sb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF067",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "66",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "SBはコールしすぎ注意だが、66は一部Call候補。",
      "tags": [
        "call",
        "btn-sb"
      ],
      "sharkTip": "66はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call低頻度"
    },
    {
      "id": "OLDPF068",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "76s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SBはOOPなので76sはCallより3bet/Fold寄り。",
      "tags": [
        "mix-bluff",
        "btn-sb"
      ],
      "sharkTip": "76sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Foldでも可"
    },
    {
      "id": "OLDPF069",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "QTo",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "QToはOOPで支配されやすくFold。",
      "tags": [
        "fold",
        "btn-sb"
      ],
      "sharkTip": "QToはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF070",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "K4s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "K4sはSBで無理に守らない。",
      "tags": [
        "fold",
        "btn-sb"
      ],
      "sharkTip": "K4sはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "PFV11_101",
      "type": "preflop",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "A5s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN OpenでのA5sは「Pure Open」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A5sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_102",
      "type": "preflop",
      "spot": "UTG Open → BTN 3bet → UTG",
      "heroPosition": "UTG",
      "hand": "A5s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BTN 3bet → UTGでのA5sは「Mix 4bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A5sは3betに対する反撃候補。ブロッカーと前段階レンジの整合性が大事だよ。"
    },
    {
      "id": "PFV11_103",
      "type": "preflop",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "A4s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN OpenでのA4sは「Pure Open」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A4sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_104",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A4s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SB First InでのA4sは「Mix Raise」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A4sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_105",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A4s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BBでのA4sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A4sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_106",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A4s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → BBでのA4sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A4sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_107",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "A4s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → SBでのA4sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A4sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_108",
      "type": "preflop",
      "spot": "UTG Open → BTN 3bet → UTG",
      "heroPosition": "UTG",
      "hand": "A4s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BTN 3bet → UTGでのA4sは「Mix 4bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A4sは3betに対する反撃候補。ブロッカーと前段階レンジの整合性が大事だよ。"
    },
    {
      "id": "PFV11_109",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A4s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → BB 3bet → BTNでのA4sは「Mix 4bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A4sは3betに対する反撃候補。ブロッカーと前段階レンジの整合性が大事だよ。"
    },
    {
      "id": "PFV11_110",
      "type": "preflop",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "A3s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG OpenでのA3sは「Mix Open」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_111",
      "type": "preflop",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "A3s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN OpenでのA3sは「Pure Open」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_112",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A3s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SB First InでのA3sは「Mix Raise」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_113",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A3s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BTNでのA3sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_114",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A3s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BBでのA3sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_115",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A3s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → BBでのA3sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_116",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "A3s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → SBでのA3sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_117",
      "type": "preflop",
      "spot": "UTG Open → BTN 3bet → UTG",
      "heroPosition": "UTG",
      "hand": "A3s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BTN 3bet → UTGでのA3sは「Mix 4bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sは3betに対する反撃候補。ブロッカーと前段階レンジの整合性が大事だよ。"
    },
    {
      "id": "PFV11_118",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A3s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → BB 3bet → BTNでのA3sは「Mix 4bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A3sは3betに対する反撃候補。ブロッカーと前段階レンジの整合性が大事だよ。"
    },
    {
      "id": "PFV11_119",
      "type": "preflop",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "A2s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG OpenでのA2sは「Mix Open」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_120",
      "type": "preflop",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "A2s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN OpenでのA2sは「Pure Open」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_121",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A2s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SB First InでのA2sは「Mix Raise」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_122",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A2s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BBでのA2sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_123",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A2s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → BBでのA2sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_124",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "A2s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → SBでのA2sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_125",
      "type": "preflop",
      "spot": "UTG Open → BTN 3bet → UTG",
      "heroPosition": "UTG",
      "hand": "A2s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG Open → BTN 3bet → UTGでのA2sは「Mix 4bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sは3betに対する反撃候補。ブロッカーと前段階レンジの整合性が大事だよ。"
    },
    {
      "id": "PFV11_126",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A2s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 4bet",
      "practicalLabel": "Mix 4bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → BB 3bet → BTNでのA2sは「Mix 4bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "A2sは3betに対する反撃候補。ブロッカーと前段階レンジの整合性が大事だよ。"
    },
    {
      "id": "PFV11_127",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "KTs",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → SBでのKTsは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "KTsは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_128",
      "type": "preflop",
      "spot": "UTG Open → BTN 3bet → UTG",
      "heroPosition": "UTG",
      "hand": "KTs",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "UTG Open → BTN 3bet → UTGでのKTsは「Fold」。実戦でも無理せずFoldでOK。相手が極端に弱い時だけ例外を考える。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "KTsはこのスポットでは無理しない。Foldを選べるのも強さだよ。"
    },
    {
      "id": "PFV11_129",
      "type": "preflop",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "K9s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "UTG OpenでのK9sは「Fold」。実戦でも無理せずFoldでOK。相手が極端に弱い時だけ例外を考える。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sはこのスポットでは無理しない。Foldを選べるのも強さだよ。"
    },
    {
      "id": "PFV11_130",
      "type": "preflop",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "K9s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN OpenでのK9sは「Pure Open」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_131",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "K9s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SB First InでのK9sは「Mix Raise」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_132",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "K9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "UTG Open → BTNでのK9sは「Fold」。実戦でも無理せずFoldでOK。相手が極端に弱い時だけ例外を考える。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sはこのスポットでは無理しない。Foldを選べるのも強さだよ。"
    },
    {
      "id": "PFV11_133",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "K9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "UTG Open → BBでのK9sは「Fold」。実戦でも無理せずFoldでOK。相手が極端に弱い時だけ例外を考える。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sはこのスポットでは無理しない。Foldを選べるのも強さだよ。"
    },
    {
      "id": "PFV11_134",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "K9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → BBでのK9sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_135",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "K9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → SBでのK9sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_136",
      "type": "preflop",
      "spot": "UTG Open → BTN 3bet → UTG",
      "heroPosition": "UTG",
      "hand": "K9s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "UTG Open → BTN 3bet → UTGでのK9sは「Fold」。実戦でも無理せずFoldでOK。相手が極端に弱い時だけ例外を考える。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "K9sはこのスポットでは無理しない。Foldを選べるのも強さだよ。"
    },
    {
      "id": "PFV11_137",
      "type": "preflop",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "Q9s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG OpenでのQ9sは「Mix Open」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_138",
      "type": "preflop",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "Q9s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN OpenでのQ9sは「Pure Open」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_139",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "Q9s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SB First InでのQ9sは「Mix Raise」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_140",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "Q9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "UTG Open → BTNでのQ9sは「Pure Call」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはコールで実現率を取りにいくハンド。無理にレイズしすぎない。"
    },
    {
      "id": "PFV11_141",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "Q9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "UTG Open → BBでのQ9sは「Pure Call」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはコールで実現率を取りにいくハンド。無理にレイズしすぎない。"
    },
    {
      "id": "PFV11_142",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "Q9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN Open → BBでのQ9sは「Pure Call」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはコールで実現率を取りにいくハンド。無理にレイズしすぎない。"
    },
    {
      "id": "PFV11_143",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "Q9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix 3bet",
      "practicalLabel": "Mix 3bet",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "BTN Open → SBでのQ9sは「Mix 3bet」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sは3betレンジで考えるハンド。Valueかブラフかではなく頻度で覚えよう。"
    },
    {
      "id": "PFV11_144",
      "type": "preflop",
      "spot": "UTG Open → BTN 3bet → UTG",
      "heroPosition": "UTG",
      "hand": "Q9s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "UTG Open → BTN 3bet → UTGでのQ9sは「Fold」。実戦でも無理せずFoldでOK。相手が極端に弱い時だけ例外を考える。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはこのスポットでは無理しない。Foldを選べるのも強さだよ。"
    },
    {
      "id": "PFV11_145",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "Q9s",
      "choices": [
        "Pure 4bet",
        "Mix 4bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "GTO寄り: Fold",
      "explanation": "BTN Open → BB 3bet → BTNでのQ9sは「Fold」。実戦でも無理せずFoldでOK。相手が極端に弱い時だけ例外を考える。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "Q9sはこのスポットでは無理しない。Foldを選べるのも強さだよ。"
    },
    {
      "id": "PFV11_146",
      "type": "preflop",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "J9s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "UTG OpenでのJ9sは「Mix Open」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "J9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_147",
      "type": "preflop",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "J9s",
      "choices": [
        "Pure Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Pure Open",
      "practicalLabel": "Pure Open",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "BTN OpenでのJ9sは「Pure Open」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "J9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_148",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "J9s",
      "choices": [
        "Pure Raise",
        "Mix Raise",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Raise",
      "practicalLabel": "Mix Raise",
      "frequencyHint": "GTO寄り: Mix",
      "explanation": "SB First InでのJ9sは「Mix Raise」。GTOでは頻度を混ぜる境界。実戦では相手が弱ければ攻め寄り、強ければ控えめに。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "J9sはこのポジションで参加候補。位置と後ろの人数を意識しよう。"
    },
    {
      "id": "PFV11_149",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "J9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "UTG Open → BTNでのJ9sは「Pure Call」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "J9sはコールで実現率を取りにいくハンド。無理にレイズしすぎない。"
    },
    {
      "id": "PFV11_150",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "J9s",
      "choices": [
        "Pure 3bet",
        "Mix 3bet",
        "Pure Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Pure Call",
      "practicalLabel": "Pure Call",
      "frequencyHint": "GTO寄り: 高頻度",
      "explanation": "UTG Open → BBでのJ9sは「Pure Call」。実戦でも基本方針にしやすい。迷ったらこのアクションでOK。",
      "tags": [
        "v11",
        "spot-dependent"
      ],
      "sharkTip": "J9sはコールで実現率を取りにいくハンド。無理にレイズしすぎない。"
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
    },
    {
      "id": "BA045",
      "type": "board-advantage-v7",
      "spot": "BTN Open → BB Call",
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
      "explanation": "Kハイで非連結。BTNのKxと高カードが活きる。",
      "tags": [
        "dry",
        "PFR有利"
      ],
      "sharkTip": "K72rはドローが少ないボード。PFRの強い高カードが活きやすいよ。"
    },
    {
      "id": "BA046",
      "type": "board-advantage-v7",
      "spot": "BTN Open → BB Call",
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
      "explanation": "高いウェットボードでBTNもBBも強く絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QJ8rは双方が強くヒットしやすい。レンジ同士のぶつかりを意識しよう。"
    },
    {
      "id": "BA047",
      "type": "board-advantage-v7",
      "spot": "UTG Open → BTN Call",
      "board": "A93r",
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
      "explanation": "Aハイ・レインボーでUTGのAxが強い。",
      "tags": [
        "dry",
        "PFR有利"
      ],
      "sharkTip": "A93rはドローが少ないボード。PFRの強い高カードが活きやすいよ。"
    },
    {
      "id": "BA048",
      "type": "board-advantage-v7",
      "spot": "UTG Open → BB Call",
      "board": "554r",
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
        "PFR有利"
      ],
      "sharkTip": "554rはペアボード。PFRのレンジ優位が出やすい場面が多い。"
    },
    {
      "id": "BA049",
      "type": "board-advantage-v7",
      "spot": "SB First In → BB Call",
      "board": "986ss",
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
      "explanation": "連結＋ツートーンで双方に強いドローがある。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "986ssは双方が強くヒットしやすい。レンジ同士のぶつかりを意識しよう。"
    },
    {
      "id": "BA050",
      "type": "board-advantage-v7",
      "spot": "SB First In → BB Call",
      "board": "432r",
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
      "explanation": "低い連結ボードはBB側が強く絡みやすい。",
      "tags": [
        "low",
        "Caller有利"
      ],
      "sharkTip": "432rは低いカード中心。Callerのコネクターや小ポケットが強くなりやすい。"
    }
  ],
  "rangeLibrary": {
    "UTG Open": {
      "category": "Open",
      "actions": {
        "Pure Open": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "KTs",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "QTs",
          "AJo",
          "JJ",
          "JTs",
          "TT",
          "T9s",
          "99",
          "98s",
          "88",
          "77",
          "66"
        ],
        "Mix Open": [
          "A7s",
          "A6s",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "Q9s",
          "J9s",
          "87s",
          "76s",
          "65s",
          "55",
          "44"
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
    "BTN Open": {
      "category": "Open",
      "actions": {
        "Pure Open": [
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
          "K7s",
          "K6s",
          "K5s",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "QTs",
          "Q9s",
          "Q8s",
          "AJo",
          "KJo",
          "QJo",
          "JJ",
          "JTs",
          "J9s",
          "J8s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "TT",
          "T9s",
          "T8s",
          "A9o",
          "99",
          "98s",
          "A8o",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "54s",
          "44",
          "33",
          "22"
        ],
        "Mix Open": [
          "K4s",
          "K3s",
          "K2s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "K8o",
          "Q8o",
          "J8o",
          "98o",
          "86s",
          "A7o",
          "75s",
          "A6o",
          "64s",
          "A5o",
          "53s",
          "A4o",
          "43s",
          "A3o",
          "A2o"
        ],
        "Fold": [
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
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
          "52s",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "42s",
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
      "category": "Open",
      "actions": {
        "Pure Raise": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "KTs",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "QTs",
          "AJo",
          "JJ",
          "JTs",
          "TT",
          "99",
          "88",
          "77"
        ],
        "Mix Raise": [
          "A7s",
          "A6s",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
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
          "KJo",
          "QJo",
          "J9s",
          "J8s",
          "J7s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T9s",
          "T8s",
          "T7s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "98s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "87s",
          "A7o",
          "76s",
          "A6o",
          "66",
          "65s",
          "A5o",
          "55",
          "54s",
          "44",
          "33",
          "22"
        ],
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
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "86s",
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
          "75s",
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
          "64s",
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
    "UTG Open → BTN": {
      "category": "vs Open",
      "actions": {
        "Pure 3bet": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix 3bet": [
          "AQs",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KQs",
          "KTs",
          "AQo",
          "QTs",
          "JJ",
          "TT"
        ],
        "Pure Call": [
          "AJs",
          "ATs",
          "KJs",
          "QJs",
          "Q9s",
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
    "UTG Open → BB": {
      "category": "vs Open",
      "actions": {
        "Pure 3bet": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix 3bet": [
          "AQs",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KQs",
          "KTs",
          "AQo",
          "QTs",
          "JJ",
          "TT"
        ],
        "Pure Call": [
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "KJs",
          "KQo",
          "QJs",
          "Q9s",
          "KJo",
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
          "K9s",
          "K8s",
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
          "AJo",
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
      "category": "vs Open",
      "actions": {
        "Pure 3bet": [
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
        "Mix 3bet": [
          "AJs",
          "ATs",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KQs",
          "KJs",
          "KTs",
          "K9s",
          "KQo",
          "QJs",
          "QTs",
          "JTs",
          "J9s",
          "T9s",
          "99",
          "88",
          "76s",
          "65s",
          "54s"
        ],
        "Pure Call": [
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
          "K9o",
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
    "BTN Open → SB": {
      "category": "vs Open",
      "actions": {
        "Pure 3bet": [
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
        "Mix 3bet": [
          "AJs",
          "ATs",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KQs",
          "KJs",
          "KTs",
          "K9s",
          "KQo",
          "QJs",
          "QTs",
          "Q9s",
          "AJo",
          "JTs",
          "J9s",
          "T9s",
          "99",
          "98s",
          "88",
          "87s",
          "77",
          "76s",
          "65s"
        ],
        "Pure Call": [
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
    "UTG Open → BTN 3bet → UTG": {
      "category": "vs 3bet",
      "actions": {
        "Pure 4bet": [
          "AA",
          "AKs",
          "AKo",
          "KK"
        ],
        "Mix 4bet": [
          "AQs",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "QQ",
          "JJ"
        ],
        "Pure Call": [
          "AJs",
          "KQs",
          "KJs",
          "AQo",
          "QJs",
          "JTs",
          "TT",
          "99",
          "88"
        ],
        "Fold": [
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
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
      "category": "vs 3bet",
      "actions": {
        "Pure 4bet": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix 4bet": [
          "AQs",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KQs",
          "KTs",
          "AQo",
          "QTs",
          "JJ",
          "J9s",
          "TT",
          "T9s"
        ],
        "Pure Call": [
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
    },
    {
      "board": "K72r",
      "category": "Dry",
      "advantage": "PFR有利",
      "body": "Kハイ・非連結。PFRの高カードが活きやすい。",
      "sharkTip": "K72rはドローが少ないボード。PFRの強い高カードが活きやすいよ。"
    },
    {
      "board": "QJ8r",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "body": "高い連結ボード。双方のブロードウェイが強く絡む。",
      "sharkTip": "QJ8rは双方が強くヒットしやすい。レンジ同士のぶつかりを意識しよう。"
    },
    {
      "board": "Q83r",
      "category": "Dry",
      "advantage": "PFR有利",
      "body": "CB頻度: 高 / 推奨サイズ: 小さめCB",
      "sharkTip": "高カードDryは小さめCBの代表。"
    },
    {
      "board": "J74r",
      "category": "Dry",
      "advantage": "PFRやや有利",
      "body": "CB頻度: 中〜高 / 推奨サイズ: 小さめ〜中",
      "sharkTip": "Dry寄りだが中カードでCallerも少し絡む。"
    },
    {
      "board": "T62r",
      "category": "Dry",
      "advantage": "PFRやや有利",
      "body": "CB頻度: 中 / 推奨サイズ: 小さめCB",
      "sharkTip": "低めDryはPFR有利が少し弱まる。"
    },
    {
      "board": "KJ4r",
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "body": "CB頻度: 中〜高 / 推奨サイズ: 小〜中CB",
      "sharkTip": "高カード2枚でPFR有利だが接続もある。"
    },
    {
      "board": "QT4r",
      "category": "Semi Dry",
      "advantage": "ほぼ互角寄り",
      "body": "CB頻度: 中 / 推奨サイズ: 中CB/チェック混合",
      "sharkTip": "高カード連結で双方が絡む。"
    },
    {
      "board": "T84r",
      "category": "Semi Dry",
      "advantage": "ほぼ互角",
      "body": "CB頻度: 中 / 推奨サイズ: 中CB/チェック混合",
      "sharkTip": "中カードはCallerもヒットしやすい。"
    },
    {
      "board": "976r",
      "category": "Semi Dry",
      "advantage": "Caller有利寄り",
      "body": "CB頻度: 低〜中 / 推奨サイズ: チェック多め",
      "sharkTip": "中低連結はCallerのレンジに強く当たる。"
    },
    {
      "board": "JT9ss",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "body": "CB頻度: 低〜中 / 推奨サイズ: 大きめ/チェック混合",
      "sharkTip": "超ウェット。1ペアの価値が大きく下がる。"
    },
    {
      "board": "T98ss",
      "category": "Wet",
      "advantage": "Caller有利寄り",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "Callerのコネクターが強く当たりやすい。"
    },
    {
      "board": "987ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "低中連結ウェットはCaller有利の代表。"
    },
    {
      "board": "876ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "PFRは慎重に。Callerの強い役が多い。"
    },
    {
      "board": "653r",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "低ボードはCallerの小ポケットとSCが強い。"
    },
    {
      "board": "542r",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "低連結はCaller有利。A3にも注意。"
    },
    {
      "board": "432r",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "ホイール系が多く、PFRは慎重。"
    },
    {
      "board": "754r",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "CallerのSC・小ポケットが活きる。"
    },
    {
      "board": "864r",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "CB頻度: 低〜中 / 推奨サイズ: チェック多め",
      "sharkTip": "中低連結はCaller優位になりやすい。"
    },
    {
      "board": "KK4r",
      "category": "Paired",
      "advantage": "PFR有利",
      "body": "CB頻度: 高 / 推奨サイズ: 小さめCB",
      "sharkTip": "高ペアボードはPFRのレンジ優位。"
    },
    {
      "board": "772r",
      "category": "Paired",
      "advantage": "ほぼ互角",
      "body": "CB頻度: 中 / 推奨サイズ: 小CB/チェック混合",
      "sharkTip": "低ペアはPFR有利が弱まりやすい。"
    },
    {
      "board": "TT5r",
      "category": "Paired",
      "advantage": "PFR有利",
      "body": "CB頻度: 中〜高 / 推奨サイズ: 小さめCB",
      "sharkTip": "中高ペアはPFRが主導しやすい。"
    },
    {
      "board": "993r",
      "category": "Paired",
      "advantage": "ほぼ互角",
      "body": "CB頻度: 中 / 推奨サイズ: 小CB/チェック",
      "sharkTip": "中ペアは双方に絡むため過信しない。"
    },
    {
      "board": "A72m",
      "category": "Monotone",
      "advantage": "PFR有利",
      "body": "CB頻度: 中 / 推奨サイズ: 小CB/チェック混合",
      "sharkTip": "モノトーンはレンジ有利でも慎重。"
    },
    {
      "board": "K83m",
      "category": "Monotone",
      "advantage": "PFR有利",
      "body": "CB頻度: 中 / 推奨サイズ: 小CB/チェック混合",
      "sharkTip": "フラッシュ完成済みがあるためサイズ控えめ。"
    },
    {
      "board": "Q74m",
      "category": "Monotone",
      "advantage": "PFRやや有利",
      "body": "CB頻度: 中 / 推奨サイズ: 小CB/チェック",
      "sharkTip": "モノトーンはトップペアでも過信しない。"
    },
    {
      "board": "T86m",
      "category": "Monotone",
      "advantage": "ほぼ互角",
      "body": "CB頻度: 低〜中 / 推奨サイズ: チェック多め",
      "sharkTip": "モノトーン＋連結は慎重に。"
    },
    {
      "board": "987m",
      "category": "Monotone",
      "advantage": "Caller有利",
      "body": "CB頻度: 低 / 推奨サイズ: チェック多め",
      "sharkTip": "最も危険な部類。PFRは無理しない。"
    }
  ],
  "terms": [
    {
      "category": "基本",
      "term": "ハンド",
      "body": "自分に配られた2枚のカード。"
    },
    {
      "category": "基本",
      "term": "ボード",
      "body": "全員が共通で使える場のカード。"
    },
    {
      "category": "基本",
      "term": "ポット",
      "body": "勝った人が獲得するチップの合計。"
    },
    {
      "category": "基本",
      "term": "ショーダウン",
      "body": "最後まで残ったプレイヤーが手札を見せて勝敗を決めること。"
    },
    {
      "category": "ポジション",
      "term": "UTG",
      "body": "最初に行動するポジション。後ろに人が多いので慎重に参加する。"
    },
    {
      "category": "ポジション",
      "term": "CO",
      "body": "BTNの1つ前。かなり攻めやすいポジション。"
    },
    {
      "category": "ポジション",
      "term": "BTN",
      "body": "最も有利なポジション。"
    },
    {
      "category": "ポジション",
      "term": "SB",
      "body": "半額ブラインドを払う位置。"
    },
    {
      "category": "ポジション",
      "term": "BB",
      "body": "1BBを払う位置。"
    },
    {
      "category": "ハンド",
      "term": "スーテッド",
      "body": "2枚のカードが同じマーク。"
    },
    {
      "category": "ハンド",
      "term": "オフスート",
      "body": "2枚のカードが違うマーク。"
    },
    {
      "category": "ハンド",
      "term": "ポケットペア",
      "body": "最初からペアになっているハンド。"
    },
    {
      "category": "アクション",
      "term": "Open",
      "body": "誰も参加していない状態で最初にレイズすること。"
    },
    {
      "category": "アクション",
      "term": "Call",
      "body": "相手のベットやレイズに同じ額を出してついていくこと。"
    },
    {
      "category": "アクション",
      "term": "Fold",
      "body": "降りること。"
    },
    {
      "category": "アクション",
      "term": "Raise",
      "body": "相手のベットより大きく上乗せすること。"
    },
    {
      "category": "アクション",
      "term": "3bet",
      "body": "Openに対する再レイズ。"
    },
    {
      "category": "アクション",
      "term": "4bet",
      "body": "3betに対する再レイズ。"
    },
    {
      "category": "レンジ",
      "term": "レンジ",
      "body": "相手や自分が持ちうるハンド全体のこと。"
    },
    {
      "category": "レンジ",
      "term": "Pure",
      "body": "ほぼ毎回そのアクションを取るハンド。"
    },
    {
      "category": "レンジ",
      "term": "Mix",
      "body": "複数のアクションを混ぜるハンド。"
    },
    {
      "category": "レンジ",
      "term": "Value",
      "body": "強いからベット・レイズすること。"
    },
    {
      "category": "レンジ",
      "term": "Bluff",
      "body": "相手を降ろすためにベット・レイズすること。"
    },
    {
      "category": "レンジ",
      "term": "Blocker",
      "body": "相手の強いハンドの組み合わせを減らすカード。"
    },
    {
      "category": "ボード",
      "term": "Dry",
      "body": "ドローが少ないボード。"
    },
    {
      "category": "ボード",
      "term": "Wet",
      "body": "ドローや強い役が多いボード。"
    },
    {
      "category": "ボード",
      "term": "Rainbow",
      "body": "3枚のスートが全部違うフロップ。"
    },
    {
      "category": "ボード",
      "term": "Two-tone",
      "body": "同じスートが2枚あるフロップ。"
    },
    {
      "category": "ボード",
      "term": "Monotone",
      "body": "3枚すべて同じスートのフロップ。"
    },
    {
      "category": "確率",
      "term": "Outs",
      "body": "自分の役を完成させるカードの枚数。"
    },
    {
      "category": "確率",
      "term": "Pot Odds",
      "body": "コールに必要な勝率を考えるための考え方。"
    },
    {
      "category": "中級",
      "term": "プレイアビリティ",
      "body": "フロップ以降でどれだけ戦いやすいか。KQsやT9sのように、強いペア・ストレート・フラッシュを作りやすいハンドはプレイアビリティが高い。"
    },
    {
      "category": "中級",
      "term": "SDV",
      "body": "Showdown Value。ショーダウンまで行けば勝てる可能性がある価値。Aハイ、セカンドヒット、弱いポケットペアなどはSDVを持つことがある。"
    },
    {
      "category": "中級",
      "term": "Equity",
      "body": "現在の勝率。必要勝率やEVを考える前提になる。正確な数字より、まずは勝率帯で見積もるのが大事。"
    },
    {
      "category": "中級",
      "term": "Range Advantage",
      "body": "レンジ全体でどちらが強いか。PFR側が強いAやKを多く持つボードでは、レンジアドバンテージを取りやすい。"
    },
    {
      "category": "中級",
      "term": "Nut Advantage",
      "body": "ナッツ級の強い役をどちらが多く持てるか。低い連結ボードではCaller側がセットやストレートを多く持つことがある。"
    },
    {
      "category": "中級",
      "term": "Equity Realization",
      "body": "持っている勝率を実際に回収できる度合い。ポジションがあるBTNは勝率を実現しやすく、OOPは実現しにくい。"
    },
    {
      "category": "中級",
      "term": "Polarized",
      "body": "とても強いハンドとブラフに分かれたレンジ。大きいベットや4betでよく出てくる考え方。"
    },
    {
      "category": "中級",
      "term": "Capped Range",
      "body": "非常に強いハンドが少ないレンジ。強い役を持ちにくい相手には、プレッシャーをかけやすい。"
    }
  ],
  "openChoices": [
    "Pure Open",
    "Mix Open",
    "Fold"
  ],
  "reverseLookup": {
    "AA": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure 4bet"
      }
    ],
    "AKs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure 4bet"
      }
    ],
    "AQs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "AJs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "ATs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "A9s": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "A8s": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "A7s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "A6s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "A5s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "A4s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "A3s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "A2s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "AKo": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure 4bet"
      }
    ],
    "KK": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure 4bet"
      }
    ],
    "KQs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "KJs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "KTs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "K9s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K8s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K7s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K6s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K5s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K4s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K3s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K2s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "AQo": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "KQo": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "QQ": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure 4bet"
      }
    ],
    "QJs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "QTs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "Q9s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q8s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q7s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q6s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q5s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q4s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q3s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q2s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "AJo": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "KJo": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "QJo": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "JJ": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix 4bet"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "JTs": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "J9s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "J8s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "J7s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J6s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J5s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J4s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J3s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J2s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "ATo": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "KTo": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "QTo": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "JTo": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "TT": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "T9s": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix 4bet"
      }
    ],
    "T8s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "T7s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T6s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T5s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T4s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T3s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T2s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A9o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K9o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q9o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J9o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T9o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "99": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "98s": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "97s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "96s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "95s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "94s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "93s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "92s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A8o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K8o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q8o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J8o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T8o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "98o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "88": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "87s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "86s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "85s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "84s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "83s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "82s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A7o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K7o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q7o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J7o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T7o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "97o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "87o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "77": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Pure Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "76s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "75s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "74s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "73s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "72s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A6o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K6o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q6o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J6o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T6o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "96o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "86o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "76o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "66": [
      {
        "spot": "UTG Open",
        "action": "Pure Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "65s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix 3bet"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "64s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "63s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "62s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A5o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K5o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q5o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J5o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T5o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "95o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "85o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "75o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "65o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "55": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "54s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix 3bet"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "53s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "52s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A4o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K4o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q4o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J4o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T4o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "94o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "84o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "74o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "64o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "54o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "44": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "43s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "42s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A3o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K3o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q3o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J3o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T3o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "93o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "83o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "73o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "63o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "53o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "43o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "33": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ],
    "32s": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "A2o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "K2o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "Q2o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "J2o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "T2o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "92o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "82o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "72o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "62o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "52o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "42o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "32o": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Fold"
      },
      {
        "spot": "SB First In",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Fold"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Fold"
      }
    ],
    "22": [
      {
        "spot": "UTG Open",
        "action": "Fold"
      },
      {
        "spot": "BTN Open",
        "action": "Pure Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Raise"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Pure Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Pure Call"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Fold"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Pure Call"
      }
    ]
  },
  "beginner": {
    "positions": [
      {
        "name": "UTG",
        "body": "最初に行動するポジション。後ろに多くの相手がいるので一番タイト。"
      },
      {
        "name": "HJ",
        "body": "中盤ポジション。UTGより少し広く参加できる。"
      },
      {
        "name": "CO",
        "body": "BTNの1つ前。かなり攻めやすいポジション。"
      },
      {
        "name": "BTN",
        "body": "ポストフロップで最後に行動できる最強ポジション。"
      },
      {
        "name": "SB",
        "body": "半額ブラインドを払う位置。ポストフロップは不利になりやすい。"
      },
      {
        "name": "BB",
        "body": "1BBを払う位置。プリフロップでは最後に行動できる。"
      }
    ],
    "terms": [
      {
        "term": "Open",
        "body": "誰も参加していない状態で最初にレイズすること。"
      },
      {
        "term": "Call",
        "body": "相手のベットやレイズに同じ額を出してついていくこと。"
      },
      {
        "term": "Fold",
        "body": "勝負を降りること。損失を抑える大事なアクション。"
      },
      {
        "term": "3bet",
        "body": "Openに対する再レイズ。強い手やブラフで使う。"
      },
      {
        "term": "4bet",
        "body": "3betに対する再レイズ。かなり強いレンジになる。"
      },
      {
        "term": "Value",
        "body": "強いからベット・レイズすること。"
      },
      {
        "term": "Bluff",
        "body": "相手を降ろすためにベット・レイズすること。"
      }
    ],
    "hands": [
      "ロイヤルフラッシュ",
      "ストレートフラッシュ",
      "フォーカード",
      "フルハウス",
      "フラッシュ",
      "ストレート",
      "スリーカード",
      "ツーペア",
      "ワンペア",
      "ハイカード"
    ]
  },
  "sbOpenChoices": [
    "Pure Raise",
    "Mix Raise",
    "Fold"
  ],
  "auditLog": [
    "Step1 UTG Open: A9s-A8sをPure、A7s-A2sをMix、44-55をMixへ修正。OK",
    "Step2 BTN Open: KTs/K2s逆転を解消し、境界ハンドをMixへ整理。OK",
    "Step3 SB First In: Limp非採用のRaise/Fold抽象のままGTO寄りに拡張。OK",
    "Step4 vs Open: 防衛・3bet候補をGTO寄りに再調整。OK",
    "Step5 vs 3bet: 4bet候補を前段階Openレンジ内に統一。OK",
    "Step6 全スポット監査: 重複なし、ツリー整合性OK、既知問題解消。OK",
    "Step7 逆引き監査: 169ハンド×全スポット、Fold含む表示。OK",
    "Step8 問題同期: 問題の選択肢・正解をv9レンジに同期。OK"
  ],
  "boardGuide": [
    {
      "id": "FG001",
      "board": "A72r",
      "category": "Dry",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB 25〜33%",
      "hitStrategy": {
        "topHit": "Aヒットはかなり強い。ただし勝負が大きくなるほどキッカー差が重要。AK/AQは強く、弱いAは慎重に。",
        "secondHit": "7ヒットは中程度。相手のAヒットには負けるため、大きなポットよりショーダウンを意識。",
        "bottomHit": "2ヒットは最低限のSDV。強く主張するより、安くショーダウンできるかを見る。",
        "noHit": "Aを表現できる立場なら小さなベットで降ろせる場面もある。無理な多額ブラフは不要。"
      },
      "drawStrategy": "主なドローは少ない。バックドアを意識。",
      "dangerTurns": "K/Q/J/Tなど高カードはキッカー差や2ペアを増やす。8/9/Tはランナーのストレート要素にも注意。",
      "sharkSummary": "AハイDryはPFR有利。小さく広くCBしやすい。",
      "overpairStrategy": "存在しない。Aがボード最高カードなので、ボードより上のポケットペアは作れない。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "AハイでPFR側が強いAを多く持ちやすい。ドローが少ないほどトップペアの価値が高い。",
      "topHitStrategy": "Aヒットはかなり強い。ただし勝負が大きくなるほどキッカー差が重要。AK/AQは強く、弱いAは慎重に。",
      "secondHitStrategy": "7ヒットは中程度。相手のAヒットには負けるため、大きなポットよりショーダウンを意識。",
      "bottomHitStrategy": "2ヒットは最低限のSDV。強く主張するより、安くショーダウンできるかを見る。",
      "noHitStrategy": "Aを表現できる立場なら小さなベットで降ろせる場面もある。無理な多額ブラフは不要。",
      "commonThreats": "AK/AQなど強いA、セット、A7/A2系ツーペア。",
      "attentionTurns": "K/Q/J/Tなど高カードはキッカー差や2ペアを増やす。8/9/Tはランナーのストレート要素にも注意。",
      "sharkComment": "Aハイボードはキッカー勝負だぞ。Aが当たっただけで安心しすぎないように。"
    },
    {
      "id": "FG002",
      "board": "K72r",
      "category": "Dry",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB 25〜33%",
      "hitStrategy": {
        "topHit": "Kヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "7ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "2ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "ドローは少ない。バックドア中心。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "KハイDryはPFRが主導権を取りやすい。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Kヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "7ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "2ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG003",
      "board": "Q83r",
      "category": "Dry",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Qヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "8ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "3ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "ほぼバックドア中心。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "高カードDryは小さめCBの代表。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Qヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "8ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "3ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG004",
      "board": "J74r",
      "category": "Dry",
      "advantage": "PFRやや有利",
      "cbFrequency": "中〜高",
      "recommendedSize": "小さめ〜中",
      "hitStrategy": {
        "topHit": "Jヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "7ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "T9/98に少し接続あり。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "Dry寄りだが中カードでCallerも少し絡む。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Jヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "7ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG005",
      "board": "T62r",
      "category": "Dry",
      "advantage": "PFRやや有利",
      "cbFrequency": "中",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Tヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "6ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "2ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "ストレートドロー少なめ。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "低めDryはPFR有利が少し弱まる。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Tヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "6ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "2ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG006",
      "board": "AJ5r",
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小〜中CB",
      "hitStrategy": {
        "topHit": "Aヒットはかなり強い。ただし勝負が大きくなるほどキッカー差が重要。AK/AQは強く、弱いAは慎重に。",
        "secondHit": "Jヒットは中程度。相手のAヒットには負けるため、大きなポットよりショーダウンを意識。",
        "bottomHit": "5ヒットは最低限のSDV。強く主張するより、安くショーダウンできるかを見る。",
        "noHit": "Aを表現できる立場なら小さなベットで降ろせる場面もある。無理な多額ブラフは不要。"
      },
      "drawStrategy": "ガットが少し存在。",
      "dangerTurns": "K/Q/J/Tなど高カードはキッカー差や2ペアを増やす。8/9/Tはランナーのストレート要素にも注意。",
      "sharkSummary": "AとJでPFRの強いレンジが活きる。",
      "overpairStrategy": "存在しない。Aがボード最高カードなので、ボードより上のポケットペアは作れない。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "AハイでPFR側が強いAを多く持ちやすい。ドローが少ないほどトップペアの価値が高い。",
      "topHitStrategy": "Aヒットはかなり強い。ただし勝負が大きくなるほどキッカー差が重要。AK/AQは強く、弱いAは慎重に。",
      "secondHitStrategy": "Jヒットは中程度。相手のAヒットには負けるため、大きなポットよりショーダウンを意識。",
      "bottomHitStrategy": "5ヒットは最低限のSDV。強く主張するより、安くショーダウンできるかを見る。",
      "noHitStrategy": "Aを表現できる立場なら小さなベットで降ろせる場面もある。無理な多額ブラフは不要。",
      "commonThreats": "AK/AQなど強いA、セット、A7/A2系ツーペア。",
      "attentionTurns": "K/Q/J/Tなど高カードはキッカー差や2ペアを増やす。8/9/Tはランナーのストレート要素にも注意。",
      "sharkComment": "Aハイボードはキッカー勝負だぞ。Aが当たっただけで安心しすぎないように。"
    },
    {
      "id": "FG007",
      "board": "KJ4r",
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "cbFrequency": "中〜高",
      "recommendedSize": "小〜中CB",
      "hitStrategy": {
        "topHit": "Kヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "Jヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "ガットやバックドアあり。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "高カード2枚でPFR有利だが接続もある。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Kヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "Jヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG008",
      "board": "QT4r",
      "category": "Semi Dry",
      "advantage": "ほぼ互角寄り",
      "cbFrequency": "中",
      "recommendedSize": "中CB/チェック混合",
      "hitStrategy": {
        "topHit": "Qヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "Tヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "OESD/ガットが多め。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "高カード連結で双方が絡む。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Qヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "Tヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG009",
      "board": "T84r",
      "category": "Semi Dry",
      "advantage": "ほぼ互角",
      "cbFrequency": "中",
      "recommendedSize": "中CB/チェック混合",
      "hitStrategy": {
        "topHit": "Tヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "8ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "97/J9/76などが絡む。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "中カードはCallerもヒットしやすい。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Tヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "8ヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "4ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG010",
      "board": "976r",
      "category": "Semi Dry",
      "advantage": "Caller有利寄り",
      "cbFrequency": "低〜中",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "9ヒットは中程度。トップペアではあるが、オーバーペアに負けることが多い。",
        "secondHit": "7ヒットは弱めのSDV。相手も空振りが多いが、強く打たれたら慎重。",
        "bottomHit": "6ヒットはかなり薄いSDV。安くショーダウンできる時だけ価値がある。",
        "noHit": "高カード2枚ならまだエクイティが残る。PFR側なら小さく打つ選択肢もある。"
      },
      "drawStrategy": "T8/85/98など多数。",
      "dangerTurns": "A/K/Q/J/Tはオーバーカードとして状況を変える。ストレート完成カードにも注意。",
      "sharkSummary": "中低連結はCallerのレンジに強く当たる。",
      "overpairStrategy": "最強候補。相手のワンペアを大きく上回る。ただしセットだけは常に警戒。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "低いカード中心のボード。オーバーペアが非常に強く、トップヒットは見た目ほど強くない。",
      "topHitStrategy": "9ヒットは中程度。トップペアではあるが、オーバーペアに負けることが多い。",
      "secondHitStrategy": "7ヒットは弱めのSDV。相手も空振りが多いが、強く打たれたら慎重。",
      "bottomHitStrategy": "6ヒットはかなり薄いSDV。安くショーダウンできる時だけ価値がある。",
      "noHitStrategy": "高カード2枚ならまだエクイティが残る。PFR側なら小さく打つ選択肢もある。",
      "commonThreats": "セット、オーバーペア、ターン以降の高カード。",
      "attentionTurns": "A/K/Q/J/Tはオーバーカードとして状況を変える。ストレート完成カードにも注意。",
      "sharkComment": "ローボードはオーバーペアが輝く。逆に低いトップペアは過信しないこと。"
    },
    {
      "id": "FG011",
      "board": "JT9ss",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "cbFrequency": "低〜中",
      "recommendedSize": "大きめ/チェック混合",
      "hitStrategy": {
        "topHit": "Jヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
        "secondHit": "Tヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
        "bottomHit": "9ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
        "noHit": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。"
      },
      "drawStrategy": "FD/OESD/コンボドロー多数。",
      "dangerTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkSummary": "超ウェット。1ペアの価値が大きく下がる。",
      "overpairStrategy": "かなり強い。相手のトップヒットにも勝っているため、バリュー候補。ただしセットには注意。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "高カードのドライボード。PFRが主導権を取りやすく、ワンペアの価値が比較的高い。",
      "topHitStrategy": "Jヒットは十分強い。AK/KQのような強キッカーなら複数ストリートで価値を取りやすい。",
      "secondHitStrategy": "Tヒットはショーダウン価値中心。トップペアには負けるため、相手の強いベットには慎重。",
      "bottomHitStrategy": "9ヒットは薄いSDV。守備的に扱い、大きなポットは避ける。",
      "noHitStrategy": "PFR側なら小さなCBで降ろせる場面がある。相手が粘るなら無理しない。",
      "commonThreats": "セット、強キッカーのトップペア、上のオーバーペア。",
      "attentionTurns": "Aターンはレンジの形が大きく変わる。2枚目の高カードやペアカードにも注意。",
      "sharkComment": "ドライな高カードボードは基本に忠実に。強いキッカーほど価値を取りやすいぞ。"
    },
    {
      "id": "FG012",
      "board": "T98ss",
      "category": "Wet",
      "advantage": "Caller有利寄り",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "Tヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
        "secondHit": "9ヒットはドロー付きなら候補。単体では守備的に扱う。",
        "bottomHit": "8ヒットはかなり弱い。追加エクイティがなければ無理しない。",
        "noHit": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。"
      },
      "drawStrategy": "FD/OESD/コンボ多数。",
      "dangerTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkSummary": "Callerのコネクターが強く当たりやすい。",
      "overpairStrategy": "まだ強いが、価値は大きく低下。大きなポットでは相手の強ドロー・ツーペア・セットを強く意識。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ドローが大量にある危険なボード。ワンペアは強く見えても一気にまくられやすい。",
      "topHitStrategy": "Tヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
      "secondHitStrategy": "9ヒットはドロー付きなら候補。単体では守備的に扱う。",
      "bottomHitStrategy": "8ヒットはかなり弱い。追加エクイティがなければ無理しない。",
      "noHitStrategy": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。",
      "commonThreats": "セット、ツーペア、完成ストレート、フラッシュドロー、コンボドロー。",
      "attentionTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkComment": "超ウェットではワンペアを過信しない。勝っていても守り方が大事だぞ。"
    },
    {
      "id": "FG013",
      "board": "987ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "9ヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
        "secondHit": "8ヒットはドロー付きなら候補。単体では守備的に扱う。",
        "bottomHit": "7ヒットはかなり弱い。追加エクイティがなければ無理しない。",
        "noHit": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。"
      },
      "drawStrategy": "OESD/FD/2ペア/セット多数。",
      "dangerTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkSummary": "低中連結ウェットはCaller有利の代表。",
      "overpairStrategy": "まだ強いが、価値は大きく低下。大きなポットでは相手の強ドロー・ツーペア・セットを強く意識。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ドローが大量にある危険なボード。ワンペアは強く見えても一気にまくられやすい。",
      "topHitStrategy": "9ヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
      "secondHitStrategy": "8ヒットはドロー付きなら候補。単体では守備的に扱う。",
      "bottomHitStrategy": "7ヒットはかなり弱い。追加エクイティがなければ無理しない。",
      "noHitStrategy": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。",
      "commonThreats": "セット、ツーペア、完成ストレート、フラッシュドロー、コンボドロー。",
      "attentionTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkComment": "超ウェットではワンペアを過信しない。勝っていても守り方が大事だぞ。"
    },
    {
      "id": "FG014",
      "board": "876ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "8ヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
        "secondHit": "7ヒットはドロー付きなら候補。単体では守備的に扱う。",
        "bottomHit": "6ヒットはかなり弱い。追加エクイティがなければ無理しない。",
        "noHit": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。"
      },
      "drawStrategy": "ストレート・FD多数。",
      "dangerTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkSummary": "PFRは慎重に。Callerの強い役が多い。",
      "overpairStrategy": "まだ強いが、価値は大きく低下。大きなポットでは相手の強ドロー・ツーペア・セットを強く意識。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ドローが大量にある危険なボード。ワンペアは強く見えても一気にまくられやすい。",
      "topHitStrategy": "8ヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
      "secondHitStrategy": "7ヒットはドロー付きなら候補。単体では守備的に扱う。",
      "bottomHitStrategy": "6ヒットはかなり弱い。追加エクイティがなければ無理しない。",
      "noHitStrategy": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。",
      "commonThreats": "セット、ツーペア、完成ストレート、フラッシュドロー、コンボドロー。",
      "attentionTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkComment": "超ウェットではワンペアを過信しない。勝っていても守り方が大事だぞ。"
    },
    {
      "id": "FG015",
      "board": "765ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "7ヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
        "secondHit": "6ヒットはドロー付きなら候補。単体では守備的に扱う。",
        "bottomHit": "5ヒットはかなり弱い。追加エクイティがなければ無理しない。",
        "noHit": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。"
      },
      "drawStrategy": "FD/OESD/コンボ多数。",
      "dangerTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkSummary": "低連結ツートーンはCallerが非常に強い。",
      "overpairStrategy": "まだ強いが、価値は大きく低下。大きなポットでは相手の強ドロー・ツーペア・セットを強く意識。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ドローが大量にある危険なボード。ワンペアは強く見えても一気にまくられやすい。",
      "topHitStrategy": "7ヒットはかなり不安定。ドロー付きなら継続価値が上がるが、単体トップペアは慎重。",
      "secondHitStrategy": "6ヒットはドロー付きなら候補。単体では守備的に扱う。",
      "bottomHitStrategy": "5ヒットはかなり弱い。追加エクイティがなければ無理しない。",
      "noHitStrategy": "強いドローやブロッカーがないなら撤退寄り。無理なブラフは危険。",
      "commonThreats": "セット、ツーペア、完成ストレート、フラッシュドロー、コンボドロー。",
      "attentionTurns": "ほぼ全ての連結カードと同スート完成が要注意。特にJ/Q/7/6や同スートは大きく状況変化。",
      "sharkComment": "超ウェットではワンペアを過信しない。勝っていても守り方が大事だぞ。"
    },
    {
      "id": "FG016",
      "board": "653r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "6ヒットでも不安定。キッカーやドローの有無で価値が大きく変わる。",
        "secondHit": "5ヒットはドロー付きなら戦える。単体ならショーダウン価値中心。",
        "bottomHit": "3ヒットは脆い。ストレートやツーペアに巻き込まれやすい。",
        "noHit": "バックドアや強いドローがなければ無理しない。ブラフ頻度は選ぶ。"
      },
      "drawStrategy": "74/42/87など。",
      "dangerTurns": "J/T/9/8/7/6など連結カードはストレート完成を増やす。ペアカードもフルハウスに注意。",
      "sharkSummary": "低ボードはCallerの小ポケットとSCが強い。",
      "overpairStrategy": "強いが安心はできない。ワンペアなので、ターン以降で価値が大きく下がることがある。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "連結性が高く、セット・ツーペア・ストレートドローが多い。Caller側も強い役を持ちやすい。",
      "topHitStrategy": "6ヒットでも不安定。キッカーやドローの有無で価値が大きく変わる。",
      "secondHitStrategy": "5ヒットはドロー付きなら戦える。単体ならショーダウン価値中心。",
      "bottomHitStrategy": "3ヒットは脆い。ストレートやツーペアに巻き込まれやすい。",
      "noHitStrategy": "バックドアや強いドローがなければ無理しない。ブラフ頻度は選ぶ。",
      "commonThreats": "セット、ツーペア、ストレート、OESD、ガットショット。",
      "attentionTurns": "J/T/9/8/7/6など連結カードはストレート完成を増やす。ペアカードもフルハウスに注意。",
      "sharkComment": "連結ボードではトップペアだけで安心しない。相手の完成役を想像しよう。"
    },
    {
      "id": "FG017",
      "board": "542r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "5ヒットでも不安定。キッカーやドローの有無で価値が大きく変わる。",
        "secondHit": "4ヒットはドロー付きなら戦える。単体ならショーダウン価値中心。",
        "bottomHit": "2ヒットは脆い。ストレートやツーペアに巻き込まれやすい。",
        "noHit": "バックドアや強いドローがなければ無理しない。ブラフ頻度は選ぶ。"
      },
      "drawStrategy": "A3/63/76など。",
      "dangerTurns": "J/T/9/8/7/6など連結カードはストレート完成を増やす。ペアカードもフルハウスに注意。",
      "sharkSummary": "低連結はCaller有利。A3にも注意。",
      "overpairStrategy": "強いが安心はできない。ワンペアなので、ターン以降で価値が大きく下がることがある。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "連結性が高く、セット・ツーペア・ストレートドローが多い。Caller側も強い役を持ちやすい。",
      "topHitStrategy": "5ヒットでも不安定。キッカーやドローの有無で価値が大きく変わる。",
      "secondHitStrategy": "4ヒットはドロー付きなら戦える。単体ならショーダウン価値中心。",
      "bottomHitStrategy": "2ヒットは脆い。ストレートやツーペアに巻き込まれやすい。",
      "noHitStrategy": "バックドアや強いドローがなければ無理しない。ブラフ頻度は選ぶ。",
      "commonThreats": "セット、ツーペア、ストレート、OESD、ガットショット。",
      "attentionTurns": "J/T/9/8/7/6など連結カードはストレート完成を増やす。ペアカードもフルハウスに注意。",
      "sharkComment": "連結ボードではトップペアだけで安心しない。相手の完成役を想像しよう。"
    },
    {
      "id": "FG018",
      "board": "432r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "4ヒットでも不安定。キッカーやドローの有無で価値が大きく変わる。",
        "secondHit": "3ヒットはドロー付きなら戦える。単体ならショーダウン価値中心。",
        "bottomHit": "2ヒットは脆い。ストレートやツーペアに巻き込まれやすい。",
        "noHit": "バックドアや強いドローがなければ無理しない。ブラフ頻度は選ぶ。"
      },
      "drawStrategy": "A5/65/56など。",
      "dangerTurns": "J/T/9/8/7/6など連結カードはストレート完成を増やす。ペアカードもフルハウスに注意。",
      "sharkSummary": "ホイール系が多く、PFRは慎重。",
      "overpairStrategy": "強いが安心はできない。ワンペアなので、ターン以降で価値が大きく下がることがある。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "連結性が高く、セット・ツーペア・ストレートドローが多い。Caller側も強い役を持ちやすい。",
      "topHitStrategy": "4ヒットでも不安定。キッカーやドローの有無で価値が大きく変わる。",
      "secondHitStrategy": "3ヒットはドロー付きなら戦える。単体ならショーダウン価値中心。",
      "bottomHitStrategy": "2ヒットは脆い。ストレートやツーペアに巻き込まれやすい。",
      "noHitStrategy": "バックドアや強いドローがなければ無理しない。ブラフ頻度は選ぶ。",
      "commonThreats": "セット、ツーペア、ストレート、OESD、ガットショット。",
      "attentionTurns": "J/T/9/8/7/6など連結カードはストレート完成を増やす。ペアカードもフルハウスに注意。",
      "sharkComment": "連結ボードではトップペアだけで安心しない。相手の完成役を想像しよう。"
    },
    {
      "id": "FG019",
      "board": "754r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "7ヒットは中程度。トップペアではあるが、オーバーペアに負けることが多い。",
        "secondHit": "5ヒットは弱めのSDV。相手も空振りが多いが、強く打たれたら慎重。",
        "bottomHit": "4ヒットはかなり薄いSDV。安くショーダウンできる時だけ価値がある。",
        "noHit": "高カード2枚ならまだエクイティが残る。PFR側なら小さく打つ選択肢もある。"
      },
      "drawStrategy": "86/63/76など。",
      "dangerTurns": "A/K/Q/J/Tはオーバーカードとして状況を変える。ストレート完成カードにも注意。",
      "sharkSummary": "CallerのSC・小ポケットが活きる。",
      "overpairStrategy": "最強候補。相手のワンペアを大きく上回る。ただしセットだけは常に警戒。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "低いカード中心のボード。オーバーペアが非常に強く、トップヒットは見た目ほど強くない。",
      "topHitStrategy": "7ヒットは中程度。トップペアではあるが、オーバーペアに負けることが多い。",
      "secondHitStrategy": "5ヒットは弱めのSDV。相手も空振りが多いが、強く打たれたら慎重。",
      "bottomHitStrategy": "4ヒットはかなり薄いSDV。安くショーダウンできる時だけ価値がある。",
      "noHitStrategy": "高カード2枚ならまだエクイティが残る。PFR側なら小さく打つ選択肢もある。",
      "commonThreats": "セット、オーバーペア、ターン以降の高カード。",
      "attentionTurns": "A/K/Q/J/Tはオーバーカードとして状況を変える。ストレート完成カードにも注意。",
      "sharkComment": "ローボードはオーバーペアが輝く。逆に低いトップペアは過信しないこと。"
    },
    {
      "id": "FG020",
      "board": "864r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低〜中",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "8ヒットは中程度。トップペアではあるが、オーバーペアに負けることが多い。",
        "secondHit": "6ヒットは弱めのSDV。相手も空振りが多いが、強く打たれたら慎重。",
        "bottomHit": "4ヒットはかなり薄いSDV。安くショーダウンできる時だけ価値がある。",
        "noHit": "高カード2枚ならまだエクイティが残る。PFR側なら小さく打つ選択肢もある。"
      },
      "drawStrategy": "75/97/53など。",
      "dangerTurns": "A/K/Q/J/Tはオーバーカードとして状況を変える。ストレート完成カードにも注意。",
      "sharkSummary": "中低連結はCaller優位になりやすい。",
      "overpairStrategy": "最強候補。相手のワンペアを大きく上回る。ただしセットだけは常に警戒。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "低いカード中心のボード。オーバーペアが非常に強く、トップヒットは見た目ほど強くない。",
      "topHitStrategy": "8ヒットは中程度。トップペアではあるが、オーバーペアに負けることが多い。",
      "secondHitStrategy": "6ヒットは弱めのSDV。相手も空振りが多いが、強く打たれたら慎重。",
      "bottomHitStrategy": "4ヒットはかなり薄いSDV。安くショーダウンできる時だけ価値がある。",
      "noHitStrategy": "高カード2枚ならまだエクイティが残る。PFR側なら小さく打つ選択肢もある。",
      "commonThreats": "セット、オーバーペア、ターン以降の高カード。",
      "attentionTurns": "A/K/Q/J/Tはオーバーカードとして状況を変える。ストレート完成カードにも注意。",
      "sharkComment": "ローボードはオーバーペアが輝く。逆に低いトップペアは過信しないこと。"
    },
    {
      "id": "FG021",
      "board": "KK4r",
      "category": "Paired",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "K絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
        "secondHit": "4ヒットは相対的に弱め。ショーダウンできるかを重視。",
        "bottomHit": "4ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
        "noHit": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。"
      },
      "drawStrategy": "ドロー少ない。",
      "dangerTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkSummary": "高ペアボードはPFRのレンジ優位。",
      "overpairStrategy": "かなり強いが、トリップスやフルハウスには注意。小さめのベットで広く価値を取る場面も多い。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ペアボードは強い役の組み合わせが少なく、レンジ優位とキッカーが重要になる。",
      "topHitStrategy": "K絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
      "secondHitStrategy": "4ヒットは相対的に弱め。ショーダウンできるかを重視。",
      "bottomHitStrategy": "4ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
      "noHitStrategy": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。",
      "commonThreats": "トリップス、フルハウス、強いポケットペア。",
      "attentionTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkComment": "ペアボードは見た目よりシンプル。大きなポットになる時だけ強い役を警戒しよう。"
    },
    {
      "id": "FG022",
      "board": "QQ2r",
      "category": "Paired",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Q絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
        "secondHit": "2ヒットは相対的に弱め。ショーダウンできるかを重視。",
        "bottomHit": "2ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
        "noHit": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。"
      },
      "drawStrategy": "ドロー少ない。",
      "dangerTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkSummary": "ペアボードは小さく広くCBしやすい。",
      "overpairStrategy": "かなり強いが、トリップスやフルハウスには注意。小さめのベットで広く価値を取る場面も多い。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ペアボードは強い役の組み合わせが少なく、レンジ優位とキッカーが重要になる。",
      "topHitStrategy": "Q絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
      "secondHitStrategy": "2ヒットは相対的に弱め。ショーダウンできるかを重視。",
      "bottomHitStrategy": "2ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
      "noHitStrategy": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。",
      "commonThreats": "トリップス、フルハウス、強いポケットペア。",
      "attentionTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkComment": "ペアボードは見た目よりシンプル。大きなポットになる時だけ強い役を警戒しよう。"
    },
    {
      "id": "FG023",
      "board": "772r",
      "category": "Paired",
      "advantage": "ほぼ互角",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック混合",
      "hitStrategy": {
        "topHit": "7絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
        "secondHit": "2ヒットは相対的に弱め。ショーダウンできるかを重視。",
        "bottomHit": "2ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
        "noHit": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。"
      },
      "drawStrategy": "ドロー少ない。",
      "dangerTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkSummary": "低ペアはPFR有利が弱まりやすい。",
      "overpairStrategy": "かなり強いが、トリップスやフルハウスには注意。小さめのベットで広く価値を取る場面も多い。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ペアボードは強い役の組み合わせが少なく、レンジ優位とキッカーが重要になる。",
      "topHitStrategy": "7絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
      "secondHitStrategy": "2ヒットは相対的に弱め。ショーダウンできるかを重視。",
      "bottomHitStrategy": "2ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
      "noHitStrategy": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。",
      "commonThreats": "トリップス、フルハウス、強いポケットペア。",
      "attentionTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkComment": "ペアボードは見た目よりシンプル。大きなポットになる時だけ強い役を警戒しよう。"
    },
    {
      "id": "FG024",
      "board": "TT5r",
      "category": "Paired",
      "advantage": "PFR有利",
      "cbFrequency": "中〜高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "T絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
        "secondHit": "5ヒットは相対的に弱め。ショーダウンできるかを重視。",
        "bottomHit": "5ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
        "noHit": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。"
      },
      "drawStrategy": "ドロー少なめ。",
      "dangerTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkSummary": "中高ペアはPFRが主導しやすい。",
      "overpairStrategy": "かなり強いが、トリップスやフルハウスには注意。小さめのベットで広く価値を取る場面も多い。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ペアボードは強い役の組み合わせが少なく、レンジ優位とキッカーが重要になる。",
      "topHitStrategy": "T絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
      "secondHitStrategy": "5ヒットは相対的に弱め。ショーダウンできるかを重視。",
      "bottomHitStrategy": "5ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
      "noHitStrategy": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。",
      "commonThreats": "トリップス、フルハウス、強いポケットペア。",
      "attentionTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkComment": "ペアボードは見た目よりシンプル。大きなポットになる時だけ強い役を警戒しよう。"
    },
    {
      "id": "FG025",
      "board": "993r",
      "category": "Paired",
      "advantage": "ほぼ互角",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック",
      "hitStrategy": {
        "topHit": "9絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
        "secondHit": "3ヒットは相対的に弱め。ショーダウンできるかを重視。",
        "bottomHit": "3ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
        "noHit": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。"
      },
      "drawStrategy": "ドロー少なめ。",
      "dangerTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkSummary": "中ペアは双方に絡むため過信しない。",
      "overpairStrategy": "かなり強いが、トリップスやフルハウスには注意。小さめのベットで広く価値を取る場面も多い。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "ペアボードは強い役の組み合わせが少なく、レンジ優位とキッカーが重要になる。",
      "topHitStrategy": "9絡みのヒットはキッカーが重要。相手のトリップスや強いポケットを警戒。",
      "secondHitStrategy": "3ヒットは相対的に弱め。ショーダウンできるかを重視。",
      "bottomHitStrategy": "3ヒットはかなり弱いSDV。大きなベットには耐えにくい。",
      "noHitStrategy": "レンジで有利なら小さめベットが機能するが、相手のコール後は慎重。",
      "commonThreats": "トリップス、フルハウス、強いポケットペア。",
      "attentionTurns": "ボードペア追加、A/K/Qなど高カード、フラッシュ完成カードに注意。",
      "sharkComment": "ペアボードは見た目よりシンプル。大きなポットになる時だけ強い役を警戒しよう。"
    },
    {
      "id": "FG026",
      "board": "A72m",
      "category": "Monotone",
      "advantage": "PFR有利",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック混合",
      "hitStrategy": {
        "topHit": "Aヒットはかなり強い。ただし勝負が大きくなるほどキッカー差が重要。AK/AQは強く、弱いAは慎重に。",
        "secondHit": "7ヒットは中程度。相手のAヒットには負けるため、大きなポットよりショーダウンを意識。",
        "bottomHit": "2ヒットは最低限のSDV。強く主張するより、安くショーダウンできるかを見る。",
        "noHit": "Aを表現できる立場なら小さなベットで降ろせる場面もある。無理な多額ブラフは不要。"
      },
      "drawStrategy": "1枚フラッシュドローの価値が変化。",
      "dangerTurns": "K/Q/J/Tなど高カードはキッカー差や2ペアを増やす。8/9/Tはランナーのストレート要素にも注意。",
      "sharkSummary": "モノトーンはレンジ有利でも慎重。",
      "overpairStrategy": "存在しない。Aがボード最高カードなので、ボードより上のポケットペアは作れない。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "AハイでPFR側が強いAを多く持ちやすい。ドローが少ないほどトップペアの価値が高い。",
      "topHitStrategy": "Aヒットはかなり強い。ただし勝負が大きくなるほどキッカー差が重要。AK/AQは強く、弱いAは慎重に。",
      "secondHitStrategy": "7ヒットは中程度。相手のAヒットには負けるため、大きなポットよりショーダウンを意識。",
      "bottomHitStrategy": "2ヒットは最低限のSDV。強く主張するより、安くショーダウンできるかを見る。",
      "noHitStrategy": "Aを表現できる立場なら小さなベットで降ろせる場面もある。無理な多額ブラフは不要。",
      "commonThreats": "AK/AQなど強いA、セット、A7/A2系ツーペア。",
      "attentionTurns": "K/Q/J/Tなど高カードはキッカー差や2ペアを増やす。8/9/Tはランナーのストレート要素にも注意。",
      "sharkComment": "Aハイボードはキッカー勝負だぞ。Aが当たっただけで安心しすぎないように。"
    },
    {
      "id": "FG027",
      "board": "K83m",
      "category": "Monotone",
      "advantage": "PFR有利",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック混合",
      "hitStrategy": {
        "topHit": "Kヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
        "secondHit": "8ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
        "bottomHit": "3ヒットはかなり弱い。基本は守備的。",
        "noHit": "高い同スートカードがないなら無理しない。ブラフは慎重に。"
      },
      "drawStrategy": "同スートA/Qが重要。",
      "dangerTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkSummary": "フラッシュ完成済みがあるためサイズ控えめ。",
      "overpairStrategy": "スートなしのオーバーペアは見た目より弱い。高い同スートカードがあると価値が上がる。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "すでにフラッシュが存在する特殊ボード。スートを持っているかどうかで価値が大きく変わる。",
      "topHitStrategy": "Kヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
      "secondHitStrategy": "8ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
      "bottomHitStrategy": "3ヒットはかなり弱い。基本は守備的。",
      "noHitStrategy": "高い同スートカードがないなら無理しない。ブラフは慎重に。",
      "commonThreats": "完成フラッシュ、1枚高スート、セット、ツーペア。",
      "attentionTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkComment": "モノトーンはスートが命。ペアの強さだけで判断しないこと。"
    },
    {
      "id": "FG028",
      "board": "Q74m",
      "category": "Monotone",
      "advantage": "PFRやや有利",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック",
      "hitStrategy": {
        "topHit": "Qヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
        "secondHit": "7ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
        "bottomHit": "4ヒットはかなり弱い。基本は守備的。",
        "noHit": "高い同スートカードがないなら無理しない。ブラフは慎重に。"
      },
      "drawStrategy": "1枚高スートが重要。",
      "dangerTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkSummary": "モノトーンはトップペアでも過信しない。",
      "overpairStrategy": "スートなしのオーバーペアは見た目より弱い。高い同スートカードがあると価値が上がる。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "すでにフラッシュが存在する特殊ボード。スートを持っているかどうかで価値が大きく変わる。",
      "topHitStrategy": "Qヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
      "secondHitStrategy": "7ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
      "bottomHitStrategy": "4ヒットはかなり弱い。基本は守備的。",
      "noHitStrategy": "高い同スートカードがないなら無理しない。ブラフは慎重に。",
      "commonThreats": "完成フラッシュ、1枚高スート、セット、ツーペア。",
      "attentionTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkComment": "モノトーンはスートが命。ペアの強さだけで判断しないこと。"
    },
    {
      "id": "FG029",
      "board": "T86m",
      "category": "Monotone",
      "advantage": "ほぼ互角",
      "cbFrequency": "低〜中",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "Tヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
        "secondHit": "8ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
        "bottomHit": "6ヒットはかなり弱い。基本は守備的。",
        "noHit": "高い同スートカードがないなら無理しない。ブラフは慎重に。"
      },
      "drawStrategy": "フラッシュ＋ストレート要素。",
      "dangerTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkSummary": "モノトーン＋連結は慎重に。",
      "overpairStrategy": "スートなしのオーバーペアは見た目より弱い。高い同スートカードがあると価値が上がる。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "すでにフラッシュが存在する特殊ボード。スートを持っているかどうかで価値が大きく変わる。",
      "topHitStrategy": "Tヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
      "secondHitStrategy": "8ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
      "bottomHitStrategy": "6ヒットはかなり弱い。基本は守備的。",
      "noHitStrategy": "高い同スートカードがないなら無理しない。ブラフは慎重に。",
      "commonThreats": "完成フラッシュ、1枚高スート、セット、ツーペア。",
      "attentionTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkComment": "モノトーンはスートが命。ペアの強さだけで判断しないこと。"
    },
    {
      "id": "FG030",
      "board": "987m",
      "category": "Monotone",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "9ヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
        "secondHit": "8ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
        "bottomHit": "7ヒットはかなり弱い。基本は守備的。",
        "noHit": "高い同スートカードがないなら無理しない。ブラフは慎重に。"
      },
      "drawStrategy": "フラッシュ・ストレート多数。",
      "dangerTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkSummary": "最も危険な部類。PFRは無理しない。",
      "overpairStrategy": "スートなしのオーバーペアは見た目より弱い。高い同スートカードがあると価値が上がる。",
      "dangerTurnsLabel": "ターンに落ちたら要注意のカード",
      "boardTheme": "すでにフラッシュが存在する特殊ボード。スートを持っているかどうかで価値が大きく変わる。",
      "topHitStrategy": "9ヒットでもフラッシュに負ける可能性がある。トップペア単体では慎重。",
      "secondHitStrategy": "8ヒットは弱め。強い同スートカードやドローがある時だけ価値が上がる。",
      "bottomHitStrategy": "7ヒットはかなり弱い。基本は守備的。",
      "noHitStrategy": "高い同スートカードがないなら無理しない。ブラフは慎重に。",
      "commonThreats": "完成フラッシュ、1枚高スート、セット、ツーペア。",
      "attentionTurns": "4枚目の同スート、ボードペア、高カードが要注意。",
      "sharkComment": "モノトーンはスートが命。ペアの強さだけで判断しないこと。"
    }
  ],
  "rankMilestones": [
    {
      "streak": 5,
      "rank": "Shark Cadet",
      "icon": "🦈✨",
      "message": "5連続正解！見習いサメ誕生！"
    },
    {
      "streak": 10,
      "rank": "Range Hunter",
      "icon": "🦈🏆",
      "message": "10連続正解！レンジハンター！"
    },
    {
      "streak": 20,
      "rank": "GTO Shark",
      "icon": "🦈👑",
      "message": "20連続正解！GTO Shark！"
    },
    {
      "streak": 30,
      "rank": "Solver Slayer",
      "icon": "🦈⚡",
      "message": "30連続正解！Solver Slayer！"
    },
    {
      "streak": 50,
      "rank": "Elite Grinder",
      "icon": "🦈🔥",
      "message": "50連続正解！Elite Grinder！"
    }
  ],
  "sharkQuotes": [
    "暗記より理解だ！",
    "A5sはトップペアで勝つハンドじゃないぞ！",
    "レンジが分かれば、CBも分かる！",
    "BTNは広く、UTGは慎重に。",
    "Foldも立派な戦略だ！"
  ],
  "surpriseQuiz": [
    {
      "id": "SQ001",
      "handA": "A♠K♠",
      "handB": "8♣8♦",
      "answer": "handB",
      "winnerLabel": "8♣8♦",
      "equityA": 46,
      "equityB": 54,
      "praise": "すごい！この問題を当てられるのはかなりセンスがあるぞ！",
      "explanation": "AKsは人気のハンドだけど、まだ役は完成していない。88は最初からワンペアなので少し有利。ポケットペアは思ったより強いんだ！"
    },
    {
      "id": "SQ002",
      "handA": "A♠A♥",
      "handB": "7♣2♦",
      "answer": "handA",
      "winnerLabel": "A♠A♥",
      "equityA": 88,
      "equityB": 12,
      "praise": "ナイス！まずは最強ハンドをしっかり見抜けたね！",
      "explanation": "AAは最強スタートハンド。でも72oも約12%は勝つ。つまり8回に1回くらいはAAが負ける。ポーカーに絶対はないんだ！"
    },
    {
      "id": "SQ003",
      "handA": "A♠K♠",
      "handB": "J♣J♦",
      "answer": "handB",
      "winnerLabel": "J♣J♦",
      "equityA": 46,
      "equityB": 54,
      "praise": "いいぞ！この接戦を見抜けたら初心者卒業に近い！",
      "explanation": "AKsは強そうに見えるけど、JJはすでにペア。実はかなり接戦で、こういう勝負をコインフリップと呼ぶこともあるよ。"
    },
    {
      "id": "SQ004",
      "handA": "A♠5♠",
      "handB": "K♠Q♠",
      "answer": "handB",
      "winnerLabel": "K♠Q♠",
      "equityA": 42,
      "equityB": 58,
      "praise": "おおっ！Aがあるだけで判断しないのはかなり鋭い！",
      "explanation": "A5sは面白いハンドだけど、KQsは高いカードが2枚あり、ストレートもフラッシュも狙える。Aが入っているだけで必ず強いわけじゃないんだ。"
    },
    {
      "id": "SQ005",
      "handA": "A♠K♦",
      "handB": "T♠9♠",
      "answer": "handA",
      "winnerLabel": "A♠K♦",
      "equityA": 60,
      "equityB": 40,
      "praise": "正解！でもT9sが意外と戦えることにも気づけたら最高！",
      "explanation": "AKoが有利。ただしT9sもストレートやフラッシュを作れるので約40%は戦える。スーテッドコネクターは見た目以上にしぶとい。"
    },
    {
      "id": "SQ006",
      "handA": "A♠J♠",
      "handB": "5♣5♦",
      "answer": "handB",
      "winnerLabel": "5♣5♦",
      "equityA": 47,
      "equityB": 53,
      "praise": "ナイス判断！小さいペアの強さを分かってるね！",
      "explanation": "AJsは見た目が強いけど、55は最初からペア。大きな差ではないが、プリフロップの時点では55が少し有利。"
    },
    {
      "id": "SQ007",
      "handA": "K♠Q♠",
      "handB": "7♣7♦",
      "answer": "handB",
      "winnerLabel": "7♣7♦",
      "equityA": 48,
      "equityB": 52,
      "praise": "すばらしい！ポケットペアの価値をしっかり見抜いたね！",
      "explanation": "KQsはかなり強いが、77はすでにペア。差は小さいけど77が少し有利。ペア vs 高い2枚は接戦になりやすい。"
    },
    {
      "id": "SQ008",
      "handA": "A♠K♦",
      "handB": "A♠K♠",
      "answer": "handB",
      "winnerLabel": "A♠K♠",
      "equityA": 48,
      "equityB": 52,
      "praise": "正解！細かい違いに気づけるのはすごい！",
      "explanation": "同じAKでもスーテッドの方が少し有利。フラッシュを作れる可能性があるからだよ。小さな差だけど、長期では大事な差になる。"
    }
  ],
  "equitySenseQuestions": [
    {
      "id": "EQ001",
      "hand": "K♠Q♣",
      "board": "K♦7♣2♥",
      "category": "トップヒット・ドライ",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "ドライボードのトップヒット。KQはかなり強いが、AKやセットには負ける。ドローが少なくまくられにくい。",
      "detail": {
        "currentStrength": "ドライボードのトップヒット。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット・ドライ"
      ]
    },
    {
      "id": "EQ002",
      "hand": "A♠J♣",
      "board": "A♦7♣2♥",
      "category": "トップヒット・ドライ",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "Aヒットでかなり強い。ドライなので相手のドローが少ない。AK/AQやセットには注意。",
      "detail": {
        "currentStrength": "Aヒットでかなり強い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット・ドライ"
      ]
    },
    {
      "id": "EQ003",
      "hand": "Q♠J♣",
      "board": "Q♦8♣3♥",
      "category": "トップヒット・ドライ",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "トップヒットで十分強い。ボードがドライで、相手に強いドローが少ない。",
      "detail": {
        "currentStrength": "トップヒットで十分強い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット・ドライ"
      ]
    },
    {
      "id": "EQ004",
      "hand": "K♠9♠",
      "board": "K♦7♣2♥",
      "category": "トップヒット・ドライ",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "トップヒットだがキッカーはやや弱い。KQ/KJ/AKに負けるため、強すぎるとは考えない。",
      "detail": {
        "currentStrength": "トップヒットだがキッカーはやや弱い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット・ドライ"
      ]
    },
    {
      "id": "EQ005",
      "hand": "T♠9♣",
      "board": "T♦6♣2♥",
      "category": "トップヒット・ドライ",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "トップヒットだが高いトップペアではない。オーバーカードのターンにも注意。",
      "detail": {
        "currentStrength": "トップヒットだが高いトップペアではない。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット・ドライ"
      ]
    },
    {
      "id": "EQ006",
      "hand": "K♠Q♣",
      "board": "K♦J♦T♠",
      "category": "トップヒット・ウェット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "トップヒットだが、相手にツーペア・ストレート・強いドローが多い。ドライのトップヒットよりかなり価値が下がる。",
      "detail": {
        "currentStrength": "トップヒットだが、相手にツーペア・ストレート・強いドローが多い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット・ウェット"
      ]
    },
    {
      "id": "EQ007",
      "hand": "A♠J♣",
      "board": "J♦T♦9♠",
      "category": "トップヒット・ウェット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "トップヒットだがボードが非常に危険。QK、8Q、ツーペア、強ドローに注意。",
      "detail": {
        "currentStrength": "トップヒットだがボードが非常に危険。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット・ウェット"
      ]
    },
    {
      "id": "EQ008",
      "hand": "T♠9♣",
      "board": "T♦9♦8♠",
      "category": "トップヒット＋ペア絡み",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "トップヒットに加えてペア要素はあるが、ボードがかなり連結。相手のストレートやツーペアが多い。",
      "detail": {
        "currentStrength": "トップヒットに加えてペア要素はあるが、ボードがかなり連結。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トップヒット＋ペア絡み"
      ]
    },
    {
      "id": "EQ009",
      "hand": "A♠7♣",
      "board": "K♦7♣2♥",
      "category": "セカンドヒット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "セカンドヒットはショーダウン価値があるが、Kxに負ける。大きなポットは避けたい。",
      "detail": {
        "currentStrength": "セカンドヒットはショーダウン価値があるが、Kxに負ける。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "セカンドヒット"
      ]
    },
    {
      "id": "EQ010",
      "hand": "Q♠8♣",
      "board": "K♦8♣3♥",
      "category": "セカンドヒット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "8ヒットはそこそこだが、トップペアには負ける。相手の強いベットには慎重。",
      "detail": {
        "currentStrength": "8ヒットはそこそこだが、トップペアには負ける。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "セカンドヒット"
      ]
    },
    {
      "id": "EQ011",
      "hand": "A♠2♣",
      "board": "K♦7♣2♥",
      "category": "ボトムヒット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "ボトムペアは勝っていることもあるが、かなり脆い。ターン・リバーで厳しくなりやすい。",
      "detail": {
        "currentStrength": "ボトムペアは勝っていることもあるが、かなり脆い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ボトムヒット"
      ]
    },
    {
      "id": "EQ012",
      "hand": "Q♠2♣",
      "board": "A♦7♣2♥",
      "category": "ボトムヒット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 1,
      "label": "10〜25%",
      "explanation": "ボトムペアでキッカーも弱い。相手のAヒットや7ヒットに大きく負ける。",
      "detail": {
        "currentStrength": "ボトムペアでキッカーも弱い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "10〜25%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ボトムヒット"
      ]
    },
    {
      "id": "EQ013",
      "hand": "A♠Q♣",
      "board": "K♦7♣2♥",
      "category": "ノーヒット2オーバー",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "現状ノーヒットだが、AやQでトップペアになれる。ドライボードなのでまだ少し戦える。",
      "detail": {
        "currentStrength": "現状ノーヒットだが、AやQでトップペアになれる。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ノーヒット2オーバー"
      ]
    },
    {
      "id": "EQ014",
      "hand": "J♠T♣",
      "board": "K♦7♣2♥",
      "category": "ノーヒット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 1,
      "label": "10〜25%",
      "explanation": "ノーヒットでオーバーカードも十分ではない。バックドアはあるが勝率感覚は低め。",
      "detail": {
        "currentStrength": "ノーヒットでオーバーカードも十分ではない。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "10〜25%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ノーヒット"
      ]
    },
    {
      "id": "EQ015",
      "hand": "A♠J♠",
      "board": "K♠7♠2♦",
      "category": "フラッシュドロー",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "9アウトのフラッシュドロー。リバーまでに完成する確率は約35%。Aハイの価値も少しある。",
      "detail": {
        "currentStrength": "9アウトのフラッシュドロー。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "フラッシュドロー"
      ]
    },
    {
      "id": "EQ016",
      "hand": "Q♠J♠",
      "board": "K♠7♠2♦",
      "category": "フラッシュドロー",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "フラッシュドローはリバーまで約35%。ただし相手が強いKやセットなら完成しないと厳しい。",
      "detail": {
        "currentStrength": "フラッシュドローはリバーまで約35%。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "フラッシュドロー"
      ]
    },
    {
      "id": "EQ017",
      "hand": "J♠T♣",
      "board": "9♦8♣2♥",
      "category": "OESD",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "オープンエンドは8アウト。リバーまで約31%。完成すれば強いが、現状はまだドロー。",
      "detail": {
        "currentStrength": "オープンエンドは8アウト。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "OESD"
      ]
    },
    {
      "id": "EQ018",
      "hand": "8♠7♣",
      "board": "T♦9♣2♥",
      "category": "OESD",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "Jか6でストレート。8アウトなので勝率感覚は30%台。",
      "detail": {
        "currentStrength": "Jか6でストレート。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "OESD"
      ]
    },
    {
      "id": "EQ019",
      "hand": "Q♠J♣",
      "board": "T♦8♣2♥",
      "category": "ガットショット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 1,
      "label": "10〜25%",
      "explanation": "9だけでストレート完成。4アウトなので単体では低め。",
      "detail": {
        "currentStrength": "9だけでストレート完成。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "10〜25%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ガットショット"
      ]
    },
    {
      "id": "EQ020",
      "hand": "A♠5♣",
      "board": "K♦4♣3♥",
      "category": "ガットショット＋Aハイ",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 1,
      "label": "10〜25%",
      "explanation": "2でストレートだが4アウト。Aが勝つ可能性も少しあるが高くはない。",
      "detail": {
        "currentStrength": "2でストレートだが4アウト。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "10〜25%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ガットショット＋Aハイ"
      ]
    },
    {
      "id": "EQ021",
      "hand": "Q♠J♠",
      "board": "T♠9♠2♦",
      "category": "コンボドロー",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "フラッシュドロー＋ストレートドロー。降ろせなくても引いて勝てるルートが多い。",
      "detail": {
        "currentStrength": "フラッシュドロー＋ストレートドロー。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "コンボドロー"
      ]
    },
    {
      "id": "EQ022",
      "hand": "8♠7♠",
      "board": "9♠6♠2♦",
      "category": "コンボドロー",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "FD＋OESD級の強いドロー。完成ルートが多く、かなり戦える。",
      "detail": {
        "currentStrength": "FD＋OESD級の強いドロー。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "コンボドロー"
      ]
    },
    {
      "id": "EQ023",
      "hand": "A♠A♣",
      "board": "K♦7♣2♥",
      "category": "オーバーペア",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "AAはトップペアより上。ドライボードなのでかなり強い。セットには負けるが基本は大きく有利。",
      "detail": {
        "currentStrength": "AAはトップペアより上。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "オーバーペア"
      ]
    },
    {
      "id": "EQ024",
      "hand": "Q♠Q♣",
      "board": "J♦7♣4♥",
      "category": "オーバーペア",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "QQはボードより上のペア。ドローが少なく、かなり強い。",
      "detail": {
        "currentStrength": "QQはボードより上のペア。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "オーバーペア"
      ]
    },
    {
      "id": "EQ025",
      "hand": "9♠9♣",
      "board": "8♦6♣4♥",
      "category": "オーバーペア",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "99はオーバーペアだが、低めでまくられやすい。とはいえ現状はかなり有利。",
      "detail": {
        "currentStrength": "99はオーバーペアだが、低めでまくられやすい。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "オーバーペア"
      ]
    },
    {
      "id": "EQ026",
      "hand": "K♠7♣",
      "board": "K♦7♦2♥",
      "category": "ツーペア",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "ツーペアはかなり強い。セットや上のツーペアには注意だが、多くのKxに大きく勝つ。",
      "detail": {
        "currentStrength": "ツーペアはかなり強い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ツーペア"
      ]
    },
    {
      "id": "EQ027",
      "hand": "T♠9♣",
      "board": "T♦9♦8♠",
      "category": "ツーペア・ウェット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "ツーペアだがボードが危険。ストレートや強ドローが多く、ドライのツーペアほど安心できない。",
      "detail": {
        "currentStrength": "ツーペアだがボードが危険。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ツーペア・ウェット"
      ]
    },
    {
      "id": "EQ028",
      "hand": "7♠7♣",
      "board": "K♦7♦2♥",
      "category": "セット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "セットは非常に強い。ただしツートーンなのでフラッシュドローには注意。基本は大きくバリュー。",
      "detail": {
        "currentStrength": "セットは非常に強い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "セット"
      ]
    },
    {
      "id": "EQ029",
      "hand": "8♠8♣",
      "board": "T♦8♦6♠",
      "category": "セット・ウェット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "セットは強いが、ストレートやフラッシュドローが多い。強いが油断はしない。",
      "detail": {
        "currentStrength": "セットは強いが、ストレートやフラッシュドローが多い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "セット・ウェット"
      ]
    },
    {
      "id": "EQ030",
      "hand": "2♠2♣",
      "board": "A♦7♣2♥",
      "category": "セット・ドライ",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "セットはほぼ最強クラス。ドライボードでまくられにくい。しっかりバリューを取りたい。",
      "detail": {
        "currentStrength": "セットはほぼ最強クラス。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "セット・ドライ"
      ]
    },
    {
      "id": "EQ031",
      "hand": "Q♠Q♣",
      "board": "K♦7♣2♥",
      "category": "セカンドペア相当",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "QQは強そうに見えるが、Kが落ちているのでトップペアに負ける。ショーダウン価値はある。",
      "detail": {
        "currentStrength": "QQは強そうに見えるが、Kが落ちているのでトップペアに負ける。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "セカンドペア相当"
      ]
    },
    {
      "id": "EQ032",
      "hand": "A♠8♠",
      "board": "K♠8♣3♠",
      "category": "セカンドヒット＋FD",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "8ヒットにフラッシュドロー付き。ペア単体よりかなり強く、継続しやすい。",
      "detail": {
        "currentStrength": "8ヒットにフラッシュドロー付き。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "セカンドヒット＋FD"
      ]
    },
    {
      "id": "EQ033",
      "hand": "A♠Q♠",
      "board": "J♠T♠2♦",
      "category": "強ドロー",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "FDに加えてKや9でストレート要素もある。オーバーカードもあり、かなり強いドロー。",
      "detail": {
        "currentStrength": "FDに加えてKや9でストレート要素もある。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "強ドロー"
      ]
    },
    {
      "id": "EQ034",
      "hand": "K♠Q♣",
      "board": "A♦7♣2♥",
      "category": "ノーヒット高カード",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 1,
      "label": "10〜25%",
      "explanation": "KQは見た目は強いが、Aハイボードでノーヒット。相手のAに大きく負けやすい。",
      "detail": {
        "currentStrength": "KQは見た目は強いが、Aハイボードでノーヒット。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "10〜25%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ノーヒット高カード"
      ]
    },
    {
      "id": "EQ035",
      "hand": "A♠K♣",
      "board": "Q♦J♣T♥",
      "category": "完成ストレート",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "AKでナッツストレート。かなり強いが、ボードが危険なのでフルハウスや同じストレートに注意。",
      "detail": {
        "currentStrength": "AKでナッツストレート。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "完成ストレート"
      ]
    },
    {
      "id": "EQ036",
      "hand": "9♠8♠",
      "board": "7♠6♠2♦",
      "category": "コンボドロー",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "FD＋OESD級。現状は未完成でも、引けるカードが非常に多い。",
      "detail": {
        "currentStrength": "FD＋OESD級。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "コンボドロー"
      ]
    },
    {
      "id": "EQ037",
      "hand": "A♠A♣",
      "board": "J♦T♦9♠",
      "category": "オーバーペア・超ウェット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 3,
      "label": "50〜65%",
      "explanation": "AAは強いが、このボードではストレートやツーペア、強ドローが多い。ドライのAAよりかなり下がる。",
      "detail": {
        "currentStrength": "AAは強いが、このボードではストレートやツーペア、強ドローが多い。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "50〜65%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "オーバーペア・超ウェット"
      ]
    },
    {
      "id": "EQ038",
      "hand": "K♠J♣",
      "board": "K♦K♣4♥",
      "category": "トリップス",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "Kを持っていてトリップス。かなり強い。キッカー負けやフルハウスには注意。",
      "detail": {
        "currentStrength": "Kを持っていてトリップス。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トリップス"
      ]
    },
    {
      "id": "EQ039",
      "hand": "A♠7♣",
      "board": "7♦7♣2♥",
      "category": "トリップス",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 4,
      "label": "70〜85%",
      "explanation": "7を持ってトリップス。かなり強いが、上のキッカーやフルハウスには注意。",
      "detail": {
        "currentStrength": "7を持ってトリップス。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "70〜85%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "トリップス"
      ]
    },
    {
      "id": "EQ040",
      "hand": "Q♠J♣",
      "board": "9♦8♣5♥",
      "category": "ノーヒット＋2オーバー＋ガット",
      "choices": [
        "10〜25%",
        "30〜45%",
        "50〜65%",
        "70〜85%"
      ],
      "answer": 2,
      "label": "30〜45%",
      "explanation": "ノーヒットだが、Tでストレート、Q/Jでペアになる。完全な空振りよりは戦える。",
      "detail": {
        "currentStrength": "ノーヒットだが、Tでストレート、Q/Jでペアになる。",
        "risk": "ボードの濡れ具合と相手の強いハンドを意識しよう。",
        "strongEnemyHands": "セット、ツーペア、強いトップペア、完成ドロー。",
        "practical": "必要勝率と比べて、コール・レイズ・フォールドを判断する土台になる。"
      },
      "sharkTip": "30〜45%の感覚で見積もろう。正確な数字より、まずは帯で覚えるのが大事だよ！",
      "type": "equitySense",
      "spot": "勝率感覚",
      "heroPosition": "-",
      "tags": [
        "equity-sense",
        "ノーヒット＋2オーバー＋ガット"
      ]
    }
  ],
  "sharkMaxims": [
    "強いハンドで勝つより、弱いハンドで大損しない方が大事。",
    "迷ったらポジションを思い出そう。BTNは味方、OOPは慎重に。",
    "AAでも負ける。だから短期の結果で落ち込まなくてOK！",
    "Aがあるだけで強いわけじゃない。キッカーとボードを見よう。",
    "Foldは負けじゃない。次のいい場面を待つ作戦だよ。",
    "ボードが濡れている時は、1ペアを過信しない！",
    "相手が降りないなら、ブラフよりバリューを増やそう。",
    "プリフロップは地図。地図があるとフロップ以降で迷いにくい。"
  ],
  "gachaItems": [
    {
      "id": "shark_normal",
      "name": "ノーマルサメ先生",
      "type": "サメスキン",
      "rarity": "N",
      "weight": 300,
      "description": "研究所の新米コーチ。いつも優しくサポートしてくれる。"
    },
    {
      "id": "card_red",
      "name": "赤カード裏面",
      "type": "カード裏面",
      "rarity": "N",
      "weight": 300,
      "description": "王道の赤いカード裏面。最初の研究員にふさわしいデザイン。"
    },
    {
      "id": "chip_red",
      "name": "赤チップ",
      "type": "チップスキン",
      "rarity": "N",
      "weight": 300,
      "description": "基本の赤チップ。研究所で最初に配られるチップ。"
    },
    {
      "id": "table_green",
      "name": "グリーンフェルト",
      "type": "テーブルスキン",
      "rarity": "N",
      "weight": 300,
      "description": "王道のグリーンフェルト。ポーカーの基本に立ち返るテーブル。"
    },
    {
      "id": "shark_dealer",
      "name": "ディーラーサメ",
      "type": "サメスキン",
      "rarity": "R",
      "weight": 120,
      "description": "カジノディーラーとして研究員をサポートするサメ先生。"
    },
    {
      "id": "card_black",
      "name": "ブラックカード",
      "type": "カード裏面",
      "rarity": "R",
      "weight": 120,
      "description": "黒を基調にした高級カード。落ち着いた研究室に似合う。"
    },
    {
      "id": "chip_blue",
      "name": "青チップ",
      "type": "チップスキン",
      "rarity": "R",
      "weight": 120,
      "description": "冷静な判断を象徴する青チップ。"
    },
    {
      "id": "button_silver",
      "name": "シルバーディーラーボタン",
      "type": "ディーラーボタン",
      "rarity": "R",
      "weight": 120,
      "description": "銀色に輝くディーラーボタン。テーブルに品格を与える。"
    },
    {
      "id": "shark_pro",
      "name": "プロシャーク",
      "type": "サメスキン",
      "rarity": "SR",
      "weight": 35,
      "description": "数々の実戦をくぐり抜けたトッププレイヤー。"
    },
    {
      "id": "card_neon",
      "name": "ネオンブルーカード",
      "type": "カード裏面",
      "rarity": "SR",
      "weight": 35,
      "description": "研究所の分析モニターのように光るネオンブルーカード。"
    },
    {
      "id": "chip_black",
      "name": "黒チップ",
      "type": "チップスキン",
      "rarity": "SR",
      "weight": 35,
      "description": "重厚な黒チップ。強い判断力を持つ研究員の証。"
    },
    {
      "id": "table_red",
      "name": "レッドカジノテーブル",
      "type": "テーブルスキン",
      "rarity": "SR",
      "weight": 35,
      "description": "勝負所に火をつけるレッドカジノテーブル。"
    },
    {
      "id": "shark_gold",
      "name": "ゴールドシャーク",
      "type": "サメスキン",
      "rarity": "SSR",
      "weight": 8,
      "description": "研究所最高ランクの称号を持つ伝説の研究員。"
    },
    {
      "id": "card_gold",
      "name": "ゴールドカード",
      "type": "カード裏面",
      "rarity": "SSR",
      "weight": 8,
      "description": "VIPルームでしか使われないゴールドカード。"
    },
    {
      "id": "table_vip",
      "name": "VIPゴールドルーム",
      "type": "テーブルスキン",
      "rarity": "SSR",
      "weight": 8,
      "description": "限られた研究員だけが入室できる特別室。"
    },
    {
      "id": "chip_gold",
      "name": "金チップ",
      "type": "チップスキン",
      "rarity": "SSR",
      "weight": 8,
      "description": "圧倒的な存在感を放つゴールドチップ。"
    },
    {
      "id": "rokuyama_legend",
      "name": "六山最強チップ",
      "type": "LEGENDチップ",
      "rarity": "LEGEND",
      "weight": 1,
      "description": "研究所に実在すると噂される幻のチップ。攻撃力最強の象徴。"
    },
    {
      "id": "sawada_legend",
      "name": "澤田最強チップ",
      "type": "LEGENDチップ",
      "rarity": "LEGEND",
      "weight": 1,
      "description": "発見例が極めて少ない伝説級コレクション。知略最強の象徴。"
    }
  ]
};

let state = { mode: "home", order: [], index: 0, score: 0, total: 0, answered: false, selectedHand: null, currentStreak: 0, bestStreak: 0, unlockedRanks: [], chips: 2500, collection: [] };
const refModes = ["home", "rangeLibrary", "handLookup", "boardDictionary", "terms", "beginner", "rankGallery", "gacha"];

function getQuestions(mode) {
  if (mode === "preflop") return DATA.preflopQuestions;
  if (mode === "equitySense") return DATA.equitySenseQuestions;
  if (mode === "boardAdvantage") return DATA.boardAdvantageQuestions;
  return DATA.preflopQuestions;
}
function modeTitle(mode) {
  return {
    home:"SHARK TRAINER",
    beginner:"はじめてのポーカー",
    preflop:"プリフロップクイズ",
    equitySense:"勝率感覚クイズ",
    boardAdvantage:"ボードクイズ",
    rangeLibrary:"レンジライブラリ",
    handLookup:"ハンド逆引き",
    boardDictionary:"ボード辞典",
    terms:"用語集",
    rankGallery:"サメランク",
    gacha:"Labガチャ"
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
  if (refModes.includes(mode)) { renderReference(mode); return; }
  const qs = getQuestions(mode);
  state.order = shuffleArray([...Array(qs.length).keys()]);
  state.index = 0; state.score = 0; state.total = 0; state.answered = false;
  renderQuiz();
}
function currentList(){ return getQuestions(state.mode); }
function currentQuestion(){ return currentList()[state.order[state.index]]; }
function choicesFor(q){ return q.choices || (q.type === "preflop" ? DATA.preflopChoices : DATA.boardAdvantageChoices); }

function renderQuiz(){
  document.querySelector("#quizArea").style.display = "block";
  document.querySelector("#refArea").style.display = "none";
  const q = currentQuestion(), list = currentList();
  setTextSafe("#modeTitle", modeTitle(state.mode));
  setTextSafe("#progress", `${state.index + 1} / ${list.length}`);
  setTextSafe("#score", `${state.score} / ${state.total}`);
  document.querySelector("#phase").textContent = modeTitle(state.mode);
  renderSpotVisual(q);
  renderQuizHint(q);
  document.querySelector("#spot").textContent = q.spot || "-";
  document.querySelector("#hero").textContent = q.heroPosition || "-";
  document.querySelector("#hand").innerHTML = q.hand ? cardHand(q.hand) : "-";
  document.querySelector("#board").innerHTML = q.board ? boardCards(q.board) : "-";
  document.querySelector("#feedback").innerHTML = "";
  document.querySelector("#explanation").innerHTML = "";
  document.querySelector("#nextBtn").disabled = true;
  document.querySelector("#nextBtn").onclick = nextQuestion;
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
function answer(num, clicked){
  if(state.answered) return;
  const q = currentQuestion();
  const ok = num === q.answer;
  state.answered = true;
  state.total++;
  if(ok) {
    state.score++;
    updateStreak(true);
    addChips(state.mode === "equitySense" ? 80 : 50);
  } else {
    updateStreak(false);
  }
  document.querySelectorAll(".choice").forEach((b, idx) => {
    b.disabled = true;
    if(idx + 1 === q.answer) b.classList.add("correct");
    if(b === clicked && !ok) b.classList.add("wrong");
  });
  document.querySelector("#feedback").innerHTML = ok ? "⭕ 正解！" : `❌ 不正解。正解は ${q.answer}. ${q.label}`;
  document.querySelector("#explanation").innerHTML = buildExplanation(q);
  document.querySelector("#nextBtn").disabled = false;
  document.querySelector("#nextBtn").onclick = nextQuestion;
  document.querySelector("#nextBtn").textContent = state.index + 1 === currentList().length ? "もう一周する" : "次の問題へ";
  setTextSafe("#score", `${state.score} / ${state.total}`);
}

function buildExplanation(q){
  if(!q) return "";
  if(q.type === "equitySense"){
    return `${sharkBox(q.sharkTip || "勝率はピッタリ当てなくてOK。まずは帯でつかもう！")}
      <h3>勝率感覚の解説</h3>
      <p>${q.explanation || ""}</p>
      <div class="equity-detail">
        <div><b>今の強さ</b><p>${q.detail?.currentStrength || ""}</p></div>
        <div><b>まくられやすさ</b><p>${q.detail?.risk || ""}</p></div>
        <div><b>相手の強いハンド</b><p>${q.detail?.strongEnemyHands || ""}</p></div>
        <div><b>実戦での考え方</b><p>${q.detail?.practical || ""}</p></div>
      </div>`;
  }
  if(q.type && q.type.startsWith("preflop")){
    const practical = `<p class="hint"><b>実戦メモ：</b>${q.practicalLabel || q.label || "-"}<br><b>頻度目安：</b>${q.frequencyHint || "-"}</p>`;
    return `${sharkBox(q.sharkTip || "ナイス挑戦！理由まで分かるともっと強くなるよ。")}
      <h3>プリフロップ解説</h3>
      <p>${q.explanation || ""}</p>${practical}`;
  }
  return `${sharkBox(q.sharkTip || "")}<h3>解説</h3><p>${q.explanation || ""}</p>`;
}

function sharkBox(text){
  return `<div class="shark-teacher shark-pop"><div class="shark-mascot" aria-label="サメ先生">🦈</div><div><b>サメ先生</b><p>${text}</p></div></div>`;
}
function nextQuestion(){
  if(!state.answered) return;
  next();
}
function next(){
  state.index++;
  if(state.index >= currentList().length){
    state.order = shuffleArray([...Array(currentList().length).keys()]);
    state.index = 0;
  }
  renderQuiz();
}
function randomNext(){
  state.order = shuffleArray([...Array(currentList().length).keys()]);
  state.index = 0; state.score = 0; state.total = 0; state.answered = false;
  renderQuiz();
}
function resetSession(){
  state.index = 0; state.score = 0; state.total = 0; state.answered = false;
  state.order = shuffleArray([...Array(currentList().length).keys()]);
  renderQuiz();
}

function renderReference(mode){
  document.querySelector("#quizArea").style.display = "none";
  document.querySelector("#refArea").style.display = "block";
  document.querySelector("#modeTitle").textContent = modeTitle(mode);
  document.querySelector("#progress").textContent = "-";
  document.querySelector("#score").textContent = "-";
  if(mode === "home") return renderHome();
  if(mode === "rankGallery") return renderRankGallery();
  if(mode === "gacha") return renderGacha();
  if(mode === "beginner") return renderBeginner();
  if(mode === "rangeLibrary") return renderRangeLibrary();
  if(mode === "handLookup") return renderHandLookup();
  if(mode === "boardDictionary") return renderBoardDictionary();
  if(mode === "terms") return renderTerms();
}


function setTextSafe(selector, text){ const el = document.querySelector(selector); if(el) el.textContent = text; }
function setHtmlSafe(selector, html){ const el = document.querySelector(selector); if(el) el.innerHTML = html; }
function getLabProgress(){try{state.chips=Number(localStorage.getItem("sharkLabChips")||2500);state.collection=JSON.parse(localStorage.getItem("sharkLabCollection")||"[]");}catch(e){state.chips=2500;state.collection=[];}}
function saveLabProgress(){localStorage.setItem("sharkLabChips",String(state.chips));localStorage.setItem("sharkLabCollection",JSON.stringify(state.collection));}
function addChips(amount){state.chips=Math.max(0,Number(state.chips||0)+amount);saveLabProgress();}
function collectionCount(){return `${new Set(state.collection||[]).size} / ${(DATA.gachaItems||[]).length}`;}
function rarityIcon(r){return {N:"⚪",R:"🔵",SR:"🟣",SSR:"🟡",LEGEND:"🌈"}[r]||"⚪";}
function itemVisual(item){
  if(!item) return `<div class="gacha-art unknown">?</div>`;
  const label = item.id.includes("rokuyama") ? "六" : item.id.includes("sawada") ? "澤" : "";
  if(item.id.includes("rokuyama")) return `<div class="legend-chip red"><b>六</b><small>最強</small></div>`;
  if(item.id.includes("sawada")) return `<div class="legend-chip blue"><b>澤</b><small>最強</small></div>`;
  if(item.type.includes("サメ")) return `<div class="shark-art ${item.rarity.toLowerCase()}"><span></span><i></i><em>${item.rarity === "SSR" ? "★" : item.rarity === "SR" ? "♠" : ""}</em></div>`;
  if(item.type.includes("カード")) return `<div class="card-back-art ${item.rarity.toLowerCase()}"><b>♠</b></div>`;
  if(item.type.includes("チップ")) return `<div class="chip-art ${item.rarity.toLowerCase()}"><b>${item.rarity === "SSR" ? "G" : ""}</b></div>`;
  if(item.type.includes("テーブル")) return `<div class="table-art ${item.rarity.toLowerCase()}"><span></span></div>`;
  if(item.type.includes("ボタン")) return `<div class="dealer-button-art ${item.rarity.toLowerCase()}">D</div>`;
  return `<div class="gacha-art unknown">?</div>`;
}
function saveProgress(){
  localStorage.setItem("sharkBestStreak", String(state.bestStreak));
  localStorage.setItem("sharkCurrentStreak", String(state.currentStreak));
  localStorage.setItem("sharkUnlockedRanks", JSON.stringify(state.unlockedRanks));
}
function currentRank(){
  let rank = "Rookie";
  (DATA.rankMilestones || []).forEach(r => {
    if(state.bestStreak >= r.streak) rank = r.rank;
  });
  return rank;
}
function updateStreak(ok){
  if(ok){
    state.currentStreak += 1;
    if(state.currentStreak > state.bestStreak) state.bestStreak = state.currentStreak;
    const milestone = (DATA.rankMilestones || []).find(r => r.streak === state.currentStreak);
    if(milestone){
      if(!state.unlockedRanks.includes(milestone.rank)) state.unlockedRanks.push(milestone.rank);
      showMilestone(milestone);
    }
  }else{
    state.currentStreak = 0;
  }
  saveProgress();
}
function showMilestone(m){
  const el = document.createElement("div");
  el.className = "milestone-pop";
  el.innerHTML = `<div class="milestone-card"><div class="milestone-icon">${m.icon}</div><h2>${m.rank}</h2><p>${m.message}</p></div>`;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add("show"), 30);
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 350);
  }, 1800);
}
function todaySharkMaxim(){
  const list = DATA.sharkMaxims || DATA.sharkQuotes || ["今日もレンジを鍛えるぞ！"];
  return list[Math.floor(Math.random() * list.length)];
}
function renderHome(){
  document.querySelector("#quizArea").style.display="none";document.querySelector("#refArea").style.display="block";
  setTextSafe("#modeTitle","SHARK POKER LAB");setTextSafe("#progress","-");setTextSafe("#score","-");
  document.querySelector("#refArea").innerHTML=`
    <section class="lab-lobby">
      <div class="lab-topbar"><div><p class="lab-kicker">PRIVATE POKER RESEARCH ROOM</p><h1>SHARK<br>POKER LAB</h1></div><div class="lab-wallet"><span>所持チップ</span><b><i class="chip-icon"></i><em id="labChips">${Number(state.chips||0).toLocaleString()}</em></b><small>Collection <em id="collectionCount">${collectionCount()}</em></small></div></div>
      <div class="lab-quote"><div class="dealer-shark">🦈</div><div><b>今日のサメ格言</b><p>${todaySharkMaxim()}</p></div></div>
      <div class="poker-lab-table">
        <button class="lab-seat seat-preflop" onclick="startMode('preflop')"><span>🎯</span><b>Preflop</b><small>トレーニング</small></button>
        <button class="lab-seat seat-equity" onclick="startMode('equitySense')"><span>📊</span><b>Equity</b><small>勝率感覚</small></button>
        <button class="lab-seat seat-board" onclick="startMode('boardDictionary')"><span>🃏</span><b>Board</b><small>ボード事典</small></button>
        <button class="lab-seat seat-beginner" onclick="startMode('beginner')"><span>📖</span><b>Guide</b><small>はじめて</small></button>
        <button class="lab-seat seat-gacha" onclick="startMode('gacha')"><span>🎰</span><b>Gacha</b><small>Labガチャ</small></button>
        <div class="table-core"><div class="table-logo">♠ SHARK LAB ♥</div><div class="chip-stack-mini"><i></i><i></i><i></i></div></div>
      </div>
      <div class="lab-menu-row"><button onclick="startMode('rangeLibrary')">📚 レンジ</button><button onclick="startMode('handLookup')">🔍 逆引き</button><button onclick="startMode('terms')">📘 用語</button></div>
    </section>`;
}


function pullGacha(){
  const cost = 1000;
  const result = document.querySelector("#gachaResult");
  if(!result) return;

  if(Number(state.chips || 0) < cost){
    result.innerHTML = `<div class="gacha-result miss"><h3>チップが足りません</h3><p>クイズ正解でチップを集めよう。</p></div>`;
    return;
  }

  const items = DATA.gachaItems || [];
  if(!items.length){
    result.innerHTML = `<div class="gacha-result miss"><h3>景品データがありません</h3></div>`;
    return;
  }

  state.chips = Number(state.chips || 0) - cost;

  const totalWeight = items.reduce((sum, item) => sum + Number(item.weight || 1), 0);
  let roll = Math.random() * totalWeight;
  let item = items[items.length - 1];

  for(const candidate of items){
    roll -= Number(candidate.weight || 1);
    if(roll <= 0){
      item = candidate;
      break;
    }
  }

  if(!Array.isArray(state.collection)) state.collection = [];
  const isNew = !state.collection.includes(item.id);
  if(isNew) state.collection.push(item.id);

  saveLabProgress();

  const legendMessage = item.rarity === "LEGEND"
    ? `<p class="legend-message">研究所でも滅多に見られない伝説のチップだ！！</p>`
    : "";
  const newBadge = isNew ? `<span class="new-badge">NEW</span>` : `<span class="new-badge owned">入手済み</span>`;

  result.innerHTML = `<div class="gacha-result rarity-${item.rarity}">
    <div class="gacha-big">${itemVisual(item)}</div>
    <h3>${rarityIcon(item.rarity)} ${item.rarity} ${item.name} ${newBadge}</h3>
    <p>${item.description || item.type || "Shark Poker Lab コレクション"}</p>
    ${legendMessage}
  </div>`;

  const chips = document.querySelector("#labChips");
  if(chips) chips.textContent = Number(state.chips || 0).toLocaleString();

  const cc = document.querySelector("#collectionCount");
  if(cc) cc.textContent = collectionCount();

  const ownedCard = document.querySelector(`[data-item-id="${item.id}"]`);
  if(ownedCard){
    ownedCard.classList.remove("locked");
    ownedCard.classList.add("owned");
    const visual = ownedCard.querySelector(".collection-visual");
    const title = ownedCard.querySelector("b");
    const desc = ownedCard.querySelector("p");
    if(visual) visual.innerHTML = itemVisual(item);
    if(title) title.textContent = item.name;
    if(desc) desc.textContent = item.description || "Shark Poker Labのコレクションアイテム。";
  }
}

function renderGacha(){
  document.querySelector("#quizArea").style.display="none";
  document.querySelector("#refArea").style.display="block";
  const items=DATA.gachaItems||[], owned=new Set(state.collection||[]), rarities=["N","R","SR","SSR","LEGEND"];
  const grouped = rarities.map(r => ({rarity:r, items: items.filter(i=>i.rarity===r)}));
  document.querySelector("#refArea").innerHTML=`
    <section class="card gacha-room museum">
      <div class="gacha-head">
        <div><p class="lab-kicker">SHARK MUSEUM / COLLECTION VAULT</p><h2>🎰 Labガチャ</h2><p class="note bright">クイズで集めたチップで、研究所のコレクションを解放できます。</p></div>
        <div class="lab-wallet compact"><span>所持チップ</span><b><i class="chip-icon"></i><em id="labChips">${Number(state.chips||0).toLocaleString()}</em></b><small>Collection <em id="collectionCount">${collectionCount()}</em></small></div>
      </div>
      <div class="gacha-machine premium-machine">
        <div class="machine-window"><div class="capsule-glass">🦈<span>♠</span></div></div>
        <button class="pull-btn" onclick="pullGacha()">1000チップで引く</button>
        <div id="gachaResult"></div>
      </div>
      <div class="rarity-strip">${rarities.map(r=>`<span class="rarity-${r}">${rarityIcon(r)} ${r}</span>`).join("")}</div>
      <div class="museum-shelves">
        ${grouped.map(g => `<div class="museum-section"><h3>${rarityIcon(g.rarity)} ${g.rarity}</h3><div class="collection-grid">${g.items.map(item=>`<div class="collection-card ${owned.has(item.id)?"owned":"locked"} rarity-${item.rarity}" data-item-id="${item.id}">
          <div class="collection-visual">${owned.has(item.id)?itemVisual(item):`<div class="locked-art">?</div>`}</div>
          <b>${owned.has(item.id)?item.name:"未獲得"}</b>
          <small>${item.type}</small>
          <p>${owned.has(item.id)?(item.description||"Shark Poker Labのコレクションアイテム。"):"研究所の金庫に眠っています。"}</p>
        </div>`).join("")}</div></div>`).join("")}
      </div>
    </section>`;
}

function renderRankGallery(){
  document.querySelector("#quizArea").style.display = "none";
  document.querySelector("#refArea").style.display = "block";
  const ranks = DATA.rankMilestones || [];
  document.querySelector("#refArea").innerHTML = `
    <section class="card">
      <h2>🏆 サメランク</h2>
      <p class="note">連続正解でランクを解除できます。</p>
      <div class="rank-list">
        ${ranks.map(r => {
          const unlocked = state.bestStreak >= r.streak || state.unlockedRanks.includes(r.rank);
          return `<div class="rank-card ${unlocked ? "unlocked" : "locked"}">
            <div class="rank-icon">${unlocked ? r.icon : "🔒"}</div>
            <div><h3>${r.rank}</h3><p>${r.streak}連続正解で解除</p></div>
          </div>`;
        }).join("")}
      </div>
    </section>
  `;
}
function renderQuizHint(q){
 const old=document.querySelector("#quizHintPanel"); if(old)old.remove();
 const visual=document.querySelector("#spotVisual"); if(!visual||!q||!(q.type&&q.type.startsWith("preflop")))return;
 const panel=document.createElement("div"); panel.id="quizHintPanel"; panel.className="quiz-hint-panel";
 panel.innerHTML=`<button class="hint-chip" onclick="toggleQuizRangeHint('${q.spot}')">💡 ヒント：レンジ表を見る</button><div id="quizRangeHint" style="display:none"></div>`; visual.after(panel);
}
function toggleQuizRangeHint(spot){const box=document.querySelector("#quizRangeHint"); if(!box)return; if(box.style.display==="none"){box.style.display="block";box.innerHTML=makeActionRangeGrid(spot);}else{box.style.display="none";}}
function spotInfo(spot){
  const base = {hero:"", actors:[]};
  if(spot === "UTG Open") return {hero:"UTG", actors:[{pos:"UTG", label:"Open"}], text:"UTGのあなたが最初にアクションします。"};
  if(spot === "BTN Open") return {hero:"BTN", actors:[{pos:"BTN", label:"Open"}], text:"BTNのあなたが最初にアクションします。"};
  if(spot === "SB First In") return {hero:"SB", actors:[{pos:"SB", label:"First In"}], text:"SBのあなたがBBに対してアクションします。"};
  if(spot === "UTG Open → BTN") return {hero:"BTN", actors:[{pos:"UTG", label:"Raise"}], text:"UTGがオープン。BTNのあなたは？"};
  if(spot === "UTG Open → BB") return {hero:"BB", actors:[{pos:"UTG", label:"Raise"}], text:"UTGがオープン。BBのあなたは？"};
  if(spot === "BTN Open → SB") return {hero:"SB", actors:[{pos:"BTN", label:"Raise"}], text:"BTNがオープン。SBのあなたは？"};
  if(spot === "BTN Open → BB") return {hero:"BB", actors:[{pos:"BTN", label:"Raise"}], text:"BTNがオープン。BBのあなたは？"};
  if(spot === "UTG Open → BTN 3bet → UTG") return {hero:"UTG", actors:[{pos:"UTG", label:"Open"},{pos:"BTN", label:"3bet"}], text:"UTGでオープン後、BTNが3bet。あなたは？"};
  if(spot === "BTN Open → BB 3bet → BTN") return {hero:"BTN", actors:[{pos:"BTN", label:"Open"},{pos:"BB", label:"3bet"}], text:"BTNでオープン後、BBが3bet。あなたは？"};
  return {hero:"", actors:[], text:spot || ""};
}
function renderSpotVisual(q){
  const target = document.querySelector("#spotVisual");
  if(!target) return;
  if(!q || !q.type || !q.type.startsWith("preflop")){
    target.innerHTML = "";
    target.style.display = "none";
    return;
  }
  target.style.display = "block";
  const info = spotInfo(q.spot);
  const positions = ["UTG","HJ","CO","BTN","SB","BB"];
  const actorMap = {};
  info.actors.forEach(a => actorMap[a.pos] = a.label);
  target.innerHTML = `
    <div class="table-visual">
      <div class="table-felt">
        ${positions.map(p => `
          <div class="seat seat-${p.toLowerCase()} ${p===info.hero ? "hero-seat" : ""} ${actorMap[p] ? "actor-seat" : ""}">
            <b>${p}</b>
            ${p===info.hero ? `<small>YOU</small>` : ""}
            ${actorMap[p] ? `<em>${actorMap[p]}</em>` : ""}
          </div>
        `).join("")}
        <div class="pot-chip">♠ ♥ ♦ ♣</div>
      </div>
      <p class="spot-caption">${info.text}</p>
    </div>
  `;
}

function renderBeginner(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `
    <section class="card beginner-v13">
      <h2>📖 はじめてのポーカー</h2>
      <p class="note">まずは「手札2枚＋場の5枚」を見るところから始めよう。</p>

      <div class="beginner-section hero-beginner">
        <div class="big-shark">🦈✨</div>
        <div>
          <h3>サメ先生とポーカーを始めよう</h3>
          <p>難しい言葉はあとでOK。カードを見て「どんな役ができるか」を楽しもう。</p>
        </div>
      </div>

      <div class="beginner-section">
        <h3>① ハンドとボード</h3>
        <p><b>ハンド</b>は自分だけの2枚。<b>ボード</b>は全員が使える5枚です。</p>
        <div class="seven-card-demo">
          <div>
            <span>あなたのハンド</span>
            <div class="demo-cards">${demoCard("A","♠",false)}${demoCard("K","♠",false)}</div>
          </div>
          <div>
            <span>ボード5枚</span>
            <div class="demo-cards">${demoCard("Q","♠",false)}${demoCard("J","♠",false)}${demoCard("T","♠",false)}${demoCard("7","♣",false)}${demoCard("2","♥",false)}</div>
          </div>
        </div>
        <p class="note">この7枚を見て、いちばん強い5枚の組み合わせで勝負します。</p>
      </div>

      <div class="beginner-section">
        <h3>② 7枚から強い5枚を選ぶ</h3>
        <p>手札2枚を必ず両方使う必要はありません。下の例では、光っている5枚が実際に使うベスト5枚です。</p>
        <div class="seven-card-demo">
          <div>
            <span>あなたのハンド</span>
            <div class="demo-cards">${demoCard("8","♣",true)}${demoCard("8","♦",true)}</div>
          </div>
          <div>
            <span>ボード5枚</span>
            <div class="demo-cards">${demoCard("8","♠",true)}${demoCard("K","♥",true)}${demoCard("K","♣",true)}${demoCard("4","♦",false)}${demoCard("2","♣",false)}</div>
          </div>
        </div>
        <p class="note">8が3枚＋Kが2枚。かなり強い役です。</p>
      </div>

      <div class="beginner-section">
        <h3>③ 役の強さと出やすさ</h3>
        <p>よく出る役から順番に見ていくと分かりやすいです。強い役ほどなかなか出ません。</p>
        <div class="hand-rank-table illustrated-ranks">${renderHandRankRows()}</div>
      </div>

      <div class="beginner-section">
        <h3>④ まず覚えるポジション</h3>
        <p><b>BTNは有利</b>、<b>UTGは慎重</b>。最初はこれだけで十分です。</p>
        <div class="poker-table mini">
          <div class="pos utg">UTG</div><div class="pos hj">HJ</div><div class="pos co">CO</div>
          <div class="pos btn">BTN</div><div class="pos sb">SB</div><div class="pos bb">BB</div>
          <div class="dealer">♠ ♥ ♦ ♣</div>
        </div>
      </div>

      <div class="beginner-section">
        <h3>⑤ サメ先生の驚きクイズ</h3>
        <p class="note">答えは「どっちのハンドが強い？」だけ。正解したらサメ先生が全力で褒めます。</p>
        <div id="surpriseQuizBox"></div>
      </div>

      <div class="beginner-section">
        <h3>⑥ このアプリのおすすめ順</h3>
        <ol class="start-steps">
          <li>まず驚きクイズで遊ぶ</li>
          <li>プリフロップクイズでレンジを覚える</li>
          <li>勝率感覚クイズでハンドの強さをつかむ</li>
          <li>ボード事典でフロップの考え方を見る</li>
        </ol>
      </div>

      ${sharkBox("ポーカーは7枚からベスト5枚を作るゲーム。AAでも負けるし、72oでも勝つことがあるのが面白いんだ！")}
    </section>`;
  renderSurpriseQuiz();
}
function demoCard(rank, suit, active){
  return `<span class="mini-card ${suitClass(suit)} ${active ? "best-five" : ""}"><span class="rank">${rank}</span><span class="suit">${suit}</span></span>`;
}
function rankCards(cards){
  return `<div class="rank-illustration">${cards.map(c => demoCard(c[0], c[1], true)).join("")}</div>`;
}
function renderHandRankRows(){
  const ranks = [
    ["ワンペア","約42%","同じ数字が2枚。よく出る。",[["A","♠"],["A","♥"],["K","♣"],["7","♦"],["2","♣"]],"★★★★★"],
    ["ツーペア","約4.8%","ペアが2組。",[["A","♠"],["A","♥"],["K","♣"],["K","♦"],["2","♣"]],"★★★★☆"],
    ["スリーカード","約2.1%","同じ数字が3枚。",[["8","♠"],["8","♥"],["8","♦"],["K","♣"],["2","♣"]],"★★★☆☆"],
    ["ストレート","約0.39%","数字が5枚連続。",[["9","♠"],["T","♥"],["J","♦"],["Q","♣"],["K","♠"]],"★★☆☆☆"],
    ["フラッシュ","約0.20%","同じスートが5枚。",[["A","♠"],["J","♠"],["8","♠"],["5","♠"],["2","♠"]],"★★☆☆☆"],
    ["フルハウス","約0.14%","スリーカード＋ワンペア。",[["8","♠"],["8","♥"],["8","♦"],["K","♣"],["K","♦"]],"★☆☆☆☆"],
    ["フォーカード","約0.024%","同じ数字が4枚。かなりレア。",[["A","♠"],["A","♥"],["A","♦"],["A","♣"],["2","♠"]],"★☆☆☆☆"],
    ["ストレートフラッシュ","約0.0014%","同じスートで数字が連続。",[["9","♠"],["T","♠"],["J","♠"],["Q","♠"],["K","♠"]],"☆☆☆☆☆"],
    ["ロイヤルフラッシュ","約0.00015%","A-K-Q-J-Tの同じスート。幻級。",[["T","♠"],["J","♠"],["Q","♠"],["K","♠"],["A","♠"]],"☆☆☆☆☆"]
  ];
  return ranks.map((r,i)=>`<div class="rank-row illustrated">
    <div><b>${i+1}. ${r[0]}</b><p>${r[2]}</p></div>
    ${rankCards(r[3])}
    <div><span>${r[1]}</span><small>出やすさ ${r[4]}</small></div>
  </div>`).join("");
}

let surpriseState = { index: 0, score: 0, answered: false };
function renderSurpriseQuiz(){
  const box = document.querySelector("#surpriseQuizBox");
  if(!box) return;
  const q = DATA.surpriseQuiz[surpriseState.index % DATA.surpriseQuiz.length];
  surpriseState.answered = false;
  box.innerHTML = `
    <div class="surprise-card">
      <div class="surprise-progress">${surpriseState.index + 1} / ${DATA.surpriseQuiz.length}</div>
      <h4>どっちが強い？</h4>
      <div class="hand-battle">
        <button onclick="answerSurprise('handA')">${q.handA}</button>
        <span>VS</span>
        <button onclick="answerSurprise('handB')">${q.handB}</button>
      </div>
      <div id="surpriseResult"></div>
    </div>`;
}
function answerSurprise(choice){
  if(surpriseState.answered) return;
  surpriseState.answered = true;
  const q = DATA.surpriseQuiz[surpriseState.index % DATA.surpriseQuiz.length];
  const ok = choice === q.answer;
  if(ok) surpriseState.score++;
  const result = document.querySelector("#surpriseResult");
  result.innerHTML = `
    <div class="surprise-result ${ok ? "ok" : "miss"}">
      <h3>${ok ? "🦈✨ " + q.praise : "🦈 惜しい！でもこの問題はみんな迷うぞ！"}</h3>
      <p><b>正解：</b>${q.winnerLabel}</p>
      <div class="equity-bars">
        <div><span>${q.handA}</span><b>${q.equityA}%</b><i style="width:${q.equityA}%"></i></div>
        <div><span>${q.handB}</span><b>${q.equityB}%</b><i style="width:${q.equityB}%"></i></div>
      </div>
      <p>${q.explanation}</p>
      <button class="primary small" onclick="nextSurpriseQuiz()">${surpriseState.index + 1 >= DATA.surpriseQuiz.length ? "もう一周" : "次の問題"}</button>
    </div>`;
}
function nextSurpriseQuiz(){
  surpriseState.index++;
  if(surpriseState.index >= DATA.surpriseQuiz.length) surpriseState.index = 0;
  renderSurpriseQuiz();
}
function renderRangeLibrary(){
  const area = document.querySelector("#refArea");
  const spots = Object.keys(DATA.rangeLibrary);
  area.innerHTML = `
    <section class="card ref-controls">
      <h2>🃏 レンジライブラリ</h2>
      <p class="note">スポットを選ぶと、全アクションが1枚の表で色分け表示されます。セルをタップすると逆引きも見られます。</p>
      <label>スポット<select id="refSpot"></select></label>
      <div id="rangeLegend" class="range-legend"></div>
      <div id="rangeGrid"></div>
      <div id="reversePanel"></div>
    </section>`;
  const spotSel = document.querySelector("#refSpot");
  spots.forEach(s => spotSel.add(new Option(s, s)));
  function updateGrid(){
    const spot = spotSel.value;
    document.querySelector("#rangeLegend").innerHTML = makeRangeLegend(spot);
    document.querySelector("#rangeGrid").innerHTML = makeActionRangeGrid(spot);
    document.querySelector("#reversePanel").innerHTML = "";
  }
  spotSel.onchange = updateGrid;
  updateGrid();
}
function actionCellClass(action){
  if(action === "Fold") return "act-fold-cell";
  if(action.includes("4bet") && action.includes("Mix")) return "act-mix-4bet";
  if(action.includes("4bet")) return "act-pure-4bet";
  if(action.includes("3bet") && action.includes("Mix")) return "act-mix-3bet";
  if(action.includes("3bet")) return "act-pure-3bet";
  if(action.includes("Call")) return "act-call-cell";
  if(action.includes("Mix")) return "act-mix-open";
  return "act-pure-open";
}
function actionShort(action){
  return {
    "Pure Open":"Open",
    "Mix Open":"Mix",
    "Pure Raise":"Raise",
    "Mix Raise":"Mix",
    "Pure 3bet":"3bet",
    "Mix 3bet":"Mix3",
    "Pure 4bet":"4bet",
    "Mix 4bet":"Mix4",
    "Pure Call":"Call",
    "Fold":"Fold"
  }[action] || action;
}
function actionForHandInSpot(spot, hand){
  const obj = DATA.rangeLibrary[spot];
  if(!obj) return "Fold";
  for(const [action, hands] of Object.entries(obj.actions)){
    if(action !== "Fold" && hands.includes(hand)) return action;
  }
  return "Fold";
}
function makeRangeLegend(spot){
  const actions = Object.keys(DATA.rangeLibrary[spot].actions);
  return actions.map(a => `<span class="${actionCellClass(a)}">${a}</span>`).join("");
}
function makeActionRangeGrid(spot){
  return `<div class="range-grid action-range-grid">${DATA.matrix.flat().map(h => {
    const action = actionForHandInSpot(spot, h);
    return `<div class="cell ${actionCellClass(action)}" onclick="showReverse('${h}')" title="${h}: ${action}">
      <strong>${h}</strong><small>${actionShort(action)}</small>
    </div>`;
  }).join("")}</div><p class="note">Pure=高頻度 / Mix=頻度を混ぜる / Call=コール中心 / Fold=基本降りる</p>`;
}
function renderHandLookup(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `<section class="card"><h2>🔍 ハンド逆引き</h2><p class="note">ハンドをタップすると、各スポットでの推奨アクションを一覧表示します。</p>${makeRangeGrid(new Set(DATA.matrix.flat()), true)}<div id="reversePanel"></div></section>`;
}
function makeRangeGrid(keep, clickable=false){
  return `<div class="range-grid">${DATA.matrix.flat().map(h => `<div class="cell ${keep.has(h) ? "keep" : "gray"}" ${clickable ? `onclick="showReverse('${h}')"` : ""}>${h}</div>`).join("")}</div><p class="note">色付き＝対象レンジ / グレー＝対象外</p>`;
}
function actionClass(action){
  if(action === "Fold") return "act-fold";
  if(action.includes("Mix")) return "act-mix";
  return "act-pure";
}
function actionClass(action){
  if(action === "Fold") return "act-fold";
  if(action.includes("Mix")) return "act-mix";
  return "act-pure";
}
function showReverse(hand){
  const list = DATA.reverseLookup[hand] || [];
  const html = `<div class="reverse-card"><h3>${cardHand(hand)} の使い方</h3>` +
    `<table><tr><th>スポット</th><th>アクション</th></tr>${list.map(x => `<tr><td>${x.spot}</td><td><span class="action-badge ${actionClass(x.action)}">${x.action}</span></td></tr>`).join("")}</table>` +
    `${sharkBox(reverseTip(hand, list))}</div>`;
  const panel = document.querySelector("#reversePanel");
  if(panel) panel.innerHTML = html;
}
function reverseTip(hand, list){
  const nonFold = list.filter(x => x.action !== "Fold");
  if(nonFold.length === 0) return `${hand}はほとんどの主要スポットでFold。無理に参加しないことが大事だよ。`;
  const hasMix = list.some(x => x.action.includes("Mix"));
  const hasPure = list.some(x => x.action.includes("Pure"));
  if(hasMix && hasPure) return `${hand}はスポットによってPureにもMixにもなる代表的なハンド。位置と相手のアクションで評価が変わるよ。`;
  if(hasMix) return `${hand}は境界ハンド。GTOでは頻度を混ぜるが、実戦では相手が弱ければ攻め寄り、強ければ控えめでOK。`;
  return `${hand}は使えるスポットがはっきりしているハンド。Pure表示の場所では自信を持ってプレイしよう。`;
}
function reverseTip(hand, list){
  const nonFold = list.filter(x => x.action !== "Fold");
  if(nonFold.length === 0) return `${hand}はほとんどの主要スポットでFold。無理に参加しないことが大事だよ。`;
  const hasMix = list.some(x => x.action.includes("Mix"));
  const hasPure = list.some(x => x.action.includes("Pure"));
  if(hasMix && hasPure) return `${hand}はスポットによってPureにもMixにもなる代表的なハンド。位置と相手のアクションで評価が変わるよ。`;
  if(hasMix) return `${hand}は境界ハンド。GTOでは頻度を混ぜるが、実戦では相手が弱ければ攻め寄り、強ければ控えめでOK。`;
  return `${hand}は使えるスポットがはっきりしているハンド。Pure表示の場所では自信を持ってプレイしよう。`;
}
function renderBoardDictionary(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `<section class="card board-dict-premium">
    <h2>🃏 ボード事典</h2>
    <p class="note">ボードごとに、オーバーペア・ヒット・要注意ハンドの価値を個別に解説します。</p>
    <div class="board-list-premium">
      ${DATA.boardGuide.map(b => `
        <article class="board-lab-card">
          <div class="board-lab-head">
            <div>${boardCards(b.board)}</div>
            <span>${b.category || "Board"}</span>
          </div>
          <div class="board-theme"><b>ボード特徴</b><p>${b.boardTheme || b.texture || ""}</p></div>
          <div class="hit-grid hit-grid-v14">
            <div class="hit-card overpair"><b>オーバーペア</b><p>${b.overpairStrategy || ""}</p></div>
            <div class="hit-card"><b>トップヒット</b><p>${b.hitStrategy?.topHit || b.topHitStrategy || ""}</p></div>
            <div class="hit-card"><b>セカンドヒット</b><p>${b.hitStrategy?.secondHit || b.secondHitStrategy || ""}</p></div>
            <div class="hit-card"><b>ボトムヒット</b><p>${b.hitStrategy?.bottomHit || b.bottomHitStrategy || ""}</p></div>
            <div class="hit-card"><b>ノーヒット</b><p>${b.hitStrategy?.noHit || b.noHitStrategy || ""}</p></div>
          </div>
          <div class="board-risk-grid">
            <div><b>よく負ける相手</b><p>${b.commonThreats || "-"}</p></div>
            <div><b>${b.dangerTurnsLabel || "ターンに落ちたら要注意のカード"}</b><p>${b.dangerTurns || "-"}</p></div>
          </div>
          ${sharkBox(b.sharkComment || b.sharkTip || "ボードごとの特徴を見て、ワンペアの価値を調整しよう。")}
        </article>`).join("")}
    </div>
  </section>`;
}

function renderTerms(){
  const area = document.querySelector("#refArea");
  const grouped = {};
  (DATA.terms || []).forEach(t => {
    const c = t.category || "その他";
    if(!grouped[c]) grouped[c] = [];
    grouped[c].push(t);
  });
  area.innerHTML = `<section class="card"><h2>📘 用語集</h2><p class="note">初心者がアプリ内でつまずきやすい言葉だけに絞っています。</p>
    ${Object.keys(grouped).map(cat => `
      <div class="term-category">
        <h3>${cat}</h3>
        <div class="dictionary">${grouped[cat].map(t => `<div class="term"><h3>${t.term}</h3><p>${t.body}</p></div>`).join("")}</div>
      </div>`).join("")}
  </section>`;
}
function suitClass(suit){
  return (suit === "♥" || suit === "♦") ? "red" : "black";
}
function card(rank, suit){
  return `<span class="mini-card ${suitClass(suit)}"><span class="rank">${rank}</span><span class="suit">${suit}</span></span>`;
}
function parseExplicitCards(text){
  const out = [];
  const suits = new Set(["♠","♥","♦","♣"]);
  const ranks = new Set(["A","K","Q","J","T","9","8","7","6","5","4","3","2"]);
  for(let i=0;i<text.length;i++){
    const r = text[i];
    const s = text[i+1];
    if(ranks.has(r) && suits.has(s)){
      out.push({rank:r, suit:s});
      i++;
    }
  }
  return out;
}
function cardHand(hand){
  const explicit = parseExplicitCards(hand);
  if(explicit.length >= 2){
    return `<span class="card-display">${explicit.slice(0,2).map(c=>card(c.rank,c.suit)).join("")}</span><span class="hand-label">${hand}</span>`;
  }
  const isSuited = hand.endsWith("s");
  const clean = hand.replace(/[so]/g,"");
  if(clean.length === 2 && clean[0] === clean[1]){
    return `<span class="card-display">${card(clean[0],"♠")}${card(clean[1],"♥")}</span><span class="hand-label">${hand}</span>`;
  }
  if(clean.length === 2){
    const s1 = "♠";
    const s2 = isSuited ? "♠" : "♥";
    return `<span class="card-display">${card(clean[0],s1)}${card(clean[1],s2)}</span><span class="hand-label">${hand}</span>`;
  }
  return hand;
}
function boardCards(board){
  const explicit = parseExplicitCards(board);
  if(explicit.length >= 3){
    return `<span class="card-display board-display">${explicit.slice(0,3).map(c=>card(c.rank,c.suit)).join("")}</span><span class="hand-label">${board}</span>`;
  }
  const ranks = board.replace(/ss|r|m/g,"").split("");
  let suits;
  if(board.endsWith("r")) suits = ["♠","♥","♦"];
  else if(board.endsWith("ss")) suits = ["♠","♠","♥"];
  else if(board.endsWith("m")) suits = ["♠","♠","♠"];
  else suits = ["♠","♥","♦"];
  return `<span class="card-display board-display">${ranks.map((r,i)=>card(r,suits[i] || "♣")).join("")}</span><span class="hand-label">${board}</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mode-btn").forEach(btn => btn.onclick = () => startMode(btn.dataset.mode));
  document.querySelector("#nextBtn").onclick = nextQuestion;
  loadProgress();
  startMode("home");
});
