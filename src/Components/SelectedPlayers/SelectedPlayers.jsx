import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({ purchasedPlayer, setPurchasedPlayer,setActiveTab }) => {

  return (
    <div className='max-w-[1200px] mx-auto'>
      {
        purchasedPlayer.map(player => <SelectedCard player={player}
          key={player.name}

          setPurchasedPlayer={setPurchasedPlayer}
          purchasedPlayer={purchasedPlayer}></SelectedCard>)
      }
      <div className='border border-black rounded-xl p-2 w-40 mt-3'>
        <button onClick={()=> setActiveTab("available")} className="btn btn-warning w-[140px] ">Add More Player</button>
      </div>

    </div>
  );
};

export default SelectedPlayers;