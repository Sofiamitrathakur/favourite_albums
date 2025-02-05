import './App.css'
import Header from './components/Header.jsx'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import albums from './data/albums.json'

const App = () => {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <SideBar />
        <div className="main-container">
          <MainContent albums={albums} />
          <div className="layout">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
