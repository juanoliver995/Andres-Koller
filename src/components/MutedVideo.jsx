

const MutedVideo = ({ userMutedAccion, userUnMutedAccion }) => {
  return (
    <div className='user-muted'>
      <div className="muted-container">
        <div id='bars'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <p>FOR THE BEST EXPERIENCE, TURN UP YOUR VOLUME.</p>
        <button className="muted" onClick={() => userUnMutedAccion()}>Continue with sound</button>
      </div>
      <div className="container-unmuted">
        <button className="unmuted" onClick={() => userMutedAccion()}>Continue without sound</button>
      </div>
    </div>
  )
}

export default MutedVideo