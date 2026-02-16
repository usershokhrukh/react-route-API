import React from 'react'

const Loader = (bool) => {
  const loader = document.querySelector(".navbar__loader");
  // console.log(bool);
  
  if(bool.bool) {
    loader?.classList.remove("none");
    loader?.classList.add("load")
  }else {
    loader?.classList.add("none");
    loader?.classList.remove("load")
    // console.log(loader);
    
  }
  return <></>
}

export default Loader