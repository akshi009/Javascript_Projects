const quizQuestions = [
  {
    question: "Your Friends crush texts 'wyd?' at 2AM. they:",
    options: [
      { text: "Reply instantly with heart emojis", type: "Simp", image: "https://i.pinimg.com/736x/9b/56/ba/9b56baf862affa5e7a6d8b62f12e375e.jpg" },
      { text: "Leave them on read ", type: "Red Flag", image: "https://i.pinimg.com/736x/68/b8/7a/68b87ae95c6fef6088063c0de600f95a.jpg" },
      { text: "Say 'just thinking about you 💖'", type: "Romantic Lover", image: "https://i.pinimg.com/736x/3c/65/65/3c656592832f4d840cf6131690eabcf5.jpg" },
      { text: "Reply 'lol sleep' and move on", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/60/86/5e/60865e10f0a1ad92e510c5a62fe32f13.jpg" }
    ]
  },
  {
    question: "Ideal date night?",
    options: [
      { text: "Dinner under the stars with deep convos", type: "Romantic Lover", image: "https://i.pinimg.com/736x/b1/e3/22/b1e3223b944eca28d3d032e7440bfc82.jpg" },
      { text: "Netflix and Chill", type: "Red Flag", image: "https://i.pinimg.com/736x/51/7b/8e/517b8e1358516385986010fb08820d5c.jpg" },
      { text: "Buying them flowers ‘just because’", type: "Simp", image: "https://i.pinimg.com/736x/2f/45/cf/2f45cf3760f1952559cfe99b28a545bf.jpg" },
      { text: "Making it a group hang so it's not weird", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/29/30/34/29303409ebf8101bc38b38a5e9287999.jpg" }
    ]
  },
  {
    question: "Someone flirts with them. They:",
    options: [
      { text: "Flirt harder with their best friend", type: "Red Flag", image: "https://i.pinimg.com/736x/77/60/1c/77601c53fd4a24d5500bb25e7c768eae.jpg" },
      { text: "Blush and offer them snacks", type: "Simp", image: "https://i.pinimg.com/736x/1e/85/ad/1e85ad002d61f0c83a7cbc4e126cb5f6.jpg" },
      { text: "Write them a secret poem", type: "Romantic Lover", image: "https://i.pinimg.com/736x/fb/66/7c/fb667c2f7434664b70a7ed5c7b82277c.jpg" },
      { text: "Say 'aww you're so sweet!' then nothing", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/e8/ea/f5/e8eaf556f58ac2364a8bfa8b2458ce8e.jpg" }
    ]
  },
  {
    question: "What’s Their texting style?",
    options: [
      { text: "Double texts ", type: "Simp", image: "https://i.pinimg.com/736x/87/65/01/87650186800c395dbfd972c0b88ecc58.jpg" },
      { text: "Text No Emojis.", type: "Red Flag", image: "https://i.pinimg.com/736x/3d/ff/4f/3dff4fdbe5f3f51fbd3b503cbb3af966.jpg" },
      { text: "Paragraphs with proper grammar and emojis", type: "Romantic Lover", image: "https://i.pinimg.com/736x/f9/e9/4f/f9e94fa5dfbea15f98ff6da5da7ed453.jpg" },
      { text: "Seen 12 hours ago", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/c1/d1/77/c1d177db56f80fcd03a2bc4e66e04caf.jpg" }
    ]
  },
  {
    question: "Pick a love song vibe:",
    options: [
      { text: "‘Perfect’ by Ed Sheeran", type: "Romantic Lover", image: "https://i.pinimg.com/736x/5d/38/f6/5d38f6417e2748f1de355a95ade42dee.jpg" },
      { text: "‘Hotline Bling’ on repeat", type: "Simp", image: "https://i.pinimg.com/736x/45/94/16/459416e3e746617bdb09d3c77cef5a41.jpg" },
      { text: "‘Toxic’ by Britney Spears", type: "Red Flag", image: "https://i.pinimg.com/736x/77/b4/fa/77b4fafa55c314d735223a764deb5dc5.jpg" },
      { text: "‘We’re just friends’ — every version", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/b2/75/b2/b275b2b40c0552b23fa825107c6753f6.jpg" }
    ]
  },
  {
    question: "Their friend confesses they like them. they:",
    options: [
      { text: "Panic and say 'haha same... as a friend'", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/38/91/74/3891748de680104d3dbaf0ce8ea20a1d.jpg" },
      { text: "Confess They've been writing their name in hearts", type: " Romantic Lover", image: "https://i.pinimg.com/736x/d1/1d/1c/d11d1ce7fad95bceed0edc9636818700.jpg" },
      { text: "Smirk and say 'took you long enough'", type: "Red Flag", image: "https://i.pinimg.com/736x/c2/c6/c6/c2c6c62e295dcf8ff9837323ee91d826.jpg" },
      { text: "Blush and plan your wedding mentally", type: "Simp", image: "https://i.pinimg.com/736x/26/a9/7a/26a97a4ac02e511d851bda7770ff274d.jpg" }
    ]
  },
  {
    question: "Their toxic trait in love?",
    options: [
      { text: "Catching feelings too fast", type: "Simp", image: "https://i.pinimg.com/736x/db/36/9d/db369d1dd2bca5cc5773e7fd29f8289c.jpg" },
      { text: "Love bombing then ghosting", type: "Red Flag", image: "https://i.pinimg.com/736x/6f/3f/7e/6f3f7e91f683df031af3c5361fee9c9d.jpg" },
      { text: "Writing dramatic notes they’ll never read", type: "Romantic Lover", image: "https://i.pinimg.com/736x/06/7c/84/067c84b26d6c37f12438e6a079918907.jpg" },
      { text: "Pretending to be clueless when they flirt", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/e9/67/b6/e967b6e4219c0e895260d99e80bca317.jpg" }
    ]
  },
  {
    question: "Their dating bio says:",
    options: [
      { text: "Here to find my soulmate 💘", type: "Romantic Lover", image: "https://i.pinimg.com/736x/78/3b/90/783b9093d815353c3c125e0329bda3bf.jpg" },
      { text: "If you pay attention to me, I’m yours", type: "Simp", image: "https://i.pinimg.com/736x/b3/d6/d4/b3d6d4753ce54861adda1cd7d64fdddd.jpg" },
      { text: "Here for a good time, not a long time", type: "Red Flag", image: "https://i.pinimg.com/736x/39/38/a9/3938a934449ca6137ed2b0e0244dc66c.jpg" },
      { text: "Let’s just be friends 😇", type: "Friendzoning Person", image: "https://i.pinimg.com/736x/9a/93/80/9a9380e042a35b170dbf8618f1e097c5.jpg" }
    ]
  }
];



const questionbox = document.getElementById('question-box');
const questiontext = document.getElementById('question-text');
const options = document.getElementById('options');
const nextbtn = document.getElementById('next-btn');
let selected = null;
let current = 0;

// New type counters
let redFlag = 0, simp = 0, romantic = 0, friendzone = 0;

function showQuestion(index) {
  const q = quizQuestions[index];
  questiontext.innerText = q.question;
  options.innerHTML = "";

  q.options.forEach(option => {
    const wrapper = document.createElement('div');
    wrapper.classList.add("option-wrapper");

    const img = document.createElement('img');
    img.src = option.image;
    img.classList.add("option-image");

    const label = document.createElement('p');
    label.innerText = option.text;
    label.classList.add("option-label");

    wrapper.appendChild(img);
    wrapper.appendChild(label);

    wrapper.addEventListener("click", () => {
      document.querySelectorAll('.option-wrapper').forEach(w => w.classList.remove("active"));
      wrapper.classList.add("active");
      selected = option.type;
      nextbtn.classList.remove("disable");
    });

    options.appendChild(wrapper);
  });
}

function handleType(type) {
  if (type === 'Red Flag') redFlag++;
  else if (type === 'Simp') simp++;
  else if (type === 'Romantic Lover') romantic++;
  else if (type === 'Friendzoning Person') friendzone++;
}

nextbtn.addEventListener('click', () => {
  if (!selected) return;

  handleType(selected);
  selected = null;
  nextbtn.classList.add("disable");
  current++;

  if (current < quizQuestions.length) {
    showQuestion(current);
  } else {
    showResult();
  }
});

function showResult() {
  questionbox.classList.add("hidden");
  document.getElementById('result-box').classList.remove("hidden");

  const max = Math.max(redFlag, simp, romantic, friendzone);
  let result = "", message = "", image = "";

  if (max === redFlag) {
    result = "Red Flag 🚩";
    message = "You're the reason their friends said 'I told you so'";
    // image = "images/redflag_result.jpg";
  } else if (max === simp) {
    result = "Simp 💘";
    message = "You don’t chase people — you sprint with snacks and a Spotify playlist.";
    // image = "images/simp_result.jpg";
  } else if (max === romantic) {
    result = "Romantic Lover 🌹";
    message = "You're basically a walking love letter. And yes, it’s scented";
    // image = "images/romantic_result.jpg";
  } else {
    result = "Friendzoning Person 🙃";
    message = "You’re like a teaser trailer — looks promising, goes nowhere";
    // image = "images/friendzone_result.jpg";
  }

nextbtn.classList.add('hidden'); // Move logic outside the template literal

document.getElementById('result-text').innerHTML = `
  <h2>${result}</h2>
  <p>${message}</p>
`;

}

showQuestion(current);
