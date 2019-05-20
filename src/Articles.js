import React, { Component } from 'react';

class Articles extends Component {
   
    componentDidMount(){
        //window.FB.XFBML.parse();
        document.addEventListener('fb_init', e => window.FB.XFBML.parse())
    }

    componentDidUpdate() {
        document.addEventListener('fb_init', e => window.FB.XFBML.parse());
        //window.FB.XFBML.parse();
    }
   
    render() {
        return (
            <center className="App-body">
                <div id="fbp" className="fb-page"
                    data-href="https://www.facebook.com/WageGauger" 
                    data-tabs="timeline" 
                    data-width="500" 
                    data-height="800"
                    data-small-header="false" 
                    data-adapt-container-width="true" 
                    data-hide-cover="false" 
                    data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/WageGauger" 
                    className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/WageGauger">Wage Gauge</a>
                    </blockquote>
                </div>
            </center>
        )
    }
}

export default Articles;
