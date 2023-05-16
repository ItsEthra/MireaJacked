let s = document.createElement('script')
s.text = `
  console.log('Injected MireaJacked v1.0.1 made by @ItsEthra with the hope of not writing javascript ever again');
  M = { mod_quiz: { secure_window: { init: null } } };
  Object.freeze(M.mod_quiz.secure_window.init);
`
document.documentElement.appendChild(s)
