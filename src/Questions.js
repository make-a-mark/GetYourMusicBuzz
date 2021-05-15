const questions = [
  {
    Question: "What is your Favorite Color?",
    isNumInput: false,
    Answers: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
    Results: [0, 0, 0, 0, 0, 0, 0]
  },
  {
    Question: "Happiness on a scale from 0-1",
    isNumInput: true,
    Answers: ["Quality"],
    Results: [0],
  },
  {
    Question: "What would you like to have for dinner?",
    isNumInput: false,
    Answers: ["Meat", "Seafood", "Veggies", "Nothing"],
    Results: [0, 0, 0, 0],
  },
  {
    Question: "What animal best describes your mood?",
    isNumInput: false,
    Answers: ["Elephant", "Fish", "Turtle", "Fox", "Cow", "Dog", "Cat"],
    Results: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    Question: "What disney movie best describes your day?",
    isNumInput: false,
    Answers: ["Star Wars", "Frozen", "Moana", "Hercules", "Rava", "Aladdin"],
    Results: [0, 0, 0, 0, 0, 0],
  },
  {
    Question: "How was your sleep last night (0-1)",
    isNumInput: true,
    Answers: ["Sleep"],
    Results: [0],
  },
  {
    Question: "Was your day fun today?",
    isNumInput: false,
    Answers: ["Yes", "No"],
    Results: [0, 0],
  },
  {
    Question: "Are you being unproductive?",
    isNumInput: false,
    Answers: ["Yes", "No"],
    Results: [0, 0],
  },
  {
    Question: "Are you in public right now?",
    isNumInput: false,
    Answers: ["Yes", "No"],
    Results: [0, 0],
  },
  {
    Question: "What Myers-Briggs Type Indicator would best describe you? (https://www.16personalities.com/personality-types)",
    isNumInput: false,
    Answers: ["Analysts", "Diplomats", "Sentinels", "Explorers"],
    Results: [0, 0, 0, 0],
  },
  {
    Question: "What is your Astrology sign? (http://nuclear.ucdavis.edu/~rpicha/personal/astrology/)",
    isNumInput: false,
    Answers: ["Aries", "Taurus", "Gemini", "Leo", "Cancer", "Libra", "Virgo", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
    Results: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
]

const tracks = [
  "0qcr5FMsEO85NAQjrlDRKo", //frozen
  "7kh64k3P9Fk4EsA6vOdwmj", //princess frog
  "1hwdPQtFHISvZ9SXMkNrIK", //aladdin
  "6mb6lVLNrcUgLnEN8QnDJd", //Moana
  "3yQrGLCIYOcYopGthnfG3A", //Mulan
  "1QArXU82lJg2gKQFRcOr0d", //Lion King
  "1Oe6epuil8qP2yWsgejN3E", //Holy
  "3OaunNUlXXs5e2PXtNAzzG", //UCLA
  "70C4NyhjD5OZUMzvWZ3njJ", //Piano Man
  "61HVbcNeRACZpyvHrc3AnD", //Frozen 2
  "3aJgAgTI9srxcTuyzVDtkm", //Almost there
  "39uLYYZytVUwcjgeYLI409", //Howl's Moving Castle
  "463CkQjx2Zk1yXoBuierM9", //Levitating - dua lipa
  "463CkQjx2Zk1yXoBuierM9", //Heartbreak anniversary
  "1sbEeUY8KsdvgiQi26JBFz", //Popstar - DJ Khaled & Drake
  "6AGOKlMZWLCaEJGnaROtF9", //Put Your Records On
  "7MAibcTli4IisCtbHKrGMh", //Leave The Door Open
  "3YJJjQPAbDT7mGpX3WtQ9A", //Good Days - SZA
  "7JrSIPcfkWhDzxWII8Jz7V", //Escaping Time - from Deep Focus playlist
  "0CNuKKi6MHrr8DqYtpzbCD", //bossa uh (bosa nova song)
  "4SFBV7SRNG2e2kyL1F6kjU", //Bach - The Well-Tempeered Clavier
  "2cFK03sObtI6AK3QKeOT5g", //We got that cool (house)
  "2WfaOiMkCvy7F5fcp2zZ8L", //Take on Me
  "47BBI51FKFwOMlIiX6m8ya", //I want it that way
  "2CgOd0Lj5MuvOqzqdaAXtS", //Shelter
  "08mG3Y1vljYA6bvDt4Wqkj", //Back in black
  "6dGnYIeXmHdcikdzNNDMm2", //Here comes the sun
  "7Jh1bpe76CNTCgdgAdBw4Z", //David Bowie Heroes
]

export {tracks}
export default questions