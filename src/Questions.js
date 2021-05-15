const questions = [
  {
    Question: "What is your Favorite Color?",
    isNumInput: false,
    Answers: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
    Results: [0, 0, 0, 0, 0, 0]
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
    Answers: ["Meat", "Fish", "Veggies", "Nothing"],
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
]

export {tracks}
export default questions