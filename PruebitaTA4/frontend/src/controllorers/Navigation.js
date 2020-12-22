import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/">PST - P103</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Estudiantes </Link>
                        <Link className="nav-link" to="/profesores">Profesores</Link>
                        
                    </div>
                </div>
            </nav>
        )
    }
}
