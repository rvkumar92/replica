var React = require('react');

var ingredients = [{"id":1,"text":"cheese"},{"id":2,"text":"oil"},{"id":3,"text":"milk"}];
var ListItem = React.createClass({
    render(){
       var listItems = ingredients.map(function(item){
           return(<ListItem key={item.id} ingredient={item.text} />)
       });
        return(
            <ul>
                {listItems}
            </ul>
        )
    }
});

module.exports = ListItem;
