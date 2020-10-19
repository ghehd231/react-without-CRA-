const React =  require('react');
const {useState, useRef} = React;

const WordRelay = () => {
  const [word, setWord] = useState('백호동');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length -1] === value[0]){
      setWord(value);
      setResult('딩동댕!!');
      setValue('');

      inputRef.current.focus();
    }else{
      setValue('');
      setResult('떙');
      
      inputRef.current.focus();
    }
  }
  const onChangeInput =(e) => {
    setValue(e.target.value);
  }
  
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm }>
        <input type="text" ref={inputRef} value={value} onChange={onChangeInput}/>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}
module.exports = WordRelay;
