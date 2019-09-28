import React from 'react';
import Searchbar from '../Searchbar';

export default class Header extends React.PureComponent {
    render(){
        return(
            <div className="header">
                <h2>GTA 5 Natives</h2>
                <Searchbar />
            </div>
        )
    }
}

