import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth/cordova";
// cordova는 유료모드이므로 쓸 수가 없음

const firebaseConfig = {
  apiKey: "AIzaSyDgz5R1Ddh362Hm38M6PByzZPfiXphFscI",
  authDomain: "twitter-reloaded-bd0ac.firebaseapp.com",
  projectId: "twitter-reloaded-bd0ac",
  storageBucket: "twitter-reloaded-bd0ac.firebasestorage.app",
  messagingSenderId: "1041816766505",
  appId: "1:1041816766505:web:d922d250781313b0a3b438",
};
// 이거는 내 고유키임

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
