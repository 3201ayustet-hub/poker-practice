const DATA = {
  "version": "11.0",
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
      "explanation": "UTGでもAAは当然オープン。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AQsはUTGの強いオープンレンジに入る。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KQsはUTGからでも十分強い。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5sはAブロッカーとホイール可能性があり、UTGでは混合。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A4sもAブロッカーを使えるが毎回ではない。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KTsはプレイアビリティは高いがUTGでは境界。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "76sはUTGではかなり境界寄り。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KJoはUTGでは支配されやすい。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "QToはオフスートでUTGからは弱い。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "小さいポケットはUTGでは無理しない簡略レンジ。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "BTNでもAAは当然オープン。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KTsはBTNでは十分強い。K2sより強いためPure Open側。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "BTNは広く開けるためK2sもオープン候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "Q5sはBTNならオープン候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "54sはポジション有利とプレイアビリティでオープン。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "Q4sはBTNでも境界ハンド。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5oはBTNで混合。相手次第で調整。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "K8oはBTNの境界オフスート。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "J8oはBTNの境界ハンド。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "72oはBTNでも弱い。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "SB First InでもAAは当然オープン。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A9sはSBから強く使える。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KTsはSB First Inでは強いオープン候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "77はSBではオープン中心だが混合扱い。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5sはSBではBBにプレッシャーをかけられる。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "K2sはSBでは境界だがオープン候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "65sはプレイアビリティがある境界ハンド。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "K9oはSB First Inで相手次第。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "Q5oはオフスートで弱くFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "72oは最弱級でFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AAはUTG相手でも明確なバリュー3bet。最強レンジで大きくポットを作る。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KKも明確なValue。AA以外には大きく有利。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "QQはUTG相手でも十分強く、Valueに分類。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AKsはA/Kブロッカーと高いエクイティがありValue。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AKoは強いブロッカーと高カード価値でValue。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "JJは強いが、UTGの上位レンジにぶつかるためMix Value。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "TTは強いポケットだが、UTG相手には3bet固定ではなくMix。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AQsは強いスーテッドブロードウェイ。Callも3betも成立する。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AQoは強いがAK/QQ+にぶつかるためMix Value。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KQsはプレイアビリティが高いが、UTG相手にはMix。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5sはAブロッカーとホイール可能性があり、3betブラフ候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A4sもAブロッカーを持ち、低頻度の3betブラフ候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A2sはAブロッカーとスーテッド価値でMix Bluffに使える。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KTsはブロッカーとスーテッド価値があるが、実戦簡略化ではCallでも良い。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "99は3bet Valueには足りないが、セットやミドルボードで戦える。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "88はセットマインとショーダウン価値がありCall。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AJsは強いスーテッドブロードウェイで、IPでCallしやすい。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "QJsはスーテッド＋接続性があり、IPでプレイしやすい。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "76sはIPで実現率が高く、ナッツを作れる。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KJoはUTGの強いKx/Axに支配されやすい。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "QToはオフスートでドミネーションされやすくFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "BTNレンジは広いため、AAは明確なValue 3bet。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "BTNオープンに対してJJは十分強いValue。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "BTNの広いレンジに対してAQoはValue 3bet。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AJsは強いが、BBでは3betとCallが混ざる。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KQsはプレイアビリティが高く、Mix Value。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "99は強いディフェンスハンドで、3betもCallもある。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5sはAブロッカーでBTNを降ろす3betブラフ候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KTsはGTO寄りではMix Bluff。実戦簡略化ならCallでも自然。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "QTsはスーテッド＋接続性があり、3betブラフにもCallにも使える。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "76sはBBでコールも自然だが、低頻度3betブラフにも回せる。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "BBはポットオッズが良く、55はCallで守りやすい。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "Q8sはスーテッドでBBの広いディフェンスに入る。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "T8sはプレイアビリティがあり、BBで守りやすい。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A9oはBBで守れるが、ポストフロップは慎重に。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "K4oはオフスートでプレイアビリティが低くFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "T5oは弱く、BBでも守りにくい。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "UTG相手でもQQは非常に強いValue。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AKsは強いブロッカーとエクイティがあるValue。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "JJは強いがUTGの上位レンジに注意し、Mix Value。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AQsは強いがUTG相手では慎重に扱うMix Value。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5sはAブロッカーを使った3betブラフ候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KTsはバリューではないが、低頻度の3betブラフ候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "99はBBでCall中心。セットや低ボードで価値が出る。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AJsは強いスーテッドでCall可能。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "76sはBBでポットオッズとプレイアビリティがある。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "K9oはUTGに支配されやすくFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "54oはオフスートで弱くFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "3betを受けてもAAは明確な4bet Value。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AKsは4bet Valueとして十分強い。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "AQsは強いが、Callと4betが混ざる。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KQsはプレイアビリティが高く、Mix Value。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5sはAブロッカーを使った4betブラフ候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KTsは低頻度のブラフ候補だが、実戦では無理しない。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "99はIPでCallして戦える。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "QJsはIPでCallしやすいスーテッドブロードウェイ。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A9oは3betポットで支配されやすくFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "K9sは3betに対して続けるには弱め。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "SB First InではValueは当然Open。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "SB First InのMix Valueは基本Open頻度が高いという意味。Callではない。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "SBはBBを降ろす価値があり、A5sはOpen候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KToはSBで攻撃的に使えるが、相手次第で調整。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "72oは最弱級でFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "BTNの広いレンジに対してSBのJJはValue。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "KJsはBTNに対して戦えるが、OOPなのでMix。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "A5sはSBからの3betブラフ候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "SBはコールしすぎ注意だが、66は一部Call候補。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "SBはOOPなので76sはCallより3bet/Fold寄り。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "QToはOOPで支配されやすくFold。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
      "explanation": "K4sはSBで無理に守らない。（v9ではGTO寄りのPure/Mix/Fold分類で表示しています。実戦では相手が弱ければ攻め寄り、強ければ控えめに調整します。）",
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
    },
    {
      "term": "Value Open",
      "body": "ほぼ毎回オープンしてよいハンド。BTNでは広く、UTGでは狭くなる。"
    },
    {
      "term": "ハンド逆引き",
      "body": "1つのハンドが各スポットでどのアクションになるかを一覧で見る機能。"
    },
    {
      "term": "Pure Open",
      "body": "GTO上ほぼ毎回オープンするハンド。実戦でも基本的に参加してよい。"
    },
    {
      "term": "Pure / Mix / Fold",
      "body": "Pureはほぼ毎回、Mixは頻度を混ぜる、Foldは降りる。"
    },
    {
      "term": "SBのLimpについて",
      "body": "本来GTOではSBにLimp戦略もあります。このアプリでは学習しやすさを優先し、Raise/Fold中心で表示しています。"
    },
    {
      "term": "Pure",
      "body": "GTO上ほぼ毎回そのアクションを取るハンド。実戦でも基本方針にしやすい。"
    },
    {
      "term": "Mix",
      "body": "複数アクションが混ざる境界ハンド。相手・ポジション・レーキ・サイズで頻度が変わる。"
    },
    {
      "term": "GTO寄りと実戦調整",
      "body": "レンジ表はGTO寄り、解説では実戦向きの簡略化を補足しています。弱い相手には攻め寄り、強い相手には頻度を落としても構いません。"
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
        "topHit": "トップヒットは強い。AK/AQ/AJは広くバリュー。",
        "secondHit": "セカンドヒットはショーダウン価値重視。無理に大きくしない。",
        "bottomHit": "ボトムヒットは薄い価値。チェックや小さめでポット管理。",
        "noHit": "PFR側はレンジ有利なら小CB候補。Caller側は無理しない。"
      },
      "drawStrategy": "主なドローは少ない。バックドアを意識。",
      "dangerTurns": "K/Q/J/T、同スート2枚目",
      "sharkSummary": "AハイDryはPFR有利。小さく広くCBしやすい。"
    },
    {
      "id": "FG002",
      "board": "K72r",
      "category": "Dry",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB 25〜33%",
      "hitStrategy": {
        "topHit": "KQ/AKはバリュー。弱Kも小さく取りやすい。",
        "secondHit": "7ヒットはショーダウン価値。大きくしすぎない。",
        "bottomHit": "2ヒットは守備寄り。チェック多め。",
        "noHit": "AQ/QJなどはPFRなら小CB候補。"
      },
      "drawStrategy": "ドローは少ない。バックドア中心。",
      "dangerTurns": "A/Q/J/T、8/9",
      "sharkSummary": "KハイDryはPFRが主導権を取りやすい。"
    },
    {
      "id": "FG003",
      "board": "Q83r",
      "category": "Dry",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Qヒットはバリュー。キッカー差に注意。",
        "secondHit": "8ヒットはポット管理。",
        "bottomHit": "3ヒットは薄いペア。",
        "noHit": "AK/KJ/JTなどは小CB候補。"
      },
      "drawStrategy": "ほぼバックドア中心。",
      "dangerTurns": "A/K/J/T、9",
      "sharkSummary": "高カードDryは小さめCBの代表。"
    },
    {
      "id": "FG004",
      "board": "J74r",
      "category": "Dry",
      "advantage": "PFRやや有利",
      "cbFrequency": "中〜高",
      "recommendedSize": "小さめ〜中",
      "hitStrategy": {
        "topHit": "Jヒットはバリューだがターン注意。",
        "secondHit": "7ヒットはSDV。",
        "bottomHit": "4ヒットは慎重。",
        "noHit": "オーバーカード2枚はCB候補。"
      },
      "drawStrategy": "T9/98に少し接続あり。",
      "dangerTurns": "T/9/8、同スート",
      "sharkSummary": "Dry寄りだが中カードでCallerも少し絡む。"
    },
    {
      "id": "FG005",
      "board": "T62r",
      "category": "Dry",
      "advantage": "PFRやや有利",
      "cbFrequency": "中",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Tヒットは中程度の価値。",
        "secondHit": "6ヒットはポット管理。",
        "bottomHit": "2ヒットは守備。",
        "noHit": "AK/AQ/KQは小CBまたはチェック。"
      },
      "drawStrategy": "ストレートドロー少なめ。",
      "dangerTurns": "A/K/Q/J、7/8/9",
      "sharkSummary": "低めDryはPFR有利が少し弱まる。"
    },
    {
      "id": "FG006",
      "board": "AJ5r",
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小〜中CB",
      "hitStrategy": {
        "topHit": "A/Jヒットはバリュー。Aキッカー差に注意。",
        "secondHit": "Jヒットは中価値。A相手に注意。",
        "bottomHit": "5ヒットは守備寄り。",
        "noHit": "KQ/KT/QTはガットやバックドアでCB候補。"
      },
      "drawStrategy": "ガットが少し存在。",
      "dangerTurns": "K/Q/T、同スート",
      "sharkSummary": "AとJでPFRの強いレンジが活きる。"
    },
    {
      "id": "FG007",
      "board": "KJ4r",
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "cbFrequency": "中〜高",
      "recommendedSize": "小〜中CB",
      "hitStrategy": {
        "topHit": "Kヒットは強い。Jも中価値。",
        "secondHit": "JヒットはSDV。",
        "bottomHit": "4ヒットは慎重。",
        "noHit": "AQ/QT/ATなどにドロー要素。"
      },
      "drawStrategy": "ガットやバックドアあり。",
      "dangerTurns": "A/Q/T、同スート",
      "sharkSummary": "高カード2枚でPFR有利だが接続もある。"
    },
    {
      "id": "FG008",
      "board": "QT4r",
      "category": "Semi Dry",
      "advantage": "ほぼ互角寄り",
      "cbFrequency": "中",
      "recommendedSize": "中CB/チェック混合",
      "hitStrategy": {
        "topHit": "Q/Tヒットは価値あり。",
        "secondHit": "Tヒットは守備も必要。",
        "bottomHit": "4ヒットは弱い。",
        "noHit": "AK/KJ/J9などのドローが多い。"
      },
      "drawStrategy": "OESD/ガットが多め。",
      "dangerTurns": "K/J/9、同スート",
      "sharkSummary": "高カード連結で双方が絡む。"
    },
    {
      "id": "FG009",
      "board": "T84r",
      "category": "Semi Dry",
      "advantage": "ほぼ互角",
      "cbFrequency": "中",
      "recommendedSize": "中CB/チェック混合",
      "hitStrategy": {
        "topHit": "Tヒットはそこそこ強い。",
        "secondHit": "8ヒットはポット管理。",
        "bottomHit": "4ヒットは慎重。",
        "noHit": "オーバーカード＋バックドアは選択的。"
      },
      "drawStrategy": "97/J9/76などが絡む。",
      "dangerTurns": "J/9/7/6、同スート",
      "sharkSummary": "中カードはCallerもヒットしやすい。"
    },
    {
      "id": "FG010",
      "board": "976r",
      "category": "Semi Dry",
      "advantage": "Caller有利寄り",
      "cbFrequency": "低〜中",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "9ヒットでも過信しない。",
        "secondHit": "7/6ヒットは絡むが脆い。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "ノーヒットは無理しない。"
      },
      "drawStrategy": "T8/85/98など多数。",
      "dangerTurns": "T/8/5、同スート",
      "sharkSummary": "中低連結はCallerのレンジに強く当たる。"
    },
    {
      "id": "FG011",
      "board": "JT9ss",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "cbFrequency": "低〜中",
      "recommendedSize": "大きめ/チェック混合",
      "hitStrategy": {
        "topHit": "トップヒットでも脆い。強キッカーとドロー確認。",
        "secondHit": "セカンドヒットは慎重。",
        "bottomHit": "ボトムヒットは弱いSDV。",
        "noHit": "ノーヒットでも強ドローなら攻められる。"
      },
      "drawStrategy": "FD/OESD/コンボドロー多数。",
      "dangerTurns": "Q/K/8/同スート完成",
      "sharkSummary": "超ウェット。1ペアの価値が大きく下がる。"
    },
    {
      "id": "FG012",
      "board": "T98ss",
      "category": "Wet",
      "advantage": "Caller有利寄り",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "Tヒットでもかなり脆い。",
        "secondHit": "9/8ヒットは守備寄り。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "ノーヒットは強ドロー以外控えめ。"
      },
      "drawStrategy": "FD/OESD/コンボ多数。",
      "dangerTurns": "J/7/Q/同スート",
      "sharkSummary": "Callerのコネクターが強く当たりやすい。"
    },
    {
      "id": "FG013",
      "board": "987ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "9ヒットでも強くない。",
        "secondHit": "8/7ヒットはドロー付きなら続行。",
        "bottomHit": "下ペア単体は弱い。",
        "noHit": "強ドロー以外は無理しない。"
      },
      "drawStrategy": "OESD/FD/2ペア/セット多数。",
      "dangerTurns": "T/6/J/同スート",
      "sharkSummary": "低中連結ウェットはCaller有利の代表。"
    },
    {
      "id": "FG014",
      "board": "876ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "8ヒットはドロー込みで評価。",
        "secondHit": "7/6は弱め。",
        "bottomHit": "ボトムペアは守備。",
        "noHit": "ノーヒットはほぼ諦め。"
      },
      "drawStrategy": "ストレート・FD多数。",
      "dangerTurns": "9/5/T/同スート",
      "sharkSummary": "PFRは慎重に。Callerの強い役が多い。"
    },
    {
      "id": "FG015",
      "board": "765ss",
      "category": "Wet",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "7ヒットでも脆い。",
        "secondHit": "6/5ヒットはドロー付きなら継続。",
        "bottomHit": "ボトムは慎重。",
        "noHit": "ノーヒットは基本控えめ。"
      },
      "drawStrategy": "FD/OESD/コンボ多数。",
      "dangerTurns": "8/4/9/同スート",
      "sharkSummary": "低連結ツートーンはCallerが非常に強い。"
    },
    {
      "id": "FG016",
      "board": "653r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "トップペアでも中程度。",
        "secondHit": "6/5/3ヒットは相手の強いレンジに注意。",
        "bottomHit": "下ペアは守備。",
        "noHit": "PFRの高カード空振りは無理しない。"
      },
      "drawStrategy": "74/42/87など。",
      "dangerTurns": "4/7/8/2",
      "sharkSummary": "低ボードはCallerの小ポケットとSCが強い。"
    },
    {
      "id": "FG017",
      "board": "542r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "5ヒットは中程度。",
        "secondHit": "4/2は弱め。",
        "bottomHit": "ボトムは守備。",
        "noHit": "ノーヒットは基本チェック。"
      },
      "drawStrategy": "A3/63/76など。",
      "dangerTurns": "3/6/A/7",
      "sharkSummary": "低連結はCaller有利。A3にも注意。"
    },
    {
      "id": "FG018",
      "board": "432r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "4ヒットでもかなり脆い。",
        "secondHit": "3/2は弱い。",
        "bottomHit": "ボトムは慎重。",
        "noHit": "ノーヒットは諦め寄り。"
      },
      "drawStrategy": "A5/65/56など。",
      "dangerTurns": "A/5/6",
      "sharkSummary": "ホイール系が多く、PFRは慎重。"
    },
    {
      "id": "FG019",
      "board": "754r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "7ヒットは中程度。",
        "secondHit": "5/4は守備。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "高カード空振りは無理しない。"
      },
      "drawStrategy": "86/63/76など。",
      "dangerTurns": "8/6/3",
      "sharkSummary": "CallerのSC・小ポケットが活きる。"
    },
    {
      "id": "FG020",
      "board": "864r",
      "category": "Low",
      "advantage": "Caller有利",
      "cbFrequency": "低〜中",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "8ヒットはやや価値あり。",
        "secondHit": "6/4は守備。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "ノーヒットはバックドア中心。"
      },
      "drawStrategy": "75/97/53など。",
      "dangerTurns": "7/5/9",
      "sharkSummary": "中低連結はCaller優位になりやすい。"
    },
    {
      "id": "FG021",
      "board": "KK4r",
      "category": "Paired",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Kヒットは非常に強い。",
        "secondHit": "4ヒットは弱めのSDV。",
        "bottomHit": "ボトム相当は慎重。",
        "noHit": "ノーヒットでもPFRは小CB候補。"
      },
      "drawStrategy": "ドロー少ない。",
      "dangerTurns": "A/Q/J/T",
      "sharkSummary": "高ペアボードはPFRのレンジ優位。"
    },
    {
      "id": "FG022",
      "board": "QQ2r",
      "category": "Paired",
      "advantage": "PFR有利",
      "cbFrequency": "高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Qヒットは強い。",
        "secondHit": "2ヒットは弱いSDV。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "PFRは小CBしやすい。"
      },
      "drawStrategy": "ドロー少ない。",
      "dangerTurns": "A/K/J/T",
      "sharkSummary": "ペアボードは小さく広くCBしやすい。"
    },
    {
      "id": "FG023",
      "board": "772r",
      "category": "Paired",
      "advantage": "ほぼ互角",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック混合",
      "hitStrategy": {
        "topHit": "7持ちは強いが双方に少ない。",
        "secondHit": "2ヒットは弱い。",
        "bottomHit": "ポケットはSDVあり。",
        "noHit": "ノーヒットは慎重。"
      },
      "drawStrategy": "ドロー少ない。",
      "dangerTurns": "A/K/Q/ターン高カード",
      "sharkSummary": "低ペアはPFR有利が弱まりやすい。"
    },
    {
      "id": "FG024",
      "board": "TT5r",
      "category": "Paired",
      "advantage": "PFR有利",
      "cbFrequency": "中〜高",
      "recommendedSize": "小さめCB",
      "hitStrategy": {
        "topHit": "Tヒットは強い。",
        "secondHit": "5ヒットは弱め。",
        "bottomHit": "ポケットはSDV。",
        "noHit": "PFRは小CB候補。"
      },
      "drawStrategy": "ドロー少なめ。",
      "dangerTurns": "A/K/Q/J",
      "sharkSummary": "中高ペアはPFRが主導しやすい。"
    },
    {
      "id": "FG025",
      "board": "993r",
      "category": "Paired",
      "advantage": "ほぼ互角",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック",
      "hitStrategy": {
        "topHit": "9持ちやポケットが重要。",
        "secondHit": "3ヒットは弱い。",
        "bottomHit": "下ペアは守備。",
        "noHit": "ノーヒットは控えめ。"
      },
      "drawStrategy": "ドロー少なめ。",
      "dangerTurns": "A/K/Q/T",
      "sharkSummary": "中ペアは双方に絡むため過信しない。"
    },
    {
      "id": "FG026",
      "board": "A72m",
      "category": "Monotone",
      "advantage": "PFR有利",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック混合",
      "hitStrategy": {
        "topHit": "Aヒットは強いがフラッシュに注意。",
        "secondHit": "7/2ヒットは守備。",
        "bottomHit": "ボトムは慎重。",
        "noHit": "同スートなしのブラフは慎重。"
      },
      "drawStrategy": "1枚フラッシュドローの価値が変化。",
      "dangerTurns": "4枚目同スート、K/Q",
      "sharkSummary": "モノトーンはレンジ有利でも慎重。"
    },
    {
      "id": "FG027",
      "board": "K83m",
      "category": "Monotone",
      "advantage": "PFR有利",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック混合",
      "hitStrategy": {
        "topHit": "Kヒットは価値ありだがスート確認。",
        "secondHit": "8/3は守備。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "ノーヒットは控えめ。"
      },
      "drawStrategy": "同スートA/Qが重要。",
      "dangerTurns": "4枚目同スート、A/Q/J",
      "sharkSummary": "フラッシュ完成済みがあるためサイズ控えめ。"
    },
    {
      "id": "FG028",
      "board": "Q74m",
      "category": "Monotone",
      "advantage": "PFRやや有利",
      "cbFrequency": "中",
      "recommendedSize": "小CB/チェック",
      "hitStrategy": {
        "topHit": "Qヒットは中価値。",
        "secondHit": "7/4は守備。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "ノーヒットはスート次第。"
      },
      "drawStrategy": "1枚高スートが重要。",
      "dangerTurns": "4枚目同スート、A/K",
      "sharkSummary": "モノトーンはトップペアでも過信しない。"
    },
    {
      "id": "FG029",
      "board": "T86m",
      "category": "Monotone",
      "advantage": "ほぼ互角",
      "cbFrequency": "低〜中",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "Tヒットでもかなり脆い。",
        "secondHit": "8/6は守備。",
        "bottomHit": "下ペアは慎重。",
        "noHit": "ノーヒットは控えめ。"
      },
      "drawStrategy": "フラッシュ＋ストレート要素。",
      "dangerTurns": "4枚目同スート、9/7/J",
      "sharkSummary": "モノトーン＋連結は慎重に。"
    },
    {
      "id": "FG030",
      "board": "987m",
      "category": "Monotone",
      "advantage": "Caller有利",
      "cbFrequency": "低",
      "recommendedSize": "チェック多め",
      "hitStrategy": {
        "topHit": "9ヒットでも弱い。",
        "secondHit": "8/7はドロー込みで判断。",
        "bottomHit": "下ペアは守備。",
        "noHit": "ノーヒットは基本控えめ。"
      },
      "drawStrategy": "フラッシュ・ストレート多数。",
      "dangerTurns": "4枚目同スート、T/6/J",
      "sharkSummary": "最も危険な部類。PFRは無理しない。"
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
  ]
};

