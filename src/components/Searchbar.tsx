import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
    filterText: string;
    searchOnlyInOpenedCategories: boolean;
    onFilterTextChange: (text: string) => void;
    onSearchInOpenedCategoriesChange: (value: boolean) => void;
}

export default class Searchbar extends React.Component<Props,{}> {
    constructor(props: Props){
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleSearchInOpenedCategoriesChange = this.handleSearchInOpenedCategoriesChange.bind(this);
    }

    handleFilterTextChange(event: any){
        this.props.onFilterTextChange(event.target.value);
    }

    handleSearchInOpenedCategoriesChange(event: any){
        this.props.onSearchInOpenedCategoriesChange(event.target.checked);
    }

    render(){
        return (
            <div className="searchbar-container">
                <Form className="form-inline">
                    <Form.Group className="m-2">
                        <Form.Control type="text" placeholder="Name or hash" 
                                value={this.props.filterText} onChange={this.handleFilterTextChange} />
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Form.Check type="checkbox" label="Search only in opened categories" 
                                checked={this.props.searchOnlyInOpenedCategories} onChange={this.handleSearchInOpenedCategoriesChange}/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}