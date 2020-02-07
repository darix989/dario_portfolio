import About from './About-view';
import React from 'react';

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description : 'I am Dario Randazzo, bla bla bla bla lorem ipsum bla bla bla.'
        };
    }

    render() {
        return (
            <About 
                description={this.state.description} 
            >
            </About>
        );
    }

}

export default AboutContainer;