/* eslint-disable react/prop-types */

const Player = (props) => {
    const {name, img, role, nationality} = props.player;
    const choosePlayer = props.choosePlayer;
    return (
        <div className="">
            <img src={img} alt="" className="w-full rounded-md md:h-56"/>
            <div className="space-y-4 my-3">
                <h3 className="text-3xl">Name: {name}</h3>
                <p>Role: {role}</p>
                <p>Nationality: {nationality}</p>
                <button className="bg-blue-600 w-full text-lg rounded-md text-white font-bold" onClick={() => choosePlayer(props.player)}>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;