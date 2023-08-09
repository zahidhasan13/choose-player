import Players from '../Players/Players';
import Choosen from '../Choosen/Choosen';
import { useState } from 'react';

const Home = () => {
    const [choose, setChoose] = useState([]);

    const choosePlayer = (player) => {
        const choosenPlayer = [...choose, player];
        setChoose(choosenPlayer);
    }
    return (
        <div className='px-4 md:flex'>
            <Players choosePlayer= {choosePlayer}></Players>
            <Choosen choose={choose}></Choosen>
        </div>
    );
};

export default Home;