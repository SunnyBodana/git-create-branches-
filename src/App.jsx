import Login from "./components/Login";
import Product from "./components/Product";
import "./components/style.css"
export default function App() {
  return (
    <div>
      <h1 className="app-title">My E-Commerce App</h1>
      <Login />
      <Product />
    </div>
  );
}
