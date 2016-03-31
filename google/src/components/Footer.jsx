var React = require('react');

var Footer = React.createClass({
    render(){
        return(
            <div className="navbar navbar-fixed-bottom navbar-default">
                <div className="container-fluid">
                    <ul className="pull-left">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Advertising</a></li>
                    </ul>
                    <ul className="pull-right">
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Footer;