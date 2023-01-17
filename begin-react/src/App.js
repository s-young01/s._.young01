import './App.css';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
// import Counter from './components/Counter';


// function App() {
//   return (
//     <div className="App">
//       <Counter/>
//     </div>
//   );
// }

// export default App;

//카운터 클릭이벤트 실습


function App() {
  return (
    <div className="App">
    <Wrapper>
         <Hello name="green" message="안녕" isSpecial={true}/>
         {/* isSpecial에 값을 설정 안하면 기본 값은 true다 */}
         <Hello name="blue" message="반가워" isSpecial/>
         <Hello name="Yellow" message="재미있어" isSpecial={false}/>
         <Hello name="red" message="굿굿"/>
         <Hello message="하하하 이름 기본값으로 저장"/>
     </Wrapper>
    </div>
  );
}

export default App;