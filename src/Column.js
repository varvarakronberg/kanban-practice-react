import Card from './Card.js';
const Column = props => {
    const { name, cards } = props;
    return (
        <li className="column">
            <h2 className="name">{name}</h2>


            <ul className="tasksList">
                {cards.map(({ cardText }) => { return <Card text={cardText} /> })
                }

            </ul>
        </li>
    )
};

export default Column; 
