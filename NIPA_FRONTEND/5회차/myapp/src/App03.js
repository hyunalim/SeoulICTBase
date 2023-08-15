import React, { useState, useCallback } from "react";

const Light = React.memo(({ room, on, toggle }) => {
  console.log({ room, on });
  return (
    <button onClick={toggle}>
      {room} {on ? "ON" : "OFF"}
    </button>
  );
})
//App에는 3개의 상태 masterOn, kitchenOn, bathOn :불리언으로 On oFf 여부 받아서 표시 
const App = () => {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);
//on off를 바꿀 수 있는기능 : toogleMaster 원래 상태와 반전되게 함 
//useCallback(): masterOn의 상태가 바뀌었을때  나머지 상태도 같이 재정의가 되어 리렌더링 되는것을 방지하는 것 
  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(
    () => setKitchenOn(!kitchenOn),
    [kitchenOn]
  );
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  return (
    <>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}

export default App