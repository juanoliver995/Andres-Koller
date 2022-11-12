

const MutedVideo = ({ userUnMutedAccion }) => {
  return (
    <div className='user-muted'>
      <div className="muted-container">
        <p>WELCOME TO ANDRES KOLLER OFICIAL WEBSITE</p>
        <button className="muted" onClick={() => userUnMutedAccion()}>Continue</button>
      </div>
    </div>
  )
}

export default MutedVideo