export default function Home() {
  const loveWord = [
    "tenacious",
    "gregarious",
    "friendly",
    "happy",
    "fun",
    "social",
    "hard working",
    "crazy",
    "positive",
    "pensive",
    "charismatic",
    "kind",
    "funny",
    "friendly",
    "welcoming",
    "zealous",
    "happy",
    "crazy",
    "unstoppable",
    "always smiling",
    "always laughing",
    "joyful",
    "the fun dad",
    "carefree",
    "PHO",
    "life of the party",
    "fun",
    "super dad",
    "gregarious",
    "welcoming",
    "always smiling",
    "make people feel welcome",
    "fun",
    "excited",
    "loyal",
    "trustworthy",
    "energetic",
    "happy",
    "fun",
    "charismatic",
    "kind",
    "hard working",
    "amazing",
    "energetic",
    "passionate",
    "excited",
    "loyal",
    "joyful",
    "enthusiastic",
    "joyful",
  ];

  const numberLoveWord = loveWord.length;
  let random = Math.round(Math.random() * numberLoveWord);

  return (
    <>
      <p>Those who know me say I'm {loveWord[random]}</p>
    </>
  );
}