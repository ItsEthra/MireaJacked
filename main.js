let s = document.createElement('script')
s.text = `
  console.log('Injected MireaJacked made by @ItsEthra with the hope of not writing javascript ever again');
  M = { mod_quiz: null };
  Object.freeze(M);
`
document.documentElement.appendChild(s)
