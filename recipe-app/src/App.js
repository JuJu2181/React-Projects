import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import { Logo, Nav} from "./components/Style";
import { GiKnifeFork} from "react-icons/gi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>Recipy</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}



export default App;
