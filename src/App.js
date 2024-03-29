import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/about'
              element={<AboutPage />}
            />
            <Route
              path='/articles'
              element={<ArticlesListPage />}
            />
            <Route
              path='/articles/:articleId'
              element={<ArticlePage />}
            />
            <Route 
              path='*'
              element={<NotFoundPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
