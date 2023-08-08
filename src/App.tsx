import './App.css'
import searchBar from './searchBar'
import Listing from './card'

const App: React.FC = () => {
  return (
    <>
    <div><Listing/></div>
    <div><searchBar/></div>
    </>
  )
}

export default App
