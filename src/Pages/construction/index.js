import React from 'react';

const Logo = () => {
    return(
    <div class="logo">
    <img src="/Logo_001.svg" alt="logo"/>
    </div>
    )
  }

const UnderCon = () => {
    return(
    <div>
        <Logo/>
        <p class = "header"> Hello And Welcome!</p>
        <p class = "subheader">You are a bit early this site is still under construction!</p>
    </div>
    )
}

export default UnderCon