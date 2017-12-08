import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Stories from './Stories';

export default class App extends Component {
  state = {
    className: 'hidden',
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 430) {
      this.setState({
        className: 'show',
      })
    }

    if(document.documentElement.scrollTop < 350) {
      this.setState({
        className: 'hidden',
      })
    }
  }

componentDidMount() {
  window.onscroll = () => this.handleScroll()
}

  // render() {
  //   return (
  //     <div className="App">
  //       <Header />
  //       <About className={ this.state.className } />
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="App">
        <Stories />
      </div>
    );
  }
}
