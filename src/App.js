import DetailPage from "pages/DetailPage";
import ListPage from "pages/ListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListPage />}></Route>
        <Route exact path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
