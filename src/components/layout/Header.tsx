import React from 'react';
import Searchbar from '../Searchbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Header extends React.PureComponent {
    render(){
        return(
            <Row>
                <Col>
                    <div className="header">
                        <Row>
                            <Col>
                                <h2>GTA 5 Natives</h2>
                            </Col> 
                        </Row>
                        <Row>
                            <Col>
                                <Searchbar />
                            </Col>
                            <Col>
                                <Button variant="outline-primary" className="mr-2">Expand categories</Button>
                                <Button variant="outline-danger">Collapse categories</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}

