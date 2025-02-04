import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
// import Button from './components/Button.jsx'
import albums from './data/albums.json'

const App = () => {
  return (
    <div className="flex-row">
      <SideBar />
      <MainContent albums={albums} />
      {/* <Button /> */}
    </div>
  )
}

export default App
