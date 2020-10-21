// import React, { Component } from 'react';
// import Try from './Try';
const React = require('react');
const { Component } = React;
const Try = require('./Try');

function getNumbers() {
  //겹치지 않는 숫자 4개 뽑는 함수
  const condidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const num = condidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(num);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };
  onSubmitForm = e => {
    e.preventDefault();
    console.log(this.state.answer);

    if (this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '홈런',
        tries: [...this.state.tries, { try: this.state.value, result: '홈런' }],
      });
      alert('게임을 다시 시작합니다.');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split('').map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        //10번 이상 틀렸을때
        this.setState({
          result: `10번 넘게 틀려서 실패, 답은 ${answer.join(',')} 입니다. `,
        });
        alert('게임을 다시 시작합니다.');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        this.setState({
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike} 스트라이크 ${ball} 볼입니다.`,
            },
          ],
          value: '',
        });
        // this.setState((state, props)=> {
        // console.log(state, props)
        // // console.log(state.value, state.tries)
        // return ({
        //     tries: [
        //         ...state.tries,

        //         // {
        //         //     try: state.value,
        //         //     result: `${strike} 스트라이크 ${ball} 볼입니다.`
        //         // }
        //     ]
        // })})
      }
    }
  };
  onChangeInput = e => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.state.result}
        </h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>
          시도: {this.state.tries.length}
        </div>
        <ul>
          {this.state.tries.map((v, i) => {
            return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

// export default NumberBaseball;
module.exports = NumberBaseball;
