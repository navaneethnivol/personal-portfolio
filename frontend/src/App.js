import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import './App.css';
import './index.css';

// Pages
import Home from './home/home';
import WorkPage from './work/WorkPage';
import GuestBookPage from './guestbook/GuestBookPage'

// Components
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>

      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

        <Router>

          <Navigation></Navigation>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<WorkPage />} />
            <Route path='/guestbook' element={<GuestBookPage />} />
          </Routes>
        </Router>
      </div>

    </body>
  );
}

export default App;
