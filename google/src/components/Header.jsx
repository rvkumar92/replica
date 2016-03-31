var React = require('react');

var Header = React.createClass({
    render(){
        return(
            <div>
                <ul>
                    <li><a href="#"><button className="btn btn-primary">Sign in</button></a></li>
                    <li><a href="#">Images</a></li>
                    <li><a href="#">Gmail</a></li>
                </ul>
            </div>
        )
    }
});

module.exports = Header;