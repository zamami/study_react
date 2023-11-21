// コンポーネントのファイルは.jsx

export const App = () => {

  /* {}を使ってjsを書くこともできる */
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
