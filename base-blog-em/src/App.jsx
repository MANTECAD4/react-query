import { Posts } from "./Posts";
import "./App.css";
import { TanstackProvider } from "./TanstackProvider";

function App() {
  return (
    // provide React Query client to App
    <TanstackProvider>
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
    </TanstackProvider>
  );
}

export default App;
