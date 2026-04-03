import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Blog from './pages/Blog';
import TurbochargingIdentities from './pages/blog/TurbochargingIdentities';
import FavoriteProblem from './pages/blog/FavoriteProblem';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/turbocharging-identities" element={<TurbochargingIdentities />} />
          <Route path="blog/favorite-problem" element={<FavoriteProblem />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
