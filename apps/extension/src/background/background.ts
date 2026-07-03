/// <reference types="chrome" />

chrome.runtime.onInstalled.addListener(() => {
  console.log("⚡ Pulse installed.");
});