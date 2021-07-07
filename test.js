function questionSummary(optionOneText, optionTwoText) {
  let summary = '';
  const wordsForOne = optionOneText.split(/\s+/);
  const wordsForTwo = optionTwoText.split(/\s+/);
  const n =
    wordsForOne.length < wordsForTwo.length
      ? wordsForOne.length
      : wordsForTwo.length;

  for (let i = 0; i < n; ++i)
    if (wordsForOne[i] === wordsForTwo[i]) summary += `${wordsForOne[i]} `;

  if (!summary) {
    if (wordsForOne.length > 0 && wordsForTwo.length > 0)
      summary += `${wordsForOne[0]} or ${wordsForTwo[0]} `;
    else if (wordsForOne.length > 0) summary += `${wordsForOne[0]} `;
    else if (wordsForTwo.length > 0) summary += `${wordsForTwo[0]} `;
  }
  summary += '...';

  return summary;
}

const optionOneText = 'find $50 yourself';
const optionTwoText = 'have your best friend find $500';
console.log(questionSummary(optionOneText, optionTwoText));

const users = {
  test: 'testUser',
};
const authedUser = undefined;
const user = authedUser && users[authedUser];
console.log('user', user);

const n = 1 / 4;
console.log(n * 100);
