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
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
              }}
            >
              <h5 className='card-title'>{name}</h5>
              <p className='card-text'>Answered questions: {answerCount}</p>
              <p className='card-text'>Created questions: {questionCount}</p>
              <p className='card-text'>Score: {totalCount}</p>
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
