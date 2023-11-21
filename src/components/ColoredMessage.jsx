
// propsを使うことでコンポーネントを動的に扱うことができるようになった。
export const ColoredMessage = (props) => {
  const contentStyle = {
    color: props.color,
   fontSize: "20px"
  };

  return <p style={ contentStyle }>{props.children}</p>; // htmlの中では{}の中にjsを書く
};
