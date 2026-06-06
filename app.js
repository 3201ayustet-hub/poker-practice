const QUESTIONS = [
  {
    "id": "001",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "A5s",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "A72r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "A5sはAブロッカーがあり、AA/AK/AQを相手から減らせます。ホイールストレートもあり、3betブラフ候補として優秀です。",
    "explainBoard": "A72rはドライなAハイボード。UTGはAA/AK/AQを多く持つためPFR有利です。",
    "explainHand": "A5sはAヒットしますがキッカーは弱め。ブラフ3bet候補として使う意味を理解する問題です。"
  },
  {
    "id": "002",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "99",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "962r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "99は3betバリューにはやや足りませんが、セットやミドルボードで強く戦えるためコール中心です。",
    "explainBoard": "962rのような低めボードはBTNコール側が99/66/22やコネクターを多く持ちます。",
    "explainHand": "このハンドでは99がトップセット。レンジとしてもナッツアドバンテージがBTN側に寄ります。"
  },
  {
    "id": "003",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "AQo",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "K83r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "AQoはUTG相手でも十分強く、コールと3betが混ざるバリュー寄りのミックスです。",
    "explainBoard": "K83rはドライなKハイボード。UTGはAK/KQs/KKなどを持ちやすくPFR有利です。",
    "explainHand": "AQo自体はこのボードではAハイ。レンジ全体の有利不利と自分の手の強さを分けて考えます。"
  },
  {
    "id": "004",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "KTs",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "JT8ss",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "KTsはバリューではありませんが、スーテッドかつ接続性があり、低頻度の3betブラフ候補です。",
    "explainBoard": "JT8ssはウェットで、BTN側がT9s/98s/87sなどを多く持ちます。",
    "explainHand": "KTsはガットやバックドア、スート次第で強いドローになりやすいハンドです。"
  },
  {
    "id": "005",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "88",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "654r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "88はコール中心。セットマインとミドルボードでのプレイアビリティがあります。",
    "explainBoard": "654rは低く連結したボード。BTNコール側が76s/65s/54sや小ポケットを多く持ちます。",
    "explainHand": "88はオーバーペアですが、ボードが低く連結しているため慎重な判断も必要です。"
  },
  {
    "id": "006",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "JJ",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "QQ2r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "JJは強いですがUTG相手では3bet固定ではなく、コールも混ざるバリュー寄りミックスです。",
    "explainBoard": "QQ2rのペアボードはPFR側が高いポケットや強いブロードウェイを多く持つため有利になりやすいです。",
    "explainHand": "JJはショーダウンバリューがありますが、Qペアボードでは過信しすぎないことが大切です。"
  },
  {
    "id": "007",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "AJs",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "AJ5r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "AJsは強くプレイしやすいスーテッドブロードウェイで、UTG相手にはコール中心です。",
    "explainBoard": "AJ5rはPFRがAA/JJ/AK/AQ/AJを多く持ち、PFR有利です。",
    "explainHand": "AJsはツーペア級。自分の手は強いですが、レンジ全体ではPFR有利と考えます。"
  },
  {
    "id": "008",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "76s",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "765ss",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "76sはIPで実現率が高く、ナッツを作れるためコール候補です。",
    "explainBoard": "765ssは低く連結したウェットボード。BTN側のコネクターが強く機能します。",
    "explainHand": "76sはこのボードでツーペア以上や強いドローを作りやすく、かなり強い部類です。"
  },
  {
    "id": "009",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "KQo",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "A83r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "KQoはUTG相手では扱いが難しいですが、ミックス寄りとして整理します。",
    "explainBoard": "A83rはUTGがAA/AK/AQを多く持つ典型的なPFR有利ボードです。",
    "explainHand": "KQoはこのボードではかなり弱いAなしハンド。レンジ有利な相手に無理しない判断が重要です。"
  },
  {
    "id": "010",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "QJs",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "QT9r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "QJsはスーテッド・接続性があり、IPでコールしやすいハンドです。",
    "explainBoard": "QT9rは連結ボードで、BTNのJTs/T9s/98sなどが強く機能します。",
    "explainHand": "QJsはトップペア＋ストレート関連があり、ボードとの相性が良いです。"
  },
  {
    "id": "011",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "A5s",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "A72r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "BBのA5sはAブロッカーとプレイアビリティがあり、3betブラフ候補です。",
    "explainBoard": "A72rはBTNが広いとはいえA高・強いAxも多く、PFR有利です。",
    "explainHand": "A5sはAヒット。強いAに支配される可能性もあるため、キッカー意識が重要です。"
  },
  {
    "id": "012",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "99",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "962r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "BBの99は強いディフェンスハンドで、3betもコールも混ざるバリュー寄りです。",
    "explainBoard": "962rはBBが広く守るため、99/66/22や9xが多くBB側がかなり戦えます。",
    "explainHand": "99はトップセット。自分の手もレンジ全体もかなり有利です。"
  },
  {
    "id": "013",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "AQo",
    "preflopAnswer": 1,
    "preflopLabel": "Value",
    "flop": "K83r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "BTNの広いオープンに対してAQoは十分強く、BB側の3bet Valueに分類します。",
    "explainBoard": "K83rはBTNがKxや強いレンジを多く持つためPFR有利です。",
    "explainHand": "AQoはAハイでショーダウンバリューはありますが、Kハイボードでは慎重に。"
  },
  {
    "id": "014",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "KTs",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "JT8ss",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "KTsはBBの3betブラフ候補。ブロッカーとスーテッドの価値があります。",
    "explainBoard": "JT8ssはBBもかなりヒットしますが、ここではボード分類としてコーラー側有利を意識します。",
    "explainHand": "KTsはドローやペア＋ドローを作りやすく、攻撃的に使える場面があります。"
  },
  {
    "id": "015",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "88",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "654r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "BBの88はコールも3betも可能な強めのディフェンスハンドです。",
    "explainBoard": "654rはBBが広く守るため、低カード・コネクター・小ポケットが多くBB側が強いです。",
    "explainHand": "88はオーバーペアでショーダウンバリューがあります。"
  },
  {
    "id": "016",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "JJ",
    "preflopAnswer": 1,
    "preflopLabel": "Value",
    "flop": "QQ2r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "BTNオープンに対してJJは十分強く、BBの3bet Valueです。",
    "explainBoard": "QQ2rはペアボードでPFR側が高カード・強いポケットを多く持ち有利になりやすいです。",
    "explainHand": "JJは強いショーダウンバリューがありますが、Qxの存在に注意します。"
  },
  {
    "id": "017",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "AJs",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "AJ5r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "AJsは強いスーテッドブロードウェイで、BBではMix Valueに入れます。",
    "explainBoard": "AJ5rはBTNが強いAxやブロードウェイを多く持つためPFR有利です。",
    "explainHand": "AJsはツーペア級でかなり強いですが、レンジ全体の有利不利は別に考えます。"
  },
  {
    "id": "018",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "76s",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "765ss",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "76sはBBで3betブラフにもコールにも使える候補として扱います。",
    "explainBoard": "765ssはBB側が非常に多くヒットしやすい低ウェットボードです。",
    "explainHand": "76sはツーペアや強いドローに絡みやすい非常に強いハンドです。"
  },
  {
    "id": "019",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "KQo",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "A83r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "KQoはBTNレンジに対して強いが、コールも3betも混ざるハンドです。",
    "explainBoard": "A83rはBTNがAを多く持つためPFR有利です。",
    "explainHand": "KQoはこのボードではかなり弱く、無理に粘る必要はありません。"
  },
  {
    "id": "020",
    "spot": "BTN Open → BB",
    "heroPosition": "BB",
    "hand": "QJs",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "QT9r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "QJsは強いスーテッドコネクテッド系でMix Valueに分類します。",
    "explainBoard": "QT9rはBB側のコールレンジが強くヒットするため、BB有利寄りです。",
    "explainHand": "QJsはトップペア＋強いストレート関連を持ちます。"
  },
  {
    "id": "021",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "A5s",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "A72r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "A5sはBBでブロッカーを使った3betブラフ候補です。",
    "explainBoard": "UTGはAA/AK/AQを多く持ち、A72rは強くPFR有利です。",
    "explainHand": "A5sはAヒットしますがキッカー負けに注意します。"
  },
  {
    "id": "022",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "99",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "962r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "99はUTG相手にBBでコールしやすい中ポケットです。",
    "explainBoard": "低めボードはBB側がセットや低カードを多く持ちます。ここではコーラー側有利として学習します。",
    "explainHand": "99はトップセットで非常に強いです。"
  },
  {
    "id": "023",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "AQo",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "K83r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "AQoは強いがUTG相手では扱いが難しく、Mix Valueとして整理します。",
    "explainBoard": "K83rはUTGが強いKxや高いポケットを多く持つためPFR有利です。",
    "explainHand": "AQoはAハイ。ポジション不利なので無理しない判断が重要です。"
  },
  {
    "id": "024",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "KTs",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "JT8ss",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "KTsはスーテッドでブロッカーもあり、3betブラフ候補です。",
    "explainBoard": "JT8ssはBB側が多くのコネクターやドローを持つためコーラー側有利です。",
    "explainHand": "KTsはストレートやフラッシュの可能性があり、強く発展しやすいです。"
  },
  {
    "id": "025",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "88",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "654r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "88はBBでコール中心。セットと低ボードでのプレイが見込めます。",
    "explainBoard": "654rはBB側が低いカード・コネクター・小ポケットを多く持つため有利です。",
    "explainHand": "88はオーバーペアですが、相手の強いドローにも注意します。"
  },
  {
    "id": "026",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "JJ",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "QQ2r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "JJはUTG相手に強いが、4betを受けると難しいためMix Valueです。",
    "explainBoard": "QQ2rは高いカード・ポケットが多いUTG側が有利です。",
    "explainHand": "JJは強いポケットですが、Qペアボードでは慎重に。"
  },
  {
    "id": "027",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "AJs",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "AJ5r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "AJsはBBでコール可能な強いスーテッドハンドです。",
    "explainBoard": "AJ5rはUTGがAA/JJ/AK/AQ/AJを多く持つためPFR有利です。",
    "explainHand": "AJsはツーペア級。ただしレンジ全体ではUTGが有利です。"
  },
  {
    "id": "028",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "76s",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "765ss",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "76sはBBで守る候補。OOPですがポットオッズとプレイアビリティがあります。",
    "explainBoard": "765ssはBBの広いディフェンスレンジが非常に強くヒットします。",
    "explainHand": "76sはツーペア・ドローに絡み、非常に強く戦えます。"
  },
  {
    "id": "029",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "KQo",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "A83r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "KQoはUTG相手にドミネート注意ですが、BBではコール候補にします。",
    "explainBoard": "A83rはUTGのAxが多くPFR有利です。",
    "explainHand": "KQoはこのボードでは弱いため、無理に抵抗しないことが大切です。"
  },
  {
    "id": "030",
    "spot": "UTG Open → BB",
    "heroPosition": "BB",
    "hand": "QJs",
    "preflopAnswer": 4,
    "preflopLabel": "Call",
    "flop": "QT9r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "QJsはBBでコールしやすいスーテッドブロードウェイです。",
    "explainBoard": "QT9rはBBが多くのコネクターやツーペア・ドローを持つためコーラー側有利です。",
    "explainHand": "QJsはトップペアとストレート関連でかなり戦えます。"
  },
  {
    "id": "031",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "AQs",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "A72r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "AQsは強いがUTG相手では3betとコールが混ざるMix Valueです。",
    "explainBoard": "A72rはUTGのAA/AK/AQが強くPFR有利です。",
    "explainHand": "AQsはトップペア強キッカーで非常に強いですが、AKやAAも相手にあります。"
  },
  {
    "id": "032",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "JJ",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "QQ2r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "JJはUTG相手に3betもコールもある強いミックスバリューです。",
    "explainBoard": "QQ2rはPFRが高いポケットやQxを持ちやすくPFR有利です。",
    "explainHand": "JJは強いショーダウンバリューですが、Qxには負けています。"
  },
  {
    "id": "033",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "A5s",
    "preflopAnswer": 3,
    "preflopLabel": "Mix Bluff",
    "flop": "K83r",
    "boardAnswer": 1,
    "boardLabel": "PFR有利",
    "explainPreflop": "A5sはAブロッカーとホイール可能性でMix Bluffに適します。",
    "explainBoard": "K83rはUTGのAK/KQs/KKが強く、PFR有利です。",
    "explainHand": "A5sはこのボードではAハイ。バックドアがないなら無理しすぎないことが重要です。"
  },
  {
    "id": "034",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "KQs",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "JT8ss",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "KQsは強いスーテッドブロードウェイで、Mix Valueに分類します。",
    "explainBoard": "JT8ssはBTN側のコネクターやスーテッドハンドが強く機能します。",
    "explainHand": "KQsはオープンエンドやフラッシュドローに絡みやすい強い候補です。"
  },
  {
    "id": "035",
    "spot": "UTG Open → BTN",
    "heroPosition": "BTN",
    "hand": "TT",
    "preflopAnswer": 2,
    "preflopLabel": "Mix Value",
    "flop": "654r",
    "boardAnswer": 2,
    "boardLabel": "BTN有利",
    "explainPreflop": "TTは強いがUTG相手ではMix Valueです。",
    "explainBoard": "654rはBTNコール側が低いセットやコネクターを多く持つためBTN有利です。",
    "explainHand": "TTはオーバーペアですが、低連結ボードでは相手のナッツも多いです。"
  }
];

const PREFLOP_CHOICES = [
  "Value",
  "Mix Value",
  "Mix Bluff",
  "Call",
  "Fold"
];

const BOARD_CHOICES = [
  "PFR有利",
  "BTN/Caller有利",
  "ほぼ互角"
];

let currentIndex = 0;
let step = "preflop";
let scorePre = 0;
let scoreBoard = 0;
let answeredPre = false;
let answeredBoard = false;
let order = [...Array(QUESTIONS.length).keys()];

function shuffleQuestions() {
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  currentIndex = 0;
  step = "preflop";
  scorePre = 0;
  scoreBoard = 0;
  answeredPre = false;
  answeredBoard = false;
  render();
}

function q() {
  return QUESTIONS[order[currentIndex]];
}

function updateStats() {
  document.getElementById("progress").textContent = `${currentIndex + 1} / ${QUESTIONS.length}`;
  document.getElementById("score").textContent = `Preflop ${scorePre} / Board ${scoreBoard}`;
}

function render() {
  answeredPre = false;
  answeredBoard = false;
  updateStats();
  const question = q();
  document.getElementById("spot").textContent = question.spot;
  document.getElementById("hand").textContent = question.hand;
  document.getElementById("flop").textContent = step === "board" ? question.flop : "STEP1正解後に表示";
  document.getElementById("phase").textContent = step === "preflop" ? "STEP1：プリフロップアクション" : "STEP2：フロップ有利不利";
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("explanation").innerHTML = "";
  document.getElementById("nextBtn").disabled = true;
  renderChoices();
}