let state = { mode: "home", order: [], index: 0, score: 0, total: 0, answered: false, selectedHand: null, currentStreak: 0, bestStreak: 0, unlockedRanks: [] };
const refModes = ["home", "rangeLibrary", "handLookup", "boardDictionary", "terms", "beginner", "rankGallery"];

function getQuestions(mode) {
  if (mode === "preflop") return DATA.preflopQuestions;
  if (mode === "boardAdvantage") return DATA.boardAdvantageQuestions;
  return DATA.preflopQuestions;
}
function modeTitle(mode) {
  return {
    home:"SHARK TRAINER",
    beginner:"はじめてのポーカー",
    preflop:"プリフロップクイズ",
    boardAdvantage:"ボードクイズ",
    rangeLibrary:"レンジライブラリ",
    handLookup:"ハンド逆引き",
    boardDictionary:"ボード辞典",
    terms:"用語集",
    rankGallery:"サメランク"
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
  document.querySelector("#modeTitle").textContent = modeTitle(state.mode);
  document.querySelector("#progress").textContent = `${state.index + 1} / ${list.length}`;
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
  document.querySelector("#phase").textContent = modeTitle(state.mode);
  renderSpotVisual(q);
  document.querySelector("#spot").textContent = q.spot || "-";
  document.querySelector("#hero").textContent = q.heroPosition || "-";
  document.querySelector("#hand").innerHTML = q.hand ? cardHand(q.hand) : "-";
  document.querySelector("#board").innerHTML = q.board ? boardCards(q.board) : "-";
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
function answer(num, clicked){
  if(state.answered) return;
  const q = currentQuestion();
  const ok = num === q.answer;
  state.answered = true;
  state.total++;
  if(ok) {
    state.score++;
    updateStreak(true);
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
  document.querySelector("#nextBtn").textContent = state.index + 1 === currentList().length ? "もう一周する" : "次の問題へ";
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
}
function sharkBox(text){ return `<div class="shark-teacher"><div class="mini-shark">🦈</div><div><b>サメ先生</b><p>${text}</p></div></div>`; }
function buildExplanation(q){
  if(q.type && q.type.startsWith("preflop")){
    const practical = `<p class="hint"><b>実戦メモ：</b>${q.practicalLabel || q.label}<br><b>頻度目安：</b>${q.frequencyHint || "-"}</p>`;
    return `${sharkBox(q.sharkTip || "")}<h3>プリフロップ解説</h3><p>${q.explanation}</p>${practical}`;
  }
  return `${sharkBox(q.sharkTip || "")}<h3>ボード解説</h3><p>${q.explanation}</p><p class="hint"><b>分類：</b>${q.category}<br><b>有利不利：</b>${q.advantage}</p>`;
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
  if(mode === "beginner") return renderBeginner();
  if(mode === "rangeLibrary") return renderRangeLibrary();
  if(mode === "handLookup") return renderHandLookup();
  if(mode === "boardDictionary") return renderBoardDictionary();
  if(mode === "terms") return renderTerms();
}

function loadProgress(){
  try{
    state.bestStreak = Number(localStorage.getItem("sharkBestStreak") || 0);
    state.currentStreak = Number(localStorage.getItem("sharkCurrentStreak") || 0);
    state.unlockedRanks = JSON.parse(localStorage.getItem("sharkUnlockedRanks") || "[]");
  }catch(e){
    state.bestStreak = 0; state.currentStreak = 0; state.unlockedRanks = [];
  }
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
function renderHome(){
  document.querySelector("#quizArea").style.display = "none";
  document.querySelector("#refArea").style.display = "block";
  document.querySelector("#modeTitle").textContent = "SHARK TRAINER";
  document.querySelector("#progress").textContent = "-";
  document.querySelector("#score").textContent = "-";
  const quote = DATA.sharkQuotes[Math.floor(Math.random() * DATA.sharkQuotes.length)];
  document.querySelector("#refArea").innerHTML = `
    <section class="home-hero">
      <div class="home-shark">🦈</div>
      <p class="home-kicker">POKER RANGE TRAINING</p>
      <h1>SHARK TRAINER</h1>
      <p class="home-sub">MASTER YOUR RANGE</p>
      <p class="home-copy">GTOレンジを、実戦で使える形に。</p>

      <div class="home-stats">
        <div><span>🔥 Current</span><strong>${state.currentStreak}</strong><small>連続正解</small></div>
        <div><span>👑 Best</span><strong>${state.bestStreak}</strong><small>最高記録</small></div>
        <div><span>🏆 Rank</span><strong>${currentRank()}</strong><small>現在ランク</small></div>
      </div>

      <button class="train-now" onclick="startMode('preflop')">🎯 TRAIN NOW</button>

      <div class="home-menu">
        <button onclick="startMode('rangeLibrary')">📚 レンジ</button>
        <button onclick="startMode('handLookup')">🔍 逆引き</button>
        <button onclick="startMode('boardDictionary')">🃏 ボード事典</button>
        <button onclick="startMode('beginner')">📖 基礎ルール</button>
        <button onclick="startMode('rankGallery')">🏆 サメランク</button>
      </div>

      <div class="home-quote">🦈 ${quote}</div>
    </section>
  `;
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
    <section class="card">
      <h2>🎓 はじめてのポーカー</h2>
      <p class="note">ポジションと基本用語だけ押さえれば、このアプリを使い始められます。</p>
      <div class="poker-table">
        <div class="pos utg">UTG</div><div class="pos hj">HJ</div><div class="pos co">CO</div>
        <div class="pos btn">BTN</div><div class="pos sb">SB</div><div class="pos bb">BB</div>
        <div class="dealer">♠ ♥ ♦ ♣</div>
      </div>
      <h3>ポジション</h3>
      <div class="dictionary">${DATA.beginner.positions.map(p => `<div class="dict-card"><h3>${p.name}</h3><p>${p.body}</p></div>`).join("")}</div>
      ${sharkBox("BTNは一番有利、UTGは一番不利。だからBTNは広く、UTGは狭く参加するよ。")}
      <h3>基礎用語</h3>
      <div class="dictionary">${DATA.beginner.terms.map(t => `<div class="dict-card"><h3>${t.term}</h3><p>${t.body}</p></div>`).join("")}</div>
      <h3>役の強さ</h3>
      <ol class="hand-ranks">${DATA.beginner.hands.map(h => `<li>🃏 ${h}</li>`).join("")}</ol>
    </section>`;
}
function renderRangeLibrary(){
  const area = document.querySelector("#refArea");
  const spots = Object.keys(DATA.rangeLibrary);
  area.innerHTML = `
    <section class="card ref-controls">
      <h2>🃏 レンジライブラリ</h2>
      <p class="note">スポットごとの推奨レンジを確認できます。セルをタップすると、そのハンドの使い方を一覧で見られます。</p>
      <label>スポット<select id="refSpot"></select></label>
      <label>アクション<select id="refAction"></select></label>
      <div id="rangeGrid"></div>
      <div id="reversePanel"></div>
    </section>`;
  const spotSel = document.querySelector("#refSpot");
  const actionSel = document.querySelector("#refAction");
  spots.forEach(s => spotSel.add(new Option(s, s)));
  function updateActions(){
    actionSel.innerHTML = "";
    Object.keys(DATA.rangeLibrary[spotSel.value].actions).forEach(a => actionSel.add(new Option(a, a)));
    updateGrid();
  }
  function updateGrid(){
    const keep = new Set(DATA.rangeLibrary[spotSel.value].actions[actionSel.value]);
    document.querySelector("#rangeGrid").innerHTML = makeRangeGrid(keep, true);
    document.querySelector("#reversePanel").innerHTML = "";
  }
  spotSel.onchange = updateActions; actionSel.onchange = updateGrid; updateActions();
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
  const boards = DATA.boardGuide || [];
  area.innerHTML = `
    <section class="card">
      <h2>📖 ボード事典</h2>
      <p class="note">分類・有利不利に加えて、ヒット別のフロップ攻略を確認できます。</p>
      <div class="board-filter">
        <button class="filter-btn active" onclick="renderBoardGuideCards('all', this)">すべて</button>
        <button class="filter-btn" onclick="renderBoardGuideCards('Dry', this)">Dry</button>
        <button class="filter-btn" onclick="renderBoardGuideCards('Semi Dry', this)">Semi Dry</button>
        <button class="filter-btn" onclick="renderBoardGuideCards('Wet', this)">Wet</button>
        <button class="filter-btn" onclick="renderBoardGuideCards('Low', this)">Low</button>
        <button class="filter-btn" onclick="renderBoardGuideCards('Paired', this)">Paired</button>
        <button class="filter-btn" onclick="renderBoardGuideCards('Monotone', this)">Monotone</button>
      </div>
      <div id="boardGuideCards"></div>
    </section>
  `;
  renderBoardGuideCards("all");
}
function renderBoardGuideCards(filter="all", btn=null){
  if(btn){
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  const boards = (DATA.boardGuide || []).filter(b => filter === "all" || b.category === filter);
  const target = document.querySelector("#boardGuideCards");
  if(!target) return;
  target.innerHTML = `<div class="board-guide-list">${boards.map(renderBoardGuideCard).join("")}</div>`;
}
function renderBoardGuideCard(b){
  return `
    <article class="board-guide-card">
      <div class="board-guide-head">
        <div>
          <h3>${boardCards(b.board)}</h3>
          <div class="guide-tags">
            <span>${b.category}</span>
            <span>${b.advantage}</span>
            <span>CB ${b.cbFrequency}</span>
            <span>${b.recommendedSize}</span>
          </div>
        </div>
      </div>

      <div class="hit-grid">
        <div class="hit-card"><b>トップヒット</b><p>${b.hitStrategy.topHit}</p></div>
        <div class="hit-card"><b>セカンドヒット</b><p>${b.hitStrategy.secondHit}</p></div>
        <div class="hit-card"><b>ボトムヒット</b><p>${b.hitStrategy.bottomHit}</p></div>
        <div class="hit-card"><b>ノーヒット</b><p>${b.hitStrategy.noHit}</p></div>
      </div>

      <div class="guide-row">
        <div><b>ドロー攻略</b><p>${b.drawStrategy}</p></div>
        <div><b>危険ターン</b><p>${b.dangerTurns}</p></div>
      </div>

      ${sharkBox(b.sharkSummary)}
    </article>
  `;
}
function renderTerms(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `<section class="card"><h2>📘 用語集</h2>${DATA.terms.map(t => `<div class="term"><h3>${t.term}</h3><p>${t.body}</p></div>`).join("")}</section>`;
}
function suitClass(suit){
  return (suit === "♥" || suit === "♦") ? "red" : "black";
}
function card(rank, suit){
  return `<span class="mini-card ${suitClass(suit)}"><span class="rank">${rank}</span><span class="suit">${suit}</span></span>`;
}
function cardHand(hand){
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
  document.querySelector("#nextBtn").onclick = next;
  document.querySelector("#shuffleBtn").onclick = randomNext;
  document.querySelector("#resetBtn").onclick = resetSession;
  loadProgress();
  startMode("home");
});
