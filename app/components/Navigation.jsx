var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
        // <div className="top-bar">
        //     <div className="top-bar-left">
        //         <ul className="menu">
        //             <li className="menu-text"><b>Chroniker</b></li>
        //
        //         </ul>
        //     </div>
        //     <div className="top-bar-right">
        //         <ul className="menu">
        //           <li>
        //               <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
        //           </li>
        //           <li>
        //               <Link to="/countdown" activeClassName="active-link">Countdown</Link>
        //           </li>
        //         </ul>
        //     </div>
        // </div>
        <div className="links">
          <h1><IndexLink to="/" activeClassName="active-link">TIMER</IndexLink></h1>
          <h1><Link to="/countdown" activeClassName="active-link">COUNTDOWN</Link></h1>
        </div>

    );
};

module.exports = Navigation;
