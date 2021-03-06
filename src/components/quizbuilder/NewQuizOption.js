import React, { Component } from 'react';
import RemoveOptionButton from './RemoveOptionButton'

class NewQuizOption extends Component {
  render() {
    return (
      <div style={localStyles.answerRow}>
        <div className='a'>
          {'A' + (this.props.index + 1)}
        </div>
        <div>
        <input
          className='new-quiz-option'
          id='new-option-input'
          type='text'
          placeholder={this.props.option._placeholder}
          value={this.props.option._text}
          onChange={(event)=> this.props.handleChangeOption(this.props.questionIndex, this.props.index, event)}>
        </input>
        </div>
          <RemoveOptionButton
            removeOption={this.props.removeOption}
            questionIndex={this.props.questionIndex}
            index={this.props.index}
          />
      </div>
    )
  }
}

const localStyles = {
  answerRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
  }
}

export default NewQuizOption;
