const questions = [
  {
    Question: "What is your Favorite Color?",
    isNumInput: false,
    Answers: ["Red", "Yellow", "Green", "Blue", "Indigo", "Violet"],
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

export default questions