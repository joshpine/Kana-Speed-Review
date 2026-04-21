(() => {
  const HIRAGANA = [
    // gojuon
    { c: "あ", r: "a" },  { c: "い", r: "i" },  { c: "う", r: "u" },  { c: "え", r: "e" },  { c: "お", r: "o" },
    { c: "か", r: "ka" }, { c: "き", r: "ki" }, { c: "く", r: "ku" }, { c: "け", r: "ke" }, { c: "こ", r: "ko" },
    { c: "さ", r: "sa" }, { c: "し", r: "shi" },{ c: "す", r: "su" }, { c: "せ", r: "se" }, { c: "そ", r: "so" },
    { c: "た", r: "ta" }, { c: "ち", r: "chi" },{ c: "つ", r: "tsu" },{ c: "て", r: "te" }, { c: "と", r: "to" },
    { c: "な", r: "na" }, { c: "に", r: "ni" }, { c: "ぬ", r: "nu" }, { c: "ね", r: "ne" }, { c: "の", r: "no" },
    { c: "は", r: "ha" }, { c: "ひ", r: "hi" }, { c: "ふ", r: "fu" }, { c: "へ", r: "he" }, { c: "ほ", r: "ho" },
    { c: "ま", r: "ma" }, { c: "み", r: "mi" }, { c: "む", r: "mu" }, { c: "め", r: "me" }, { c: "も", r: "mo" },
    { c: "や", r: "ya" }, { c: "ゆ", r: "yu" }, { c: "よ", r: "yo" },
    { c: "ら", r: "ra" }, { c: "り", r: "ri" }, { c: "る", r: "ru" }, { c: "れ", r: "re" }, { c: "ろ", r: "ro" },
    { c: "わ", r: "wa" }, { c: "を", r: "wo" },
    { c: "ん", r: "n" },
    // dakuten
    { c: "が", r: "ga" }, { c: "ぎ", r: "gi" }, { c: "ぐ", r: "gu" }, { c: "げ", r: "ge" }, { c: "ご", r: "go" },
    { c: "ざ", r: "za" }, { c: "じ", r: "ji" }, { c: "ず", r: "zu" }, { c: "ぜ", r: "ze" }, { c: "ぞ", r: "zo" },
    { c: "だ", r: "da" }, { c: "ぢ", r: "ji" }, { c: "づ", r: "zu" }, { c: "で", r: "de" }, { c: "ど", r: "do" },
    { c: "ば", r: "ba" }, { c: "び", r: "bi" }, { c: "ぶ", r: "bu" }, { c: "べ", r: "be" }, { c: "ぼ", r: "bo" },
    // handakuten
    { c: "ぱ", r: "pa" }, { c: "ぴ", r: "pi" }, { c: "ぷ", r: "pu" }, { c: "ぺ", r: "pe" }, { c: "ぽ", r: "po" },
    // youon (combo: true)
    { c: "きゃ", r: "kya", combo: true }, { c: "きゅ", r: "kyu", combo: true }, { c: "きょ", r: "kyo", combo: true },
    { c: "しゃ", r: "sha", combo: true }, { c: "しゅ", r: "shu", combo: true }, { c: "しょ", r: "sho", combo: true },
    { c: "ちゃ", r: "cha", combo: true }, { c: "ちゅ", r: "chu", combo: true }, { c: "ちょ", r: "cho", combo: true },
    { c: "にゃ", r: "nya", combo: true }, { c: "にゅ", r: "nyu", combo: true }, { c: "にょ", r: "nyo", combo: true },
    { c: "ひゃ", r: "hya", combo: true }, { c: "ひゅ", r: "hyu", combo: true }, { c: "ひょ", r: "hyo", combo: true },
    { c: "みゃ", r: "mya", combo: true }, { c: "みゅ", r: "myu", combo: true }, { c: "みょ", r: "myo", combo: true },
    { c: "りゃ", r: "rya", combo: true }, { c: "りゅ", r: "ryu", combo: true }, { c: "りょ", r: "ryo", combo: true },
    { c: "ぎゃ", r: "gya", combo: true }, { c: "ぎゅ", r: "gyu", combo: true }, { c: "ぎょ", r: "gyo", combo: true },
    { c: "じゃ", r: "ja",  combo: true }, { c: "じゅ", r: "ju",  combo: true }, { c: "じょ", r: "jo",  combo: true },
    { c: "びゃ", r: "bya", combo: true }, { c: "びゅ", r: "byu", combo: true }, { c: "びょ", r: "byo", combo: true },
    { c: "ぴゃ", r: "pya", combo: true }, { c: "ぴゅ", r: "pyu", combo: true }, { c: "ぴょ", r: "pyo", combo: true },
  ];

  const KATAKANA = [
    { c: "ア", r: "a" },  { c: "イ", r: "i" },  { c: "ウ", r: "u" },  { c: "エ", r: "e" },  { c: "オ", r: "o" },
    { c: "カ", r: "ka" }, { c: "キ", r: "ki" }, { c: "ク", r: "ku" }, { c: "ケ", r: "ke" }, { c: "コ", r: "ko" },
    { c: "サ", r: "sa" }, { c: "シ", r: "shi" },{ c: "ス", r: "su" }, { c: "セ", r: "se" }, { c: "ソ", r: "so" },
    { c: "タ", r: "ta" }, { c: "チ", r: "chi" },{ c: "ツ", r: "tsu" },{ c: "テ", r: "te" }, { c: "ト", r: "to" },
    { c: "ナ", r: "na" }, { c: "ニ", r: "ni" }, { c: "ヌ", r: "nu" }, { c: "ネ", r: "ne" }, { c: "ノ", r: "no" },
    { c: "ハ", r: "ha" }, { c: "ヒ", r: "hi" }, { c: "フ", r: "fu" }, { c: "ヘ", r: "he" }, { c: "ホ", r: "ho" },
    { c: "マ", r: "ma" }, { c: "ミ", r: "mi" }, { c: "ム", r: "mu" }, { c: "メ", r: "me" }, { c: "モ", r: "mo" },
    { c: "ヤ", r: "ya" }, { c: "ユ", r: "yu" }, { c: "ヨ", r: "yo" },
    { c: "ラ", r: "ra" }, { c: "リ", r: "ri" }, { c: "ル", r: "ru" }, { c: "レ", r: "re" }, { c: "ロ", r: "ro" },
    { c: "ワ", r: "wa" }, { c: "ヲ", r: "wo" },
    { c: "ン", r: "n" },
    { c: "ガ", r: "ga" }, { c: "ギ", r: "gi" }, { c: "グ", r: "gu" }, { c: "ゲ", r: "ge" }, { c: "ゴ", r: "go" },
    { c: "ザ", r: "za" }, { c: "ジ", r: "ji" }, { c: "ズ", r: "zu" }, { c: "ゼ", r: "ze" }, { c: "ゾ", r: "zo" },
    { c: "ダ", r: "da" }, { c: "ヂ", r: "ji" }, { c: "ヅ", r: "zu" }, { c: "デ", r: "de" }, { c: "ド", r: "do" },
    { c: "バ", r: "ba" }, { c: "ビ", r: "bi" }, { c: "ブ", r: "bu" }, { c: "ベ", r: "be" }, { c: "ボ", r: "bo" },
    { c: "パ", r: "pa" }, { c: "ピ", r: "pi" }, { c: "プ", r: "pu" }, { c: "ペ", r: "pe" }, { c: "ポ", r: "po" },
    { c: "キャ", r: "kya", combo: true }, { c: "キュ", r: "kyu", combo: true }, { c: "キョ", r: "kyo", combo: true },
    { c: "シャ", r: "sha", combo: true }, { c: "シュ", r: "shu", combo: true }, { c: "ショ", r: "sho", combo: true },
    { c: "チャ", r: "cha", combo: true }, { c: "チュ", r: "chu", combo: true }, { c: "チョ", r: "cho", combo: true },
    { c: "ニャ", r: "nya", combo: true }, { c: "ニュ", r: "nyu", combo: true }, { c: "ニョ", r: "nyo", combo: true },
    { c: "ヒャ", r: "hya", combo: true }, { c: "ヒュ", r: "hyu", combo: true }, { c: "ヒョ", r: "hyo", combo: true },
    { c: "ミャ", r: "mya", combo: true }, { c: "ミュ", r: "myu", combo: true }, { c: "ミョ", r: "myo", combo: true },
    { c: "リャ", r: "rya", combo: true }, { c: "リュ", r: "ryu", combo: true }, { c: "リョ", r: "ryo", combo: true },
    { c: "ギャ", r: "gya", combo: true }, { c: "ギュ", r: "gyu", combo: true }, { c: "ギョ", r: "gyo", combo: true },
    { c: "ジャ", r: "ja",  combo: true }, { c: "ジュ", r: "ju",  combo: true }, { c: "ジョ", r: "jo",  combo: true },
    { c: "ビャ", r: "bya", combo: true }, { c: "ビュ", r: "byu", combo: true }, { c: "ビョ", r: "byo", combo: true },
    { c: "ピャ", r: "pya", combo: true }, { c: "ピュ", r: "pyu", combo: true }, { c: "ピョ", r: "pyo", combo: true },
  ];

  // Korean jamo — consonants + vowels
  const KR_CONSONANTS = [
    // basic consonants
    { c: "ㄱ", r: "g/k" },
    { c: "ㄴ", r: "n" },
    { c: "ㄷ", r: "d/t" },
    { c: "ㄹ", r: "r/l" },
    { c: "ㅁ", r: "m" },
    { c: "ㅂ", r: "b/p" },
    { c: "ㅅ", r: "s" },
    { c: "ㅇ", r: "ng / –" },
    { c: "ㅈ", r: "j" },
    { c: "ㅊ", r: "ch" },
    { c: "ㅋ", r: "k" },
    { c: "ㅌ", r: "t" },
    { c: "ㅍ", r: "p" },
    { c: "ㅎ", r: "h" },
    // tense consonants (combo: true)
    { c: "ㄲ", r: "kk", combo: true },
    { c: "ㄸ", r: "tt", combo: true },
    { c: "ㅃ", r: "pp", combo: true },
    { c: "ㅆ", r: "ss", combo: true },
    { c: "ㅉ", r: "jj", combo: true },
  ];

  const KR_VOWELS = [
    // basic vowels
    { c: "ㅏ", r: "a" },
    { c: "ㅓ", r: "eo" },
    { c: "ㅗ", r: "o" },
    { c: "ㅜ", r: "u" },
    { c: "ㅡ", r: "eu" },
    { c: "ㅣ", r: "i" },
    { c: "ㅑ", r: "ya" },
    { c: "ㅕ", r: "yeo" },
    { c: "ㅛ", r: "yo" },
    { c: "ㅠ", r: "yu" },
    // compound vowels (combo: true)
    { c: "ㅐ", r: "ae",  combo: true },
    { c: "ㅔ", r: "e",   combo: true },
    { c: "ㅒ", r: "yae", combo: true },
    { c: "ㅖ", r: "ye",  combo: true },
    { c: "ㅘ", r: "wa",  combo: true },
    { c: "ㅙ", r: "wae", combo: true },
    { c: "ㅚ", r: "oe",  combo: true },
    { c: "ㅝ", r: "wo",  combo: true },
    { c: "ㅞ", r: "we",  combo: true },
    { c: "ㅟ", r: "wi",  combo: true },
    { c: "ㅢ", r: "ui",  combo: true },
  ];

  // Lang-specific config
  const LANG_CONFIG = {
    japanese: {
      title: "Kana Practice",
      sets: { hiragana: "Hiragana", katakana: "Katakana", both: "Both" },
      readingLabel: "Romaji",
    },
    korean: {
      title: "Hangul Practice",
      sets: { hiragana: "Consonants", katakana: "Vowels", both: "Both" },
      readingLabel: "Romaja",
    },
  };

  // DOM refs
  const appTitle   = document.getElementById("appTitle");
  const kanaEl     = document.getElementById("kana");
  const romajiEl   = document.getElementById("romaji");
  const progressEl = document.querySelector(".ring-progress");
  const speedInput = document.getElementById("speed");
  const speedValue = document.getElementById("speedValue");
  const youonToggle  = document.getElementById("youonToggle");
  const romajiToggle = document.getElementById("romajiToggle");
  const playToggle   = document.getElementById("playToggle");
  const setButtons   = document.querySelectorAll(".seg");
  const langButtons  = document.querySelectorAll(".lang-opt");

  const RING_RADIUS = 92;
  const RING_CIRC = 2 * Math.PI * RING_RADIUS;
  progressEl.setAttribute("stroke-dasharray", RING_CIRC.toFixed(3));
  progressEl.setAttribute("stroke-dashoffset", "0");

  const state = {
    lang: "japanese",
    set: "both",
    speedSec: 3,
    showRomaji: true,
    showCombos: true,
    paused: false,
    current: null,
    startTime: 0,
    pausedElapsed: 0,
    rafId: 0,
  };

  function getPool() {
    let pool;
    if (state.lang === "korean") {
      if (state.set === "hiragana") pool = KR_CONSONANTS;
      else if (state.set === "katakana") pool = KR_VOWELS;
      else pool = KR_CONSONANTS.concat(KR_VOWELS);
    } else {
      if (state.set === "hiragana") pool = HIRAGANA;
      else if (state.set === "katakana") pool = KATAKANA;
      else pool = HIRAGANA.concat(KATAKANA);
    }
    if (!state.showCombos) pool = pool.filter(e => !e.combo);
    return pool;
  }

  function pickNext() {
    const pool = getPool();
    if (pool.length <= 1) return pool[0];
    let next;
    do {
      next = pool[Math.floor(Math.random() * pool.length)];
    } while (state.current && next.c === state.current.c);
    return next;
  }

  function render(entry) {
    kanaEl.style.opacity = "0";
    setTimeout(() => {
      kanaEl.textContent = entry.c;
      romajiEl.textContent = entry.r;
      kanaEl.style.opacity = "1";
    }, 90);
  }

  function swap() {
    const next = pickNext();
    state.current = next;
    state.startTime = performance.now();
    render(next);
    progressEl.setAttribute("stroke-dashoffset", "0");
  }

  function tick(now) {
    if (state.paused) return;
    const duration = state.speedSec * 1000;
    const elapsed = now - state.startTime;
    if (elapsed >= duration) {
      swap();
    } else {
      const ratio = Math.max(0, Math.min(1, elapsed / duration));
      progressEl.setAttribute("stroke-dashoffset", (RING_CIRC * ratio).toFixed(3));
    }
    state.rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    cancelAnimationFrame(state.rafId);
    state.rafId = requestAnimationFrame(tick);
  }

  function stopLoop() {
    cancelAnimationFrame(state.rafId);
    state.rafId = 0;
  }

  function setPaused(paused) {
    if (state.paused === paused) return;
    if (paused) {
      state.pausedElapsed = performance.now() - state.startTime;
      state.paused = true;
      stopLoop();
    } else {
      state.startTime = performance.now() - state.pausedElapsed;
      state.paused = false;
      startLoop();
    }
    playToggle.innerHTML = paused
      ? 'Play <span class="kbd">P</span>'
      : 'Pause <span class="kbd">P</span>';
    playToggle.classList.toggle("is-active", paused);
    playToggle.setAttribute("aria-pressed", paused ? "true" : "false");
  }

  function applyLang(lang) {
    state.lang = lang;
    const cfg = LANG_CONFIG[lang];
    appTitle.textContent = cfg.title;
    romajiToggle.textContent = `${cfg.readingLabel}: ${state.showRomaji ? "On" : "Off"}`;
    setButtons.forEach((b) => {
      b.textContent = cfg.sets[b.dataset.set];
    });
    langButtons.forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-checked", active ? "true" : "false");
    });
    swap();
  }

  // Language toggle
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  // Set buttons
  setButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.set = btn.dataset.set;
      setButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-checked", active ? "true" : "false");
      });
      swap();
    });
  });

  // Speed slider
  function updateSpeedLabel() {
    speedValue.textContent = `${state.speedSec.toFixed(1)}s`;
  }
  speedInput.addEventListener("input", () => {
    state.speedSec = parseFloat(speedInput.value);
    updateSpeedLabel();
  });

  // Combos toggle
  youonToggle.addEventListener("click", () => {
    state.showCombos = !state.showCombos;
    youonToggle.textContent = `Combos: ${state.showCombos ? "On" : "Off"}`;
    youonToggle.classList.toggle("is-active", state.showCombos);
    youonToggle.setAttribute("aria-pressed", state.showCombos ? "true" : "false");
    swap();
  });

  // Romaji/Romaja toggle
  romajiToggle.addEventListener("click", () => {
    state.showRomaji = !state.showRomaji;
    const label = LANG_CONFIG[state.lang].readingLabel;
    romajiEl.classList.toggle("hidden", !state.showRomaji);
    romajiToggle.textContent = `${label}: ${state.showRomaji ? "On" : "Off"}`;
    romajiToggle.classList.toggle("is-active", state.showRomaji);
    romajiToggle.setAttribute("aria-pressed", state.showRomaji ? "true" : "false");
  });

  // Play/pause button
  playToggle.addEventListener("click", () => {
    setPaused(!state.paused);
    playToggle.blur();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    const isTextInput = tag === "INPUT" && e.target.type !== "range";
    if (isTextInput) return;
    if (e.code === "Space") {
      e.preventDefault();
      if (!state.paused) swap();
      return;
    }
    if (e.key === "p" || e.key === "P") {
      e.preventDefault();
      setPaused(!state.paused);
    }
  });

  // Boot
  updateSpeedLabel();
  swap();
  startLoop();
})();
