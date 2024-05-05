// ==UserScript==
// @name Mirea Jacked
// @description Простое расширение которые возвращает возможность выделения, копирования и вставки в тестах МИРЭА.
// @version 1.0.1
// @author ItsEthra
// @downloadURL https://github.com/ItsEthra/MireaJacked.git
// @supportURL https://github.com/ItsEthra/MireaJacked/issues
// @match *://online-edu.mirea.ru/*
// @icon https://raw.githubusercontent.com/ItsEthra/MireaJacked/master/icon96.png
// @namespace MireaJacked
// @updateURL https://github.com/ItsEthra/MireaJacked/blob/master/main.js
// ==/UserScript==

let s = document.createElement('script')
s.text = `
  console.log('Injected MireaJacked v1.0.1 made by @ItsEthra with the hope of not writing javascript ever again');
  M = { mod_quiz: { secure_window: { init: null } } };
  Object.freeze(M.mod_quiz.secure_window.init);
`
document.documentElement.appendChild(s)
