import React from 'react';
import './App.css';
import testNatives from './data/natives.json';
import Header from './components/layout/Header';
import { INatives } from './constans/interfaces';
import NativesCategories from './components/NativeCategories';

interface State {
  name: string;
  filterText: string;
  natives: INatives
}

export default class App extends React.Component<{}, State> {
  constructor(props: any){
    super(props);
    this.state = {
      name: 'Jakaś nazwa',
      filterText: '',
      natives: testNatives,
    }
    
    this.displayNatives = this.displayNatives.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);    
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

  render(){
    // let key = 0;
    // const nativesCategories: JSX.Element[] = [];
    // for (const category in this.state.natives) {
    //   if (this.state.natives.hasOwnProperty(category)) {
    //     nativesCategories.push(<li key={key++}>{category}</li>);
    //     if(this.state.natives[category] == null) continue;

    //     const categoryItems: JSX.Element[] = [];
    //     for (const native in this.state.natives[category]) {
    //         const test = this.state.natives[category][native];
    //         categoryItems.push(<li key={key++}>{camelizeText(test.name)}</li>);
    //     }

    //     nativesCategories.push(<ul key={key++}>{categoryItems}</ul>);
    //   }
    // }

    return (
      <div className="App">
        <header className="App-header">
          <Header filterText={this.state.filterText} onFilterTextChange={this.onFilterTextChange}/>
          <NativesCategories natives={this.state.natives} filterText={this.state.filterText} />
        </header>
      </div>
    );
  }
}
