import React, { Component } from 'react';
import mojs from 'mo-js';

const Stories = props => (
  <div className="stories" ref={el => this.div = el}>
    <h1>A Bunch of Stories!</h1>
    <Story/>
    <Story/>
    <Story/>
    <Story/>
  </div>
)

export default Stories;

class Story extends Component {
  CheckVisibleInViewport = element => {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    console.info('Top: %s - Left: %s', rect.top, rect.left);

    return (
      rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
  
  handleScroll = () => {
    if(this.CheckVisibleInViewport(this.div)) {
      this.motion.fadeIn(this.div).play();
      window.removeEventListener('scroll', this.handleScroll);
    } 
  }

  motion = {
    fadeIn: (element) => new mojs.Html({
            el: element,
            x: { 0: 20, duration: 500, delay: 200, easing: 'cubic.out'},
            y: { 0: 20, duration: 1000 },
            opacity: {0: 1, duration: 1000, delay: 200, easing: 'cubic.out', }
          })
  }
  

  componentDidMount() {   
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render(){  
    return(
      <div className="story" ref={el => this.div = el} style={{ opacity: 0 }}>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt condimentum nisl eu viverra. Etiam vestibulum dictum ipsum, id vestibulum orci gravida a. Aenean feugiat tincidunt est, quis placerat ligula blandit eget. Donec massa nunc, consectetur sed sem in, suscipit consectetur mi. Cras sit amet nisl convallis, ultricies lorem quis, porttitor lacus. Ut massa felis, ultricies quis faucibus vel, molestie ac nunc. Integer vitae ipsum ac tortor efficitur pulvinar.</p>
        <p>Nullam id ipsum vel nisi dapibus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nibh magna, quis lacinia libero ultricies eu. Fusce euismod ex vitae vehicula malesuada. Donec eu euismod tellus. Quisque dictum nisl velit, in iaculis sapien ultrices sit amet. Ut at ante ipsum. Aliquam mattis efficitur eros, id gravida lectus rutrum porttitor. Integer nulla nulla, semper quis dapibus sed, mollis at magna. Sed dignissim odio non est maximus tristique. Praesent metus ante, suscipit at massa et, efficitur rutrum velit. Mauris malesuada congue bibendum. Etiam ut mattis felis, eget feugiat ante. Nam sapien sem, tincidunt ut vulputate at, dignissim nec lacus. In at ipsum imperdiet ipsum volutpat accumsan at at lorem. Nulla varius mauris massa, a accumsan mi lacinia sed.</p>
        <p>Praesent enim eros, tincidunt nec magna eget, gravida placerat nisi. Proin blandit tortor id eros cursus, id tempus mauris elementum. Phasellus massa nibh, eleifend non egestas sed, sagittis et ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sem augue, efficitur id faucibus quis, venenatis sed tortor. Ut fringilla diam et pretium dapibus. Cras vitae volutpat turpis, in pulvinar ex. Pellentesque id dui accumsan, blandit lorem id, pharetra felis. Vestibulum feugiat enim eget mauris porta, sit amet imperdiet felis scelerisque. Proin eu nulla rhoncus, consequat leo at, tempor mi. Pellentesque sollicitudin at magna vitae pretium. Etiam non purus quis magna accumsan luctus.</p>
        <p>Morbi scelerisque a urna a aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eget nisl non nulla molestie tempus. Sed sit amet eros facilisis, pellentesque metus sit amet, lobortis nisl. Curabitur consequat est eget orci molestie porta. Nam id augue suscipit, cursus eros quis, maximus quam. Vestibulum id leo vitae sapien gravida pellentesque. Ut tristique ex vitae hendrerit varius.</p>
        <p>Ut nec dui id justo gravida tristique. Morbi sit amet volutpat nunc. Ut eget arcu neque. Sed a sapien lacus. Proin facilisis condimentum mattis. Ut ornare eros vel aliquet ornare. Sed vitae purus id nulla porttitor suscipit sit amet in ipsum. Donec non tincidunt lorem. Aenean sed tempor nibh. Nulla tincidunt ex sed mauris porttitor tempor. Donec vitae blandit ante. Duis fermentum lorem metus, vel sodales magna consectetur in. Aenean ut tincidunt metus. Pellentesque ac nulla vitae ipsum posuere tempus a et velit. Fusce at magna sit amet odio varius porta.</p>
      </div>
    )
  }
}