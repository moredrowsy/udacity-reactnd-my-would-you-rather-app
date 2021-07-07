// ACTIONS
export const ANSWERED = 'ANSWERED';
export const UNANSWERED = 'UNANSWERED';
export const SET_QUESTION_TYPE = 'SET_QUESTION_TYPE';

// ACTION CREATORS
export function setShowQuestionType(questionType) {
  return {
    type: SET_QUESTION_TYPE,
    questionType,
  };
}
