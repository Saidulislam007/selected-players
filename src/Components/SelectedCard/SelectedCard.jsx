import React from 'react';
import Frame from './Frame.png'; // মনে রাখো, শুধু .png

const SelectedCard = ({ player, setPurchasedPlayer }) => {

    const handleDelete = (playerToDelete) => {
        setPurchasedPlayer(prevPlayers =>
            prevPlayers.filter(p => p.name !== playerToDelete.name)
        );
    }

    return (
        <div className='flex justify-between items-center p-3 mt-4 border rounded-lg'>
            <div className='flex items-center'>
                <div>
                    <img
                        className='w-[60px] h-[60px] rounded-xl'
                        src={player.playerImage}
                        alt={player.name}
                    />
                </div>
                <div className='mx-2 text-start'>
                    <h1 className='font-bold'>{player.name}</h1>
                    <p className='text-sm text-gray-500'>{player.bowlingStyle}</p>
                </div>
            </div>
            <div onClick={() => handleDelete(player)} className="cursor-pointer">
                <img src={Frame} alt="Delete" />
            </div>
        </div>

    );
};

export default SelectedCard;
