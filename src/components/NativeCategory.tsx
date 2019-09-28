import React from 'react';
import { INativesCategory } from '../constans/interfaces';
import Native from '../components/Native';

interface Prop {
    categoryName: string;
    filterText: string;
    natives: INativesCategory;
}

interface State {
    isExpanded: boolean;
}

export default class NativeCategory extends React.Component<Prop, State> {
    constructor(props: Prop){
        super(props);

        this.state = {
            isExpanded: false
        };

        this.toggleCategory = this.toggleCategory.bind(this);
    }

    getNatives(): JSX.Element[] {
        console.log('a');
        const natives: JSX.Element[] = [];
        const filterTextUpperCase = this.props.filterText.toUpperCase();
        const isTextFiltered = this.props.filterText !== '';

        const start = performance.now();
        for (const hash in this.props.natives) {
            if (this.props.natives.hasOwnProperty(hash)) {
                const native = this.props.natives[hash];

                if(isTextFiltered) {
                    if(native.name.indexOf(filterTextUpperCase) !== -1){
                        natives.push(<Native key={hash} native={native} />);
                    }
                } else {
                    natives.push(<Native key={hash} native={native} />)
                }
            }
        }

        console.log(`Time: ${performance.now() - start}`);
        return natives;
    }

    toggleCategory() {
        this.setExpanded(!this.state.isExpanded);
        console.log('Eldo');
    }

    setExpanded(isExpanded: boolean){
        this.setState({
            isExpanded: isExpanded
        });
    }

    render(){
        const natives: JSX.Element[] = [];
        const filterTextUpperCase = this.props.filterText.toUpperCase();
        const isTextFiltered = this.props.filterText !== '';

        const start = performance.now();
        for (const hash in this.props.natives) {
            if (this.props.natives.hasOwnProperty(hash)) {
                const native = this.props.natives[hash];

                if(isTextFiltered) {
                    console.log('wrong');
                    if(native.name.indexOf(filterTextUpperCase) !== -1){
                        natives.push(<Native key={hash} native={native} />);
                        if(!this.state.isExpanded) this.setExpanded(true);
                    }
                } else {
                    if(!this.state.isExpanded) break;
                    natives.push(<Native key={hash} native={native} />)
                }
            }
        }

        console.log(`Time: ${performance.now() - start}`);

        return(
            <li className="native-category">
                <p onClick={this.toggleCategory}>{this.props.categoryName} {natives.length > 0 && natives.length}</p>
                {natives.length > 0 && 
                    <ul>{natives}</ul>
                }
            </li>
        )
    }
}