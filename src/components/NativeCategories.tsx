import React from 'react';
import { INatives } from '../constans/interfaces';
import NativeCategory from './NativeCategory';

interface Props {
    natives: INatives;
}

interface State {
    categories: JSX.Element[];
}

export default class NativeCategories extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);

        this.state = {
            categories: [],
        }
    }

    componentDidMount(){
        for (const category in this.props.natives) {
            if (this.props.natives.hasOwnProperty(category)) {
                const newCategory = <NativeCategory 
                                        key={category} 
                                        categoryName={category}
                                        natives={this.props.natives[category]} />
                this.setState(state => ({
                    categories: [...state.categories, newCategory]
                }));
            }
        }
    }

    render(){
        return(
            <div>
                <ul>{this.state.categories}</ul>
            </div>
        )
    }
}