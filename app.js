// app.js
// Firebase Firestore only version.
// 画像は圧縮してFirestoreに保存します。Storageは使いません。

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzzBelDWWLKKN2-UySFq1GkH6Njsj3dj4",
  authDomain: "gtover1-1df97.firebaseapp.com",
  projectId: "gtover1-1df97",
  storageBucket: "gtover1-1df97.firebasestorage.app",
  messagingSenderId: "1064649963090",
  appId: "1:1064649963090:web:e5aef25d81338215c7918b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const DEFAULT_OPTIONS = {
  players: ["2max", "3max", "4max", "5max", "6max", "9max"],
  stack: ["10bb", "15bb", "20bb", "25bb", "30bb", "40bb", "50bb", "100bb"],
  position: ["UTG", "HJ", "CO", "BTN", "SB", "BB"],
  action: ["Open", "Call", "3Bet", "4Bet", "All-in", "Fold"]
};

export const LABELS = {
  players: "参加人数",
  stack: "スタック",
  position: "ポジション",
  action: "アクション"
};

export function makeKey(item) {
  return [item.players, item.stack, item.position, item.action].join("__");
}

export function makeTitle(item) {
  return [item.players, item.stack, item.position, item.action].join(" / ");
}

export async function loadOptions() {
  const ref = doc(db, "settings", "options");
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      ...DEFAULT_OPTIONS,
      updatedAt: serverTimestamp()
    });
    return DEFAULT_OPTIONS;
  }

  return {
    ...DEFAULT_OPTIONS,
    ...snap.data()
  };
}

export async function saveOptions(options) {
  await setDoc(doc(db, "settings", "options"), {
    ...options,
    updatedAt: serverTimestamp()
  });
}

export function listenOptions(callback) {
  return onSnapshot(doc(db, "settings", "options"), async snap => {
    if (!snap.exists()) {
      await saveOptions(DEFAULT_OPTIONS);
      callback(DEFAULT_OPTIONS);
      return;
    }
    callback({ ...DEFAULT_OPTIONS, ...snap.data() });
  });
}

export async function saveImageItem(item) {
  const key = makeKey(item);
  await setDoc(doc(db, "images", key), {
    ...item,
    id: key,
    title: makeTitle(item),
    updatedAt: serverTimestamp()
  });
}

export async function deleteImageItem(item) {
  await deleteDoc(doc(db, "images", makeKey(item)));
}

export function listenImages(callback) {
  return onSnapshot(collection(db, "images"), snap => {
    const items = [];
    snap.forEach(docSnap => {
      items.push(docSnap.data());
    });

    items.sort((a, b) => {
      return makeTitle(a).localeCompare(makeTitle(b));
    });

    callback(items);
  });
}

export async function getImageByConditions(conditions) {
  const key = makeKey(conditions);
  const snap = await getDoc(doc(db, "images", key));
  return snap.exists() ? snap.data() : null;
}

export function compressImage(file, maxWidth = 1200, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");

        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL("image/jpeg", quality));
      };

      img.onerror = reject;
      img.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function setupSelect(select, values, placeholder = "SELECT") {
  const current = select.value;
  select.innerHTML = `<option value="">${placeholder}</option>`;

  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });

  if (values.includes(current)) {
    select.value = current;
  }
}
