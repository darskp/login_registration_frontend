const Navbar = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-3">
                    <a className="navbar-brand" href="/"><h2>LoginReg</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-but">
                                <a className="btn text-light my-2 me-3" href="/signup">Signup</a>
                                <a className="btn btn-outline-light my-2 px-4" href="/">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;