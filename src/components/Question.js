import React, { useState } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/db/helpers';
import AvatarPlaceholder from './AvatarPlaceholder';

function Question(props) {
  const { children, author, question } = props;
  const [hasImgError, setHasImgError] = useState(false);

  // Check if author exists
  if (!author) return null;

  const { name, avatarURL } = author;
  const { timestamp } = question;

  const handleError = () => setHasImgError(true);

  return (
    <div className='card mb-3 mx-auto' style={{ maxWidth: '100%' }}>
      <div className='card-header fw-bold'>{name} asks</div>
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
            {React.cloneElement(children, { ...props })}
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <small className='text-muted'>{formatDate(timestamp)}</small>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, questions, users }, { id }) => ({
  authedUser: authedUser && users[authedUser],
  question: questions[id],
  author: questions[id] && users[questions[id].author],
});

export default connect(mapStateToProps)(Question);
