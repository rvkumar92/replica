var React = require('react');

var List = React.createClass({
    render(){
        return(
            <div>
                <li>{this.props.item}</li>
            </div>
        )
    }
});

module.exports = List;
