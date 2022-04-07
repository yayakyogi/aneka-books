import PaymentPage from "pages/PaymentPage";
import DetailPage from "pages/DetailPage";
import ListPage from "pages/ListPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HistoryPage from "pages/HistoryPage";
import SuccessPage from "pages/SuccessPage";
import SearchResultPage from "pages/SearchResultPage";
import ClearAllData from "pages/ClearAllData";
import Page404 from "pages/page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListPage />} />
        <Route exact path="/detail/:id" element={<DetailPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        <Route exact path="/history" element={<HistoryPage />} />
        <Route exact path="/success" element={<SuccessPage />} />
        <Route exact path="/search/:q" element={<SearchResultPage />} />
        <Route exact path="/clearall" element={<ClearAllData />} />
        <Route exact path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
