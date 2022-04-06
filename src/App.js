import PaymentPage from "pages/PaymentPage";
import DetailPage from "pages/DetailPage";
import ListPage from "pages/ListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistoryPage from "pages/HistoryPage";
import SuccessPage from "pages/SuccessPage";
import SearchResultPage from "pages/SearchResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListPage />}></Route>
        <Route exact path="/detail/:id" element={<DetailPage />}></Route>
        <Route exact path="/payment" element={<PaymentPage />}></Route>
        <Route exact path="/history" element={<HistoryPage />}></Route>
        <Route exact path="/success" element={<SuccessPage />}></Route>
        <Route exact path="/search/:q" element={<SearchResultPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
