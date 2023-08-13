import React, { useEffect } from 'react';

function App() {
  //form에서 submit 이벤트발생 -> handleSubmit 동작
  //content동작: 로컬스토리지에 콘텐츠 키와 값이 저장된다.  
  const handleSubmit = (content) => {
    window.localStorage.setItem("content", `${content}`)
  }
//저장된 내용이 리렌더링 될때마다 alert에 표현하고 내용을 가져온다.
  useEffect(() => {
    window.alert(`content의 내용 : ${window.localStorage.getItem('content')}`)
  }, [])

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e.target.content.value)}>
        <input type='text' placeholder='로컬스토리지에 저장할 내용' name='content' />
        <input type='submit' value='저장' />
      </form>
    </>
  );
}

export default App