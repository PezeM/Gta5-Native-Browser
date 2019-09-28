import React from 'react';
import './App.css';
import testNatives from './data/natives.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './components/layout/Header';
import { INatives } from './constans/interfaces';
import NativesCategories from './components/NativeCategories';

interface State {
  name: string;
  filterText: string;
  searchOnlyInOpenedCategories: boolean;
  natives: INatives;
}

export default class App extends React.Component<{}, State> {
  constructor(props: any){
    super(props);
    this.state = {
      name: 'Jakaś nazwa',
      filterText: '',
      searchOnlyInOpenedCategories: true,
      natives: testNatives,
    }
    
    this.displayNatives = this.displayNatives.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onSearchInOpenedCategoriesChange = this.onSearchInOpenedCategoriesChange.bind(this);
  }

  displayNatives(){
    for (const category in this.state.natives) {
      if (this.state.natives.hasOwnProperty(category)) {
        const element = (this.state.natives as any)[category];
        console.log(category);
        console.log(element);
      }
    }
  }

  onFilterTextChange(text: string){
    this.setState({
      filterText: text
    });

    console.log(text);
    console.log(`Changed filter text to ${this.state.filterText}`);
  }

  onSearchInOpenedCategoriesChange(value: boolean){
    this.setState({
      searchOnlyInOpenedCategories: value
    });
  }

  render(){
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col>
              <Header filterText={this.state.filterText} onFilterTextChange={this.onFilterTextChange}
                      searchOnlyInOpenedCategories={this.state.searchOnlyInOpenedCategories}
                      onSearchInOpenedCategoriesChange={this.onSearchInOpenedCategoriesChange}/>   
            </Col>         
          </Row>
          <Row>
            <Col>
              <NativesCategories natives={this.state.natives} filterText={this.state.filterText} />
            </Col>
          </Row> 
        </Container>
      </div>
    );
  }
}
