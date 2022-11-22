const some_polution = [
  { name: "Tik Tok", key: "tiktok", co2: 2.63 },
  { name: "Reddit", key: "reddit", co2: 2.48 },
  { name: "Pinterest", key: "pinterest", co2: 1.3 },
  { name: "Instagram", key: "ig", co2: 1.05 },
  { name: "Snapchat", key: "snapchat", co2: 0.87 },
  { name: "Facebook", key: "fb", co2: 0.79 },
  { name: "LinkedIn", key: "li", co2: 0.71 },
  { name: "Twitter", key: "twitter", co2: 0.6 },
  { name: "Twitch", key: "twitch", co2: 0.55 },
  { name: "Youtube", key: "yt", co2: 0.46 },
];

const multiply = {
  tiktok: 2.63,
  reddit: 2.48,
  pinterest: 1.3,
  ig: 1.05,
  snapchat: 0.87,
  fb: 0.79,
  li: 0.71,
  twitter: 0.6,
  yt: 0.46,
};

function Calculate(arr) {
  arr.map((obj) => (obj.co2 = obj.co2 * multiply.tiktok));
  return arr;
}

console.log(Calculate(some_polution));
