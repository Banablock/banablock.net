import React from 'react';

import Logo from '../assets/img/logos/logo_header.png';

import '../assets/scss/components/header.scss';

class Header extends React.Component {
    render = (): React.ReactNode => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand">
                            <img src={Logo} alt="Banabyte logo" className="d-inline-block tw-me-2" height="48" />
                            Banabyte
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="/about" className={`nav-link ${window.location.pathname === `/about` ? `active disabled` : ``}`}>About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/servers" className={`nav-link ${window.location.pathname === `/servers` ? `active disabled` : ``}`}>Servers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://store.banabyte.com" target="_blank" rel="noreferrer" className="nav-link">Store</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://forum.banabyte.com" target="_blank" rel="noreferrer" className="nav-link">Forum</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://discord.banabyte.com" target="_blank" rel="noreferrer" className="nav-link">Discord</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    };
}

export default Header;
