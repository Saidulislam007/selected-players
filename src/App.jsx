import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import { Suspense, useState } from 'react'

const fetchPlayers = () => fetch('/Players.json').then(res => res.json())
const playersPromise = fetchPlayers()
function App() {

  // Toggle state: "available" বা "selected"
  const [activeTab, setActiveTab] = useState("available")
  const [availableBalance, setAvailableBalance] = useState(5000000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  return (
    <>
      {/* nav-bar */}
      <Navbar availableBalance={availableBalance}></Navbar>

      {/* Header with toggle buttons */}
      <div className='flex justify-between items-center max-w-[1200px] mx-auto mb-10'>
        <h1 className="text-2xl font-bold">
          {activeTab === "available" ? "Available Players" : `Selected Players (${purchasedPlayer.length}/6)`}
        </h1>
        <div className='flex items-center font-bold mr-4'>
          <button
            className={`p-1 border  border-gray-400 border-r-0 ${activeTab === "available" ? "bg-[#e7fe29]" : "bg-white"
              }`}
            onClick={() => setActiveTab("available")}
          >
            Available
          </button>

          <button
            className={`p-[3px] border  border-gray-400 border-l-0 ${activeTab === "selected" ? "bg-[#e7fe29]" : "bg-white"
              }`}
            onClick={() => setActiveTab("selected")}
          >
            Selected (<samp>{purchasedPlayer.length}</samp>)
          </button>
        </div>
      </div>

      {/* Conditional Rendering of Pages */}
      {activeTab === "available" && (
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <AvailablePlayers availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}></AvailablePlayers>
        </Suspense>
      )}

      {activeTab === "selected" && (
        <Suspense>
          <SelectedPlayers purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
          setActiveTab={setActiveTab}
          ></SelectedPlayers>
        </Suspense>
      )}
    </>
  )
}

export default App
