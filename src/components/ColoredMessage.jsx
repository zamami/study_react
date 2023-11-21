
// propsを使うことでコンポーネントを動的に扱うことができるようになった。
export const ColoredMessage = (props) => {

  const { color, children } = props; //propsを分割代入
  const contentStyle = {
  //  color: color,   props.colorと書かなくて良くなった。
   color, //さらにキーとバリューが同じ名前なので省略記法で書くことができる
   fontSize: "20px"
  };

  return <p style={ contentStyle }>{children}</p>; // htmlの中では{}の中にjsを書く
};
