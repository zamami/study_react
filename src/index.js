import ReactDOM from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";


// アプリ全体でAdminFlagContextを参照したいのでAppをProviderで囲む
ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
  );
