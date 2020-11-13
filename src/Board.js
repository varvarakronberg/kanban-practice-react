import Column from './Column.js';
const Board = () => {
    const tasks = [
        {
            name: 'Winnie',
            id: 0,
            cards: [{
                cardText: 'default cardText card 1',
            },
            {
                cardText: 'default cardText card 2',
            }]
        },
        {
            name: 'Bob',
            id: 1,
            cards: [{
                cardText: 'default cardText card 1',
            },
            {
                cardText: 'default cardText card 2',
            }]
        },
        {
            name: 'Thomas',
            id: 2,
            cards: [{
                cardText: 'default cardText card 1',
            },
            {
                cardText: 'default cardText card 2',
            }]
        },
        {
            name: 'George',
            id: 3,
            cards: [{
                cardText: 'default cardText card 1',
            },
            {
                cardText: 'default cardText card 2',
            }]
        },

    ];



    return (
        <div className="board">
            {tasks.map(({ name, cards }) => {
                return <Column
                    name={name}
                    cards={cards}
                />
            })}
        </div>
    )
};

export default Board; 