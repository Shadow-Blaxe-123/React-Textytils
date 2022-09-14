import React from "react";

export default function Navigation(props) {
  // let text = 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg py-2 px-2 border-bottom ${props.mode}` }>
        <div className={`container-fluid ${props.mode}`}>
          <a className={`navbar-brand fw-bolder ${props.mode}`} href="#">
            Text Utility
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold" >
              <li className="nav-item">
                <a className={`nav-link active${props.mode}` }aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item fw-bold">
                <a className={`nav-link fw-bold${props.mode}` } href="#">
                  About
                </a>
              </li>

            </ul>
            <div className="form-check form-switch mx-3">
                <input type="checkbox" id="flexSwitchCheckDefault" className="form-check-input" onClick={props.toggle}/>
                <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
