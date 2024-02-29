
import Splash from "./views/Splash";
import About from "./views/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' component={Splash} />
        <Route exact path='/about' component={About} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
