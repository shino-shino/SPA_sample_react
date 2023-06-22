import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import SnsPage from './components/SnsPage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sns" element={<SnsPage />} />
          <Route path="*" element={<NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