function renderChoices() {
  const container = document.getElementById("choices");
  container.innerHTML = "";
  const choices = step === "preflop" ? PREFLOP_CHOICES : BOARD_CHOICES;
  choices.forEach((label, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `<span>${idx+1}</span> ${label}`;
    btn.onclick = () => answer(idx + 1, btn);
    container.appendChild(btn);
  });
}

function answer(num, btn) {
  const question = q();
  const correct = step === "preflop" ? question.preflopAnswer : question.boardAnswer;
  const isCorrect = num === correct;
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i + 1 === correct) b.classList.add("correct");
    if (b === btn && !isCorrect) b.classList.add("wrong");
  });
  if (step === "preflop") {
    if (!answeredPre && isCorrect) scorePre++;
    answeredPre = true;
    document.getElementById("feedback").innerHTML =
      isCorrect ? "⭕ 正解！次はフロップ判定です。" : `❌ 不正解。正解は ${correct}. ${question.preflopLabel}`;
    document.getElementById("explanation").innerHTML = `<h3>プリフロップ解説</h3><p>${question.explainPreflop}</p>`;
    document.getElementById("nextBtn").disabled = false;
    document.getElementById("nextBtn").textContent = "フロップ問題へ";
  } else {
    if (!answeredBoard && isCorrect) scoreBoard++;
    answeredBoard = true;
    document.getElementById("feedback").innerHTML =
      isCorrect ? "⭕ 正解！" : `❌ 不正解。正解は ${correct}. ${question.boardLabel}`;
    document.getElementById("explanation").innerHTML = `
      <h3>ボード解説</h3>
      <p>${question.explainBoard}</p>
      <h3>ハンド解説</h3>
      <p>${question.explainHand}</p>
    `;
    document.getElementById("nextBtn").disabled = false;
    document.getElementById("nextBtn").textContent = currentIndex + 1 === QUESTIONS.length ? "最初に戻る" : "次の問題へ";
  }
  updateStats();
}

function next() {
  if (step === "preflop") {
    step = "board";
    document.getElementById("flop").textContent = q().flop;
    render();
  } else {
    currentIndex++;
    if (currentIndex >= QUESTIONS.length) {
      currentIndex = 0;
      scorePre = 0;
      scoreBoard = 0;
    }
    step = "preflop";
    render();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nextBtn").onclick = next;
  document.getElementById("shuffleBtn").onclick = shuffleQuestions;
  render();
});