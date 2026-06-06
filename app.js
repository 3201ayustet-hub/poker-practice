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
    "explainPreflop": "A5sはAブロッカー＋ホイール可能性があり、UTG相手の3betブラフ候補。",
    "explainBoard": "A72rはUTGがAA/AK/AQを多く持つドライAハイ。",
    "explainHand": "A5sはAヒットするがキッカー負けに注意。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "99は3bet Valueには足りないが、IPでセットやミドルボードを戦えるためCall。",
    "explainBoard": "962rはBTN側が99/66/22や低いコネクターを持ちやすい。",
    "explainHand": "99はトップセット。かなり強く戦える。"
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
    "explainPreflop": "AQoはUTG相手に強いが、3bet固定ではなくMix Value。",
    "explainBoard": "K83rはUTGがAK/KQs/KKを多く持つドライKハイ。",
    "explainHand": "AQoはAハイ。レンジ有利な相手に無理しない。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "KTsはスーテッド＋接続性があり、低頻度のMix Bluff候補。",
    "explainBoard": "JT8ssはBTN側のT9s/98s/87sなどが強く機能するウェットボード。",
    "explainHand": "KTsはドローに絡みやすく攻撃材料がある。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "88はセットマインとミドルボードで戦えるためCall。",
    "explainBoard": "654rはBTN側が65s/54s/76s/小ポケットを多く持つ。",
    "explainHand": "88はオーバーペアだが、相手のナッツにも注意。"
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
    "explainPreflop": "JJは強いがUTG相手では3betとCallが混ざるMix Value。",
    "explainBoard": "QQ2rはPFR側が高いポケットや強いブロードウェイを多く持つ。",
    "explainHand": "JJはショーダウン価値があるがQxには負ける。"
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
    "explainPreflop": "AJsは強いスーテッドブロードウェイでCall中心。",
    "explainBoard": "AJ5rはUTGがAA/JJ/AK/AQ/AJを多く持つ。",
    "explainHand": "自分はツーペア級だが、レンジ全体ではPFR有利。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "76sはIPで実現率が高く、ナッツを作れるためCall候補。",
    "explainBoard": "765ssは低く連結したウェットボードでBTN側が強い。",
    "explainHand": "76sはツーペアや強いドローに絡む。"
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
    "explainPreflop": "KQoはUTG相手では扱いが難しいがMix Value寄り。",
    "explainBoard": "A83rはUTGがAA/AK/AQを多く持つ典型的なPFR有利。",
    "explainHand": "KQoはこのボードでは弱く、無理しない。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "QJsはスーテッド＋接続性がありIPでCallしやすい。",
    "explainBoard": "QT9rはBTNのJTs/T9s/98sが強く機能する。",
    "explainHand": "QJsはトップペア＋ストレート関連で相性が良い。"
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
    "explainPreflop": "BBのA5sはAブロッカーで3betブラフ候補。",
    "explainBoard": "A72rはBTNが強いAxも多くPFR有利。",
    "explainHand": "Aヒットだがキッカー負けに注意。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "BBの99は強く、3bet/Callが混ざる。",
    "explainBoard": "962rはBBが広く守り99/66/22を持つ。",
    "explainHand": "99はトップセット。"
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
    "explainPreflop": "BTNの広いオープンに対してAQoは3bet Value。",
    "explainBoard": "K83rはBTN側のKxと強レンジが多い。",
    "explainHand": "AQoはAハイで慎重に。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "KTsはBBの3betブラフ候補。",
    "explainBoard": "JT8ssはBBも多くヒットするウェットボード。",
    "explainHand": "KTsは強いドローに絡みやすい。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "88はBBでMix Value。",
    "explainBoard": "654rはBBの低カード・コネクターが多く強い。",
    "explainHand": "88はオーバーペア。"
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
    "explainPreflop": "JJはBTNオープンに対して3bet Value。",
    "explainBoard": "QQ2rはPFRの高カード・強ポケットが活きる。",
    "explainHand": "JJは強いがQxに注意。"
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
    "explainPreflop": "AJsはBBでMix Value。",
    "explainBoard": "AJ5rはBTNが強いAxを多く持つ。",
    "explainHand": "AJsは強いがレンジ全体はPFR有利。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "76sはBBで3betブラフ/Call候補。",
    "explainBoard": "765ssはBBの広い守備レンジが強くヒット。",
    "explainHand": "76sは非常に強く絡む。"
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
    "explainPreflop": "KQoは強いがMix Value。",
    "explainBoard": "A83rはBTNがAを多く持つ。",
    "explainHand": "KQoはこのボードでは弱い。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "QJsは強いスーテッド系でMix Value。",
    "explainBoard": "QT9rはBB側のコネクターが強く機能。",
    "explainHand": "トップペア＋ストレート関連。"
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
    "explainPreflop": "A5sはBBでブロッカー3betブラフ候補。",
    "explainBoard": "UTGはAA/AK/AQを多く持つ。",
    "explainHand": "Aヒットでもキッカーに注意。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "99はBBでCall中心。",
    "explainBoard": "低めボードはBB側がセットや低カードを多く持つ。",
    "explainHand": "トップセットで強い。"
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
    "explainPreflop": "AQoは強いがUTG相手ではMix Value。",
    "explainBoard": "K83rはUTGの強いKxが多い。",
    "explainHand": "Aハイで無理しない。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "KTsはスーテッドで3betブラフ候補。",
    "explainBoard": "JT8ssはBB側がドローを多く持つ。",
    "explainHand": "強いドローに絡みやすい。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "88はBBでCall中心。",
    "explainBoard": "654rはBBが低いカードを多く持つ。",
    "explainHand": "オーバーペアだがドローに注意。"
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
    "explainPreflop": "JJはUTG相手にMix Value。",
    "explainBoard": "QQ2rはUTG側が有利になりやすい。",
    "explainHand": "Qxには負ける。"
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
    "explainPreflop": "AJsはBBでCall可能な強いハンド。",
    "explainBoard": "AJ5rはUTGが強いAxを多く持つ。",
    "explainHand": "自分は強いがレンジ全体はPFR有利。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "76sはBBで守る候補。",
    "explainBoard": "765ssはBBが強くヒットする。",
    "explainHand": "ツーペア・ドローに絡む。"
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
    "explainPreflop": "KQoはBBでCall候補。",
    "explainBoard": "A83rはUTGのAxが多い。",
    "explainHand": "無理に抵抗しない。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "QJsはBBでCallしやすい。",
    "explainBoard": "QT9rはBB側が多くのコネクターを持つ。",
    "explainHand": "トップペア＋ストレート関連。"
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
    "explainPreflop": "AQsは強いがUTG相手ではMix Value。",
    "explainBoard": "A72rはUTGがAA/AK/AQを多く持つ。",
    "explainHand": "トップペア強キッカー。"
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
    "explainPreflop": "JJはMix Value。",
    "explainBoard": "QQ2rはPFR側が有利。",
    "explainHand": "ショーダウン価値はあるがQxに注意。"
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
    "explainPreflop": "A5sはAブロッカーでMix Bluff。",
    "explainBoard": "K83rはUTGのAK/KQs/KKが強い。",
    "explainHand": "Aハイで無理しない。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "KQsはMix Value。",
    "explainBoard": "JT8ssはBTN側の接続ハンドが強い。",
    "explainHand": "ドローに絡みやすい。"
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
    "boardLabel": "BTN/Caller有利",
    "explainPreflop": "TTはMix Value。",
    "explainBoard": "654rはBTNが低いセットやコネクターを多く持つ。",
    "explainHand": "オーバーペアだが低連結に注意。"
  }
];

const PREFLOP_CHOICES = ["Value", "Mix Value", "Mix Bluff", "Call", "Fold"];
const BOARD_CHOICES = ["PFR有利", "BTN/Caller有利", "ほぼ互角"];

let order = [...Array(QUESTIONS.length).keys()];
let index = 0, step = "preflop", scorePre = 0, scoreBoard = 0;

function currentQuestion(){ return QUESTIONS[order[index]]; }

function render(){
  const q = currentQuestion();
  document.querySelector("#progress").textContent = `${index + 1} / ${QUESTIONS.length}`;
  document.querySelector("#score").textContent = `Preflop ${scorePre} / Board ${scoreBoard}`;
  document.querySelector("#phase").textContent = step === "preflop" ? "STEP1：プリフロップアクション" : "STEP2：フロップ有利不利";
  document.querySelector("#spot").textContent = q.spot;
  document.querySelector("#hero").textContent = q.heroPosition;
  document.querySelector("#hand").textContent = q.hand;
  document.querySelector("#flop").textContent = step === "board" ? q.flop : "STEP1正解後に表示";
  document.querySelector("#feedback").innerHTML = "";
  document.querySelector("#explanation").innerHTML = "";
  document.querySelector("#nextBtn").disabled = true;
  renderChoices();
}

function renderChoices(){
  const box = document.querySelector("#choices");
  box.innerHTML = "";
  const choices = step === "preflop" ? PREFLOP_CHOICES : BOARD_CHOICES;
  choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `<span>${idx + 1}</span>${choice}`;
    btn.onclick = () => answer(idx + 1, btn);
    box.appendChild(btn);
  });
}

function answer(num, clicked){
  const q = currentQuestion();
  const correct = step === "preflop" ? q.preflopAnswer : q.boardAnswer;
  const isCorrect = num === correct;
  document.querySelectorAll(".choice").forEach((b, idx) => {
    b.disabled = true;
    if(idx + 1 === correct) b.classList.add("correct");
    if(b === clicked && !isCorrect) b.classList.add("wrong");
  });

  if(step === "preflop"){
    if(isCorrect) scorePre++;
    document.querySelector("#feedback").innerHTML = isCorrect ? "⭕ 正解！" : `❌ 不正解。正解は ${correct}. ${q.preflopLabel}`;
    document.querySelector("#explanation").innerHTML = `<h3>プリフロップ解説</h3><p>${q.explainPreflop}</p>`;
    document.querySelector("#nextBtn").textContent = "フロップ問題へ";
  } else {
    if(isCorrect) scoreBoard++;
    document.querySelector("#feedback").innerHTML = isCorrect ? "⭕ 正解！" : `❌ 不正解。正解は ${correct}. ${q.boardLabel}`;
    document.querySelector("#explanation").innerHTML = `<h3>ボード解説</h3><p>${q.explainBoard}</p><h3>ハンド解説</h3><p>${q.explainHand}</p>`;
    document.querySelector("#nextBtn").textContent = index + 1 === QUESTIONS.length ? "最初に戻る" : "次の問題へ";
  }
  document.querySelector("#nextBtn").disabled = false;
  document.querySelector("#score").textContent = `Preflop ${scorePre} / Board ${scoreBoard}`;
}

function next(){
  if(step === "preflop") step = "board";
  else {
    index++;
    if(index >= QUESTIONS.length){ index = 0; scorePre = 0; scoreBoard = 0; }
    step = "preflop";
  }
  render();
}

function shuffle(){
  for(let i = order.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  index = 0; step = "preflop"; scorePre = 0; scoreBoard = 0; render();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#nextBtn").onclick = next;
  document.querySelector("#shuffleBtn").onclick = shuffle;
  render();
});
