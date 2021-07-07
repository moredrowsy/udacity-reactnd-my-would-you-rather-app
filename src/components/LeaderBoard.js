import React from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import User from './User';

function LeaderBoard(props) {
  const { sortedUsers } = props;

  return (
    <div>
      <Title>Leader Board</Title>
      {sortedUsers.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  const userList = [];

  for (const id in users) {
    const { answers } = users[id];
    const answerCount = Object.keys(answers).length;
    const questionCount = users[id].questions.length;
    const totalCount = answerCount + questionCount;

    userList.push({
      id,
      answerCount,
      questionCount,
      totalCount,
    });
  }

  const sortedUsers = userList.sort((a, b) => b.totalCount - a.totalCount);

  return {
    sortedUsers,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
