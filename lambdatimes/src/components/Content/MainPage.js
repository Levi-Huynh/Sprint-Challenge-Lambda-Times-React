import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';
import '../../CSS/index.css';



export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
    // Once the component has mounted, get the data and reflect that data on the state.
  }

  
  changeSelected = tab => {
    //can pass in props into the paramater when put this function on a component
    // this function should take in the tab and update the state with the new tab.
            this.setState({selected: tab
           });
  };



  filterCards = (card) => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
        //use callback in filter to update state. callbacks help to select what we need from arrays
    */
     
  }

  
   


  render() {
    return (
      <div className="content-container">
      

        <Tabs tabs={this.state.tabs} selected={this.state.selected} changeSelected={this.changeSelected.bind(this)}/>
        <Cards cards=  {this.state.selected !== 'all'? this.state.cards.filter(card => card.tab ==this.state.selected) : this.state.cards} />
      </div>
    );
  }
}

  
          // Add 2 props to the Tabs component, 
          // `selectedTab` that includes the currently selected tab
          // and `selectTabHandler` that includes the function to change the selected tab
        