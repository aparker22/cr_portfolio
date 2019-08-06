import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return(
    <div className="header">
        <h4 className="established">Established 1987</h4>
        <h3 className="name">Candace</h3>
        <h3 className="name">Rowell</h3>
        <nav>
            <div className="routing">
                <Link to ="/" className="navButton">Home</Link>
                <Link to="/personal" className="navButton">Personal Life</Link>
                <Link to="/experiences" className="navButton">Experiences</Link>
                <Link to="/skills" className="navButton">Skills</Link>
            </div>
        </nav>
    </div>
    )
};