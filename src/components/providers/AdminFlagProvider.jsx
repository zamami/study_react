import { createContext, useState } from "react" ;

// AdminFlagContextという名前でContextの器を作成
// createContextはデフォルト値も設定できる
// Contextを参照する側のコンポーネントで使用するためexportする

export const AdminFlagContext = createContext({});

// Contextの値を参照できるようにするために、ProviderでContextの値を参照したいコンポーネント群を囲む
// （多くの場合はルートコンポーネントなど）
export const AdminFlagProvider = props => {
  const { children } = props;

  // 管理者フラグをstateで作成（オブジェクトの省略記法)
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminFlagContext.Provider value ={{isAdmin, setIsAdmin}}>
      {children}
    </AdminFlagContext.Provider>
  );
};
