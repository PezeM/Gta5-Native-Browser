import React from 'react';
import { INatives } from '../constans/interfaces';
import NativeCategory from './NativeCategory';

interface Props {
    natives: INatives;
}

export default class NativeCategories extends React.Component<Props, {}> {
    render(){
        const categories = [];

        console.log('BBBBBB');
        for (const category in this.props.natives) {
            if (this.props.natives.hasOwnProperty(category)) {
                categories.push(<NativeCategory 
                                    key={category} 
                                    categoryName={category}
                                    natives={this.props.natives[category]} />);
            }
        }

        return(
            <div>
                <ul>{categories}</ul>
            </div>
        )
    }
}