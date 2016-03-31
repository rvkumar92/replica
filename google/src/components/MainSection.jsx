var React = require('react');

var MainSection = React.createClass({
    render(){
        return(
            <div className="container-fluid">
                <div id="logo">
                    <img src="./images/google.png" alt="Google" className="img-thumbnail"/>
                    <input type="text" name="search-input" className="form-control search"/>
                </div>
            </div>
        )
    }
});

module.exports = MainSection;