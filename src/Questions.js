const questions = [
  {
    Question: "What color(s) best describes this song?",
    isNumInput: false,
    Answers: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
    Results: [0, 0, 0, 0, 0, 0, 0]
  },
  {
    Question: "Happiness of this song on a scale from 0-1 (as in 0.5, 0.4, etc)",
    isNumInput: true,
    Answers: ["Quality"],
    Results: [0],
  },
  {
    Question: "What food(s) would a person listening to this song like to have for dinner?",
    isNumInput: false,
    Answers: ["Meat", "Seafood", "Veggies", "Nothing"],
    Results: [0, 0, 0, 0],
  },
  {
    Question: "What animal(s) best describes the mood of the song?",
    isNumInput: false,
    Answers: ["Elephant", "Fish", "Turtle", "Fox", "Cow", "Dog", "Cat"],
    Results: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    Question: "What disney movie(s) best describes this song?",
    isNumInput: false,
    Answers: ["Star Wars", "Frozen", "Moana", "Hercules", "Raya", "Aladdin"],
    Results: [0, 0, 0, 0, 0, 0],
  },
  {
    Question: "What would the quality of sleep be for a person listening to this song (0-1)?",
    isNumInput: true,
    Answers: ["Sleep"],
    Results: [0],
  },
  {
    Question: "Would a person listening to this song have a fun today?",
    isNumInput: false,
    Answers: ["Yes", "No"],
    Results: [0, 0],
  },
  {
    Question: "Would a person listening to this song be productive?",
    isNumInput: false,
    Answers: ["Yes", "No"],
    Results: [0, 0],
  },
  {
    Question: "Would a person who enjoys rollercoasters like this song?",
    isNumInput: false,
    Answers: ["Yes", "No"],
    Results: [0, 0],
  },
  {
    Question: "What Myers-Briggs Type Indicator(s) would be most likely to listen to this song? (https://www.16personalities.com/personality-types)",
    isNumInput: false,
    Answers: ["Analysts", "Diplomats", "Sentinels", "Explorers"],
    Results: [0, 0, 0, 0],
  },
  {
    Question: "What Astrology/zodiac sign(s) would be most likely to listen to this song? (http://nuclear.ucdavis.edu/~rpicha/personal/astrology/)",
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
  "3FAJ6O0NOHQV8Mc5Ri6ENp", //Heartbreak anniversary
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