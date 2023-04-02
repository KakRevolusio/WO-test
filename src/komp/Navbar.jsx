export default function Navbar(){
    return <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">AMKIKOM</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample09">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Gallery">Gallery</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
          </li>
          <li class="nav-item dropdown">
            
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <button class="btn btn-primary" > <a className="nav-link active" href="Login">Login</a> </button>
          </div>
      </div>
    </div>
  </nav>
}
