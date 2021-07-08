import React from 'react';
import { connect } from 'react-redux';

function User(props) {
  const { user, answerCount, questionCount, totalCount } = props;

  // Check if user exists
  if (!user) return null;

  const { name, avatarURL } = user;

  return (
    <div className='card mb-3 mx-auto' style={{ maxWidth: '100%' }}>
      <div className='row g-0'>
        <div className='col-md-4 m-auto text-center'>
          <img src={avatarURL} className='img-fluid rounded-start' alt={name} />
        </div>
        <div className='col-md-8'>
          <div className='card-body h-100'>
            <div
              className='user-leaderboard-container'
              style={{ height: '100%' }}
            >
              <div className='user-leaderboard-name text-center'>{name}</div>
              <div className='user-leaderboard-score text-center'>Score</div>
              <div
                className='user-leaderboard-counts'
                style={{ height: '100%' }}
              >
                <div
                  className='user-counts-container'
                  style={{ height: '100%' }}
                >
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
                <div className='number-circle' style={{ margin: '10px' }}>
                  {totalCount}
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
