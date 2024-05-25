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

let s = document.createElement('script');
s.text = `
  console.log('Injected MireaJacked');

  const quizTimer = document.getElementById('quiz-timer');

  if (quizTimer) {
    quizTimer.style.backgroundColor = '#f0f0f0'; 
  }

  const originalOpen = window.open; 
  window.open = function(url, windowName, windowFeatures) {
    if (!url || url === 'about:blank') {
      return originalOpen.apply(this, arguments);
    }
    return originalOpen(url, '_blank');
  };

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86)) { // Ctrl+C or Ctrl+V
      if (event.keyCode === 67) { // Ctrl+C
        navigator.clipboard.writeText(window.getSelection().toString()).then(function() {
          console.log('Copying to clipboard was successful!');
        }, function(err) {
          console.error('Could not copy text: ', err);
        });
      } else if (event.keyCode === 86) { // Ctrl+V
        navigator.clipboard.readText().then(text => {
          document.activeElement.value += text; 
          console.log('Pasting from clipboard was successful!');
        }).catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        });
      }
      event.preventDefault(); 
      event.stopPropagation(); 
    }
  }, true); 

  M.mod_quiz.secure_window = {
    init: function(Y) {
      console.log('Secure window functions have been completely overridden.');
      Y.delegate = function(type, fn, el, filter) { /* 12345 */ };
      Y.on = function(type, fn, el, key) { /* 12345 */ };
    },
    prevent_selection: function(e) { return false; },
    prevent: function(e) { return false; },
    prevent_mouse: function(e) { return false; },
    is_content_editable: function(n) { return true; },
    close: function(url, delay) { /* 12345 */ },
    init_close_button: function(Y, url) { /* 12345 */ }
  };

document.addEventListener('copy', function(event) {
  event.preventDefault(); 
  navigator.clipboard.writeText(window.getSelection().toString()).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
});

document.addEventListener('paste', function(event) {
  event.preventDefault();
  navigator.clipboard.readText().then(text => {
    document.activeElement.value += text;
    console.log('Pasting from clipboard was successful!');
  }).catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
});


 
  document.addEventListener('contextmenu', function(event) {
    event.stopPropagation(); 
  }, true); 

  window.alert = function() { console.log('Blocked an alert attempt.'); };

  window.M = M;
`;
document.documentElement.appendChild(s);

