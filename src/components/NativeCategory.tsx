import React from 'react';
import { INativesCategory } from '../constans/interfaces';
import Native from '../components/Native';
import { AppContext } from '../context';
import Collapse from 'react-bootstrap/Collapse';

interface Prop {
    categoryName: string;
    natives: INativesCategory;
}

interface State {
    isExpanded: boolean;
}

export default class NativeCategory extends React.Component<Prop, State> {
    static contextType = AppContext;

    constructor(props: Prop){
        super(props);

        this.state = {
            isExpanded: false
        };

        this.toggleCategory = this.toggleCategory.bind(this);
    }

    toggleCategory() {
        this.setExpanded(!this.state.isExpanded);
    }

    setExpanded(isExpanded: boolean){
        this.setState({
            isExpanded: isExpanded
        });
    }

    renderNatives(natives: JSX.Element[]) {
        const filterTextUpperCase = this.context.filterText.toUpperCase();
        const isTextFiltered = this.context.filterText !== '';

        const start = performance.now();
        for (const hash in this.props.natives) {
            if (this.props.natives.hasOwnProperty(hash)) {
                const native = this.props.natives[hash];
                if(!this.state.isExpanded && this.context.searchOnlyInOpenedCategories) break;

                if(isTextFiltered) {
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
        return natives;
    }

    render(){
        if(this.context == null) return (<p>Error occurred while rendering categories.</p>);

        let natives: JSX.Element[] = [];
        if(this.state.isExpanded || !this.context.searchOnlyInOpenedCategories) 
            natives = this.renderNatives(natives);

        return(
            <li className="native-category">
                <p onClick={this.toggleCategory}>{this.props.categoryName} {natives.length > 0 && natives.length}</p>
                <Collapse in={natives.length > 0}>
                    <ul>{natives}</ul>
                </Collapse>
            </li>
        )
    }
}