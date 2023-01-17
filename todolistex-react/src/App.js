import { useState } from 'react';
import './App.css';
import HeaderInput from './components/HeaderInput';
import TodoLists from './components/TodoLists';

function App() {
  // todolist의 상태 관리하기 (li , input)
  const [todoState, setTodoState] = useState({
    // li 상태관리 (초기값 => 객체가 담긴 배열)
    todolists: [
      {
        id: 1,
        text: 'list1'
      },
      {
        id: 2,
        text: 'list2'
      }
    ],
    // input 상태관리 (초기 값 => 빈 문자열)
    inputText: ""
  });

  // list의 id상태 관리하기 
  const [id, setId] = useState(3);

  // input에 이벤트 발생 시 setTodoState로 inputText 상태 업데이트 해주자
  const onChange = (e) => {
    setTodoState({
      // 기존 상태는 유지
      ...todoState,
      // 새로운 변경된 값만 덮어 씌워줌
      inputText: e.target.value // 이벤트는 input의 value값에 접근
    })
  }

  // + 버튼 클릭했을 때 함수
  const onAdd = () => {
    // 새로운 리스트 변수를 만들기 (배열)
    const newtodolist = [
      ...todoState.todolists, // 기존 리스트 상태는 유지,
      // 새롭게 업데이트 된 객체를 덮어 씌워줌
      {
        id: id,
        text: todoState.inputText
      }
    ]
    // 상태 업데이트 !!
    setTodoState({
      todolists: newtodolist, // li는 새로운 리스트 변수(배열)로 업데이트 됨
      inputText: "" // input은 다시 빈 배열로 업데이트 됨
    })
    // id 상태 업데이트
    setId(id + 1); // id값은 현재 id값에 1을 더한 값으로 업데이트 됨
  }

  // X 버튼 클릭했을 때 함수

  return (
    <div className="App">
      <HeaderInput inputText={todoState.inputText}
        onChange={onChange}
        onAdd={onAdd}/>
      <TodoLists todolists={todoState.todolists}/>
    </div>
  );
}

export default App;
