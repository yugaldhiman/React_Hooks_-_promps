import "./App.css";
import Card from "./componentes/Card";
function App() {
  let hedding = "Developer form";
  let buttons = "Click me";
  return (
    <>
      <h1 className="bg-green-400 p-1">Tailwind test</h1>
      <Card propsver={hedding} button={buttons} />
    </>
  );
}

export default App;
