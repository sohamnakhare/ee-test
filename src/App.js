import "antd/dist/antd.css";
import "./App.css";

import AppLayout from "./components/AppLayout";
import Products from "./pages/Products";

function App() {
  return (
    <AppLayout>
      <Products />
    </AppLayout>
  );
}

export default App;
