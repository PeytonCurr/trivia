import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";



class QuestionsService {

  async getQuestions() {
    let response = await axios.get(`https://opentdb.com/api.php?amount=10&type=multiple`)
    // console.log(response);
    appState.questions = response.data.results.map(q => new Question(q))
    // console.log(appState.questions);
  }
}

export const questionsService = new QuestionsService();
