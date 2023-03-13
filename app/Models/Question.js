


export class Question {

  constructor(data) {
    this.name = data.question
    this.difficulty = data.difficulty
    this.category = data.category
    this.type = data.type
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }

  get QuestionTemplate() {
    let sortedAnswers = this.ComputeRandomAnswer
    return `
    <div class="col-7 bg-grey p-3 rounded elevation-5">
    <h1>Question Difficulty: ${this.difficulty}</h1>
    <h4>${this.name}</h4>
    <div class=" row justify-content-between g-3 mt-2">
      <div class="btn btn-light col-5 elevation-3">${sortedAnswers[0]}</div>
      <div class="btn btn-light col-5 elevation-3">${sortedAnswers[1]}</div>
      <div class="btn btn-light col-5 elevation-3">${sortedAnswers[2]}</div>
      <div class="btn btn-light col-5 elevation-3">${sortedAnswers[3]}</div>
    </div>
  </div>
  `
  }

  get ComputeRandomAnswer() {
    let answer = this.incorrect_answers + `,` + this.correct_answer
    let result = ``
    let answerArr = answer.split(`,`)
    let currentIndex = answerArr.length, randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [answerArr[currentIndex], answerArr[randomIndex]] = [answerArr[randomIndex], answerArr[currentIndex]]
    }
    return answerArr
  }
}

