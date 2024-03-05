import './style.scss'

const Popup = ({ component, closeModal }) => {
    return (
      <div id="myModal" class="modal">
        <div class="modal-content">
        <div className='close-modal'>
          <span onClick={() => closeModal(false)}>X</span>
        </div>
          {component}
        </div>
        
      </div>
    )
}

export default Popup;