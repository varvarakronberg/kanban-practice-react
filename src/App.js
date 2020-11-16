
import Board from './Board.js';
import './App.css';



function App() {
  return (
    <Board />
  )

}

export default App;

//structure of Components: 
// kanbanApp - Board (contains all the individual boards)
  // - personalBoard - Column// list (individual board)
    //- ownerName  - Name (header of the board with owner's name)
    //- taskCard - Card(individual task)
      // - moveCard (moves card to next column)
    //- addCardButton - AddCard (button that adds the card)

