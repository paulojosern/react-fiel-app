import { useState } from 'react';

const useSingIn = () => {
    const [singInOpen, setSingInOpen] = useState(false);

   function changeToogle(e) {
       e.preventDefault()
       setSingInOpen(!singInOpen);
   }

   return {
        singInOpen,
        changeToogle,
   }
}

export default useSingIn