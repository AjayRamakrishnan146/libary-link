import React from 'react'

const Header = () => {
    return (
        <div>
             <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary border border-dark p-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">LibaryLink</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active border border-dark me-2" aria-current="page" href="/login">Login</a>
              <div class="dropdown">
            {/* <a
                class="nav-link dropdown-toggle active border border-dark"
                href="#"
                role="button"
                id="filterDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Filter
            </a>
            <div class="dropdown-menu " aria-labelledby="filterDropdown">
                <a class="dropdown-item" href="/completed">Complete</a>
                <a class="dropdown-item" href="/incompleted">Incomplete</a>
            </div> */}
        </div >
              <a class="nav-link active border ms-2 border-dark" aria-current="page" href="/signup">Signup</a>       
            </div>
            
          </div>
        </div>
      </nav>
    </div>
        </div>
    )
}

export default Header