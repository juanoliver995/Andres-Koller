
const Modal = ({ setModal } ) => { 

  const handleModal = () => {
    setModal(false)
  }
  return (
    <div className="modal-container">
      <button onClick={handleModal}>
        <img src="../../close-button-svgrepo-com.svg"/>
      </button>
      <iframe src="https://www.youtube.com/embed/-swyyPb9HrA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default Modal