import React from 'react';
import { INatives } from '../constans/interfaces';
import NativeCategory from './NativeCategory';

interface Props {
    natives: INatives;
    filterText: string;
}

export default class NativeCategories extends React.Component<Props, {}> {
    render(){
        const categories = [];

        for (const category in this.props.natives) {
            if (this.props.natives.hasOwnProperty(category)) {
                categories.push(<NativeCategory 
                                    key={category} 
                                    categoryName={category}
                                    natives={this.props.natives[category]} 
                                    filterText={this.props.filterText}/>);
            }
        }

        return(
            <div>
                <ul>{categories}</ul>
            </div>
        )
    }
}