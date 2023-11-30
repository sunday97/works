// import 부분
import * as firebase from "./firebass.js";
const {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deletedatas,
  updateDoc,
  deleteField,
  updatedatas,
} = firebase;

// Global variable
const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#password-input");
const searchBtn = document.querySelector(".search-id-password");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

loginBtn.addEventListener("click", function () {
  isVaildId();
});

async function isVaildId() {
  const snapshot = await getDatas("user");
  const idArr = [];
  snapshot.forEach((doc) => {
    const { id } = doc.data();
    idArr.push(id);
  });
  console.log(idArr);
}
