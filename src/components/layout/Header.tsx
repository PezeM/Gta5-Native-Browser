import React from 'react';
import Searchbar from '../Searchbar';

interface Props {
    filterText: string;
    onFilterTextChange: (text: string) => void;
}

export default class Header extends React.Component <Props, {}>{
    render(){
        return(
            <div className="header">
                <h2>GTA 5 Natives</h2>
                <Searchbar filterText={this.props.filterText} onFilterTextChange={this.props.onFilterTextChange}/>
            </div>
        )
    }
}

