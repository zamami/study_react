import { useContext, useEffect } from "react";
import { useState } from "react";
import { Card } from "./components/Card";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModule";
import { Emotion } from "./components/Emotion";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
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

  // context内のisAdminと更新関数を取得
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 切り替えボタンを押した時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

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
      <Emotion />
      <div>
        {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
        <button onClick={onClickSwitch}>切り替え</button>
        <Card isAdmin={isAdmin} />
      </div>
    </>
  );
};
