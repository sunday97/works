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

const idSearchNameInput = document.querySelector(".id-search #user-name");
const idSearchEmailInput = document.querySelector(".id-search #user-email");
const idSearchTelInput = document.querySelector(".id-search #user-tel");
const idSearchForEmailBtn = document.querySelector("id-search-for-email-btn");
const idSearchForTelBtn = document.querySelector("id-search-for-tel-btn");

const pwSearchIdInput = document.querySelector(".pw-serch #user-id");
const pwSearchEmailInput = document.querySelector(".pw-serch #user-email");
const pwSearchtelInput = document.querySelector(".pw-serch #user-tel");
const pwSearchBtn = document.querySelector("pw-search-btn");
