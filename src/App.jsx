import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

  // stateの定義、useState(state変数, stateを更新するための関数)
  const [num, setNum] = useState(0);

  // ボタンを押した時にstateをカウントアップ
  const onClickButton = () => {
    setNum(num + 1); //　本来は setNum((num)=> num * 1);　のように関数を使う
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue"> お元気ですか？ </ColoredMessage>
      <ColoredMessage color="pink"> 元気です! </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
