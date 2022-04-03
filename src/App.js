import Payment from "pages/Payment";
import DetailPage from "pages/DetailPage";
import ListPage from "pages/ListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from "pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListPage />}></Route>
        <Route exact path="/detail" element={<DetailPage />}></Route>
        <Route exact path="/payment" element={<Payment />}></Route>
        <Route exact path="/history" element={<History />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
