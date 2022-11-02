

const Loader = ({loading}) => {
  return (
    <div className="loader-container" style={{display:`${loading}`}}>
      <span className="loader"></span>
    </div>
  )
}

export default Loader