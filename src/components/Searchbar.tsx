import React from 'react';

interface Props {
    filterText: string;
    onFilterTextChange: (text: string) => void;
}

export default class Searchbar extends React.Component<Props,{}> {
    constructor(props: Props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(event: any){
        this.props.onFilterTextChange(event.target.value);
    }

    render(){
        return (
            <div className="searchbar-container">
                <form>
                    <input type="text" placeholder="Name or hash" value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                </form>
            </div>
        )
    }
}