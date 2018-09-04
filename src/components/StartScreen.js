import React from 'react';
import EmotionButton from './EmotionButton';

class StartScreen extends React.Component {
  state = {
    emotions: [
      {
        name: 'Arg',
        color: 'red',
      },
      {
        name: 'Glad',
        color: 'green',
      },
      {
        name: 'Nedstämd',
        color: 'blue',
      },
      {
        name: 'Harmonisk',
        color: 'orange',
      },
    ],
    selected: [],
  };

  render() {
    const { emotions } = this.state;
    const emotionsOutput = emotions.map((item, i) => (
      <EmotionButton item={item} key={i} />
    ));
    return (
      <React.Fragment>
        <h2>Hur mår du idag?</h2>
        <div className="startscreen-emotion-list">{emotionsOutput}</div>
      </React.Fragment>
    );
  }
}

export default StartScreen;
