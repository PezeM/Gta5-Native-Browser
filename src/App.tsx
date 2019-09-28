import React from 'react';
import './App.css';
import testNatives from './data/natives.json';
import Header from './components/layout/Header';
import NativesCategories from './components/NativeCategories';
import { IAppContext, AppContextProvider } from './context';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const initialContext: IAppContext = {
  filterText: '',
  searchOnlyInOpenedCategories: true,
  natives: testNatives,
  changeFilterText(text: string) {
    console.log(text);
    this.filterText = text;
  },
  changeSearchOnlyInOpenedCategories: (value: boolean) => {
    return initialContext.searchOnlyInOpenedCategories = value;
  }
}

export default class App extends React.Component<{}, IAppContext> {
  constructor(props: any){
    super(props);
    
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onSearchInOpenedCategoriesChange = this.onSearchInOpenedCategoriesChange.bind(this);
    this.state = {
      filterText: '',
      searchOnlyInOpenedCategories: true,
      natives: testNatives,
      changeFilterText: this.onFilterTextChange,
      changeSearchOnlyInOpenedCategories: this.onSearchInOpenedCategoriesChange,
    };
  }

  onFilterTextChange(text: string){
    this.setState({
      filterText: text
    });
  }

  onSearchInOpenedCategoriesChange(value: boolean){
    this.setState({
      searchOnlyInOpenedCategories: value
    });
  }

  render(){
    return (
      <div className="App">
        <AppContextProvider value={this.state}>
          <Container fluid={true}>
            <Row>
              <Col>
                <Header />   
              </Col>         
            </Row>
            <Row>
              <Col>
                <NativesCategories natives={this.state.natives} />
              </Col>
            </Row> 
          </Container>
        </AppContextProvider>
      </div>
    );
  }
}
