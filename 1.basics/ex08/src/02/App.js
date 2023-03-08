import React from 'react';

function App() {
  /*
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할수 있다.
    
    오류:
      <h2>01</h2>
      <p>JSX Tutorial - 특징1: HTML과 차이점</p>
    
      이유:
      변환되는 코드
      React.createElement('div', null, React.createElement('h2', null, '01'), React.createElement('p', null, 'JSX..'))
  */

  return (
    <div id="App">
      <h2>01</h2>
      <p>JSX Tutorial - 특징2: Single Root</p>
    </div>   
  );
}

export default App;