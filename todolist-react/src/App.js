import './App.css';
import {useState} from 'react';
import HeaderInput from './components/HeaderInput';
import Todolists from './components/Todolists';

function App() {
  const [todoState, setTodoState] = useState({
    todoLists: [
      {id: 1, text: "할일1", isDone: false},
      {id: 2, text: "할일2", isDone: true}
    ],
    inputText: ""  //인풋텍스트 빈문자열
  });
  const [id, setId] = useState(3);  //구조분해할당

  // input에 이벤트 발생 시 input의 value값 상태 업데이트 해주기
  const onChange = (e) => {  //체인지 함수
    setTodoState({  // 업데이트 
      ...todoState,   //useState 배열 객체 스프레드
      inputText: e.target.value // 인풋값 추가
    });
    
}

// + 버튼 클릭했을 때 함수
const onAddTodo = () => {
  // 새로운 리스트 변수 만들어 기존 리스트 상태 스프레드 구문으로 뿌려주고,
  // 새롭게 변경된 값들만 작성해 덮에 씌워준다
  const newTodoLists = [ 
      ...todoState.todoLists, 
      {id: id, text: todoState.inputText, isDone: false}
  ]
  // 상태 업데이트 !
  setTodoState({
    todoLists:newTodoLists, // li는 새롭게 변경된 리스트 배열이 담긴 변수로 업데이트
    inputText: "" // input은 다시 빈 배열로 업데이트
  })

  setId(id+1) // id값은 1씩 더한 값으로 업데이트
  console.log(todoState.todoLists)
}

// X 버튼 클릭했을 때 함수
const delTodoLists = (id) =>{
  const newTodoLists = todoState.todoLists.filter(todo => todo.id !== id);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  });
}

const onIsDoneToggle = (id) => {
  const newTodoLists = todoState.todoLists.map(todo=>
    todo.id === id ? {
      ...todo,
       isDone: !todo.isDone}:todo)
    setTodoState({
      ...todoState,
      todoLists: newTodoLists
    });
}
  return (
    <div className="App todo">
      <HeaderInput 
        inputText={todoState.inputText}  // 키이름 = 벨유값
        onChange={onChange} 
        onAddTodo={onAddTodo}/>
      <Todolists todoLists={todoState.todoLists}
        delTodoLists={delTodoLists} 
        onIsDoneToggle={onIsDoneToggle}/>
    </div>
  );
}

export default App;
