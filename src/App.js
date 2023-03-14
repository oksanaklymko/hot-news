import {Routes, Route} from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import About from './components/pages/About';
import News from './components/pages/News';
import Article from './components/pages/Article';
import NotFoundPage from './components/pages/NotFoundPage';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/news/:id/:search" element={<Article />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
}

export default App;
