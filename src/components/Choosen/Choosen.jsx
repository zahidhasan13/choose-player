/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Choosen = ({choose}) => {
    return (
        <div className="bg-gray-400 p-4 md:w-1/4 md:ml-2">
            <h3 className="bg-gray-700 p-2 rounded text-white font-medium">Choosen: {choose.length} Player</h3>
            <div>
                {
                    choose.map(select => <h3 key = {select.id}>Name: <span className="text-lg">{select.name}</span></h3>)
                }
            </div>
        </div>
    );
};

export default Choosen;