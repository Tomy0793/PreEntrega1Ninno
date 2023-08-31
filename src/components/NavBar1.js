import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'

const NavBar1 = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><Logo/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Colchones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Almohadas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link estilo" href="#"><CartWidget/></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar1