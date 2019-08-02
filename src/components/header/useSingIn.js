import { useState } from 'react';

const useSingIn = () => {
    const [singInOpen, setSingInOpen] = useState(false);

   function changeToogle(e) {
       e.preventDefault()
       setSingInOpen(!singInOpen)
       singInOpen ? document.body.style.overflow = 'visible' :  document.body.style.overflow = 'hidden'
   }

   return {
        singInOpen,
        changeToogle,
   }
}

export default useSingIn