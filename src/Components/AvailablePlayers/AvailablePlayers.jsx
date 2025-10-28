import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance,setPurchasedPlayer,purchasedPlayer }) => {
  const playersData = use(playersPromise);

  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-3 m-2'>
      {
        playersData.map(player=> <PlayerCard key={player.name} availableBalance={availableBalance} 
          setAvailableBalance={setAvailableBalance} 
          player={player}
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer} ></PlayerCard>      
        )
      }

    </div>
  );
};

export default AvailablePlayers;