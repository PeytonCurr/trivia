import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawQuestions() {
  let questions = appState.questions
  let template = ''
  // console.log(`Questions in draw questions`, questions);
  questions.forEach(q => {
    template += q.QuestionTemplate
    // console.log(q.QuestionTemplate);
  })
  setHTML(`questions`, template)
  // console.log(`Template in draw questions`, template);
}

export class QuestionsController {

  constructor() {
    this.getQuestions()
    appState.on(`questions`, _drawQuestions)
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}