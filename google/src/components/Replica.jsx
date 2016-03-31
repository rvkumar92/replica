var React = require('react');
var Header = require('./Header.jsx'),
    MainSection = require('./MainSection.jsx'),
    Footer = require('./Footer.jsx');

var Replica = React.createClass({
   render(){
       return(
           <div>
               <Header />
               <MainSection />
               <Footer />
           </div>
       )
   }
});

module.exports = Replica;