import React from 'react';
import { INativesCategory } from '../constans/interfaces';
import Native from '../components/Native';

interface Prop {
    categoryName: string;
    filterText: string;
    natives: INativesCategory;
}

export default class NativeCategory extends React.Component<Prop, {}> {
    getNatives(): JSX.Element[] {
        const natives: JSX.Element[] = [];
        const filterTextUpperCase = this.props.filterText.toUpperCase();
        const isFilterText = this.props.filterText !== '';

        const start = performance.now();
        for (const hash in this.props.natives) {
            if (this.props.natives.hasOwnProperty(hash)) {
                const native = this.props.natives[hash];

                if(isFilterText){
                    if(native.name.indexOf(filterTextUpperCase) !== -1){
                        natives.push(<Native key={hash} native={native} />);
                    }
                } else{
                    natives.push(<Native key={hash} native={native} />)
                }

            }
        }

        console.log(`Time: ${performance.now() - start}`);
        return natives;
    }

    render(){
        return(
            <li className="native-category">
                <p>{this.props.categoryName}</p>
                <ul>{this.getNatives()}</ul>
            </li>
        )
    }
}