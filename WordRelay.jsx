const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '백호동',
    value: '',
    result: '',
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length -1 ] === this.state.value[0]){
      this.setState({
        word: this.state.value,
        result: '딩동댕',
        value: '',
      })
      this.input.focus();
    }else{
      this.setState({
        result: '땡',
        value: ''
      })
      this.input.focus();
    }
  }
  onChangeInput =(e) => {
    this.setState({value: e.target.value})
  }
  input;
  onRefInput =(c) => {
    this.input = c;
  }
   
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm }>
          <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
          <button>입력</button>
          <div>{this.state.result}</div>
        </form>
      </>
    );
  }
}
module.exports = WordRelay;
