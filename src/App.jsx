import { useEffect } from "react";
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModule";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {

  console.log("レンダリング");
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  useEffect(()=> {
    alert()
  }, [num]);


  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue"> お元気ですか？ </ColoredMessage>
      <ColoredMessage color="pink"> 元気です! </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </>
  );
};
