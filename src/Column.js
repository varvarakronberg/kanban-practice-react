import Card from './Card.js';
const Column = props => {
    const { name, id, cards } = props;
    return (
        <li className="column">
            <h2 className={`name-header name-${id}`}>{name}</h2>
            <ul className="tasksList">
                {cards.map(({ cardText }) => { return <Card text={cardText} /> })
                }

            </ul>
        </li>
    )
};

export default Column; 
