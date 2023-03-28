import { 
  BrowserRouter as Router,
  Route, Routes
 } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

// Without using Router
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <NotesListPage />
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<NotesListPage />} />
          <Route path='note/:id' element={<NotePage history={history} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
