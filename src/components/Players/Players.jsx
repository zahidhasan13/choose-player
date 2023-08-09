/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const Players = (props) => {
    const choosePlayer = props.choosePlayer;
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, []);

    

    return (
        <div className="md:w-3/4 md:mr-2">
            <h2 className="text-3xl my-3">All Players</h2>
            <div className="md:grid md:grid-cols-3 md:gap-4">
                {
                    players.map(player => <Player key= {player.id} player = {player} choosePlayer = {choosePlayer}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;