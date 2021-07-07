import {
  SET_QUESTION_TYPE,
  UNANSWERED,
} from '../actions/showQuestionType.action';

const initialState = UNANSWERED;

export default function questions(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTION_TYPE:
      return action.questionType;
    default:
      return state;
  }
}
