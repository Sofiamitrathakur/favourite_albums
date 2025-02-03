import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import results from './data/albums.json'

const App = () => {
  return (
    <div className="flex-row">
      <SideBar />
      <MainContent results={results} />
    </div>
  )
}

export default App
