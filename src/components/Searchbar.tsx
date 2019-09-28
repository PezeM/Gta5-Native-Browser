import React from 'react';
import Form from 'react-bootstrap/Form';
import { AppContextConsumer } from '../context';

export default class Searchbar extends React.Component {
    render(){
        return (
            <AppContextConsumer>
                {appContext => appContext && (
                    <div className="searchbar-container">
                        <Form className="form-inline">
                            <Form.Group className="m-2">
                                <Form.Control type="text" placeholder="Name or hash" 
                                        value={appContext.filterText} 
                                        onChange={(e: any) => appContext.changeFilterText(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="m-2">
                                <Form.Check type="checkbox" label="Search only in opened categories" 
                                    checked={appContext.searchOnlyInOpenedCategories} 
                                    onChange={(e: any) => appContext.changeSearchOnlyInOpenedCategories(e.target.checked)}/>
                            </Form.Group>
                        </Form>
                    </div>
                )}
            </AppContextConsumer>
        )
    }
}