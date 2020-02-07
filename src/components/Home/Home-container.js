import Home from './Home-view';
import React from 'react';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description : 'ciao bella ciao'
        };
    }

    render() {
        return (
            <Home 
                description={this.state.description} 
            >
            </Home>
        );
    }

}

export default HomeContainer;