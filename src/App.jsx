// コンポーネントのファイルは.jsx

export const App = () => {

  /* {}を使ってjsを書くこともできる */
  const onClickButton = () => {
    alert();
  };

  const contentStyle = {
    color: "blue",
   fontSize: "20px"  // ※font-sizeではない。JSではオブジェクトのプロパティに-は使えない
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
