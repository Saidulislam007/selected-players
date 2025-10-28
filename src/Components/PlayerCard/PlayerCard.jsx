import React, { useState } from 'react';

const PlayerCard = ({ player, setAvailableBalance, availableBalance ,setPurchasedPlayer,purchasedPlayer}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = (playerData) => {
        const playersPrice=parseInt(player.price.split(",").join("").split(",").join("").split("$").join(""))
        if(availableBalance < playersPrice){
            alert('balance not found')
            return;
        }
        if(purchasedPlayer.length==5){
            alert('Not more selected');
        }

        setIsSelected(true)
        setAvailableBalance(availableBalance - playersPrice)
        setPurchasedPlayer([...purchasedPlayer,playerData]);
    }
 
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src={player.playerImage} alt={player.name} className="w-full h-60 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{player.name}</h2>
                    <p>
                        <span className="flex items-center">
                            <span className="mr-2">🌍</span> {player.country}
                        </span>
                    </p>
                    <p>Rating: {player.rating}</p>
                    <p>Batting: {player.battingStyle}</p>
                    <p>Bowling: {player.bowlingStyle}</p>
                    <p>Price:{player.price}</p>

                    <div className="card-actions justify-end">
                        <button
                            disabled={isSelected} onClick={() =>handleSelected(player)} className="btn btn-primary mr-18">
                            {isSelected === true ? "selected" : "chog Players"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlayerCard;
