import React, { useState } from 'react';
import { connect } from 'react-redux';
import AvatarPlaceholder from './AvatarPlaceholder';

function User(props) {
  const { user, answerCount, questionCount, scoreCount, index } = props;
  const [hasImgError, setHasImgError] = useState(false);

  // Check if user exists
  if (!user) return null;

  const { name, avatarURL } = user;

  // Score color based on index position for first place, second, third, etc
  let scoreCountStyle = {};
  switch (index) {
    case 0:
      scoreCountStyle.backgroundColor = 'gold';
      scoreCountStyle.borderColor = 'goldenrod';
      scoreCountStyle.color = 'darkgoldenrod';
      break;
    case 1:
      scoreCountStyle.backgroundColor = 'silver';
      scoreCountStyle.borderColor = 'gray';
      scoreCountStyle.color = 'gray';
      break;
    case 2:
      scoreCountStyle.backgroundColor = 'sandybrown';
      scoreCountStyle.borderColor = 'peru';
      scoreCountStyle.color = 'sienna';
      break;
    default:
  }

  const handleError = () => setHasImgError(true);

  return (
    <div className='card mb-3 mx-auto' style={{ maxWidth: '100%' }}>
      <div className='row g-0'>
        <div className='col-md-4 m-auto text-center'>
          {!hasImgError ? (
            <img
              src={avatarURL}
              className='img-fluid rounded-start'
              alt={name}
              onError={handleError}
            />
          ) : (
            <AvatarPlaceholder />
          )}
        </div>
        <div className='col-md-8'>
          <div className='card-body h-100'>
            <div className='user-leaderboard-container h-100'>
              <div className='user-leaderboard-name text-center'>{name}</div>
              <div className='user-leaderboard-score text-center'>Score</div>
              <div className='user-leaderboard-counts h-100'>
                <div className='user-counts-container h-100'>
                  <div className='user-counts-answers-label'>
                    Answered questions
                  </div>
                  <div className='user-counts-answers-val'>{answerCount}</div>
                  <div className='user-counts-questions-label'>
                    Created Questions
                  </div>
                  <div className='user-counts-questions-val'>
                    {questionCount}
                  </div>
                </div>
              </div>
              <div className='user-leaderboard-total text-center'>
                <div className='number-circle m-2' style={scoreCountStyle}>
                  {scoreCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }, props) => ({
  user: users[props.id],
});

export default connect(mapStateToProps)(User);
