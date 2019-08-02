import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, toggle, open }) => open ? ReactDOM.createPortal(
  <div className='modal'>
    <div className='modal__container'>
      <div  className='modal__close' onClick={toggle}></div>
      {children}
    </div>
  </div>, document.querySelector('.main')
) : null

export default Modal