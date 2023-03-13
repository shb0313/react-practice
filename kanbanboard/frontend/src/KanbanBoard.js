import React, {useState} from 'react';
import styles from './assets/css/KanbanBoard.css';
import data from './assets/json/data.json';
import CardList from './CardList';

const KanbanBoard = () => {
    const [cards, setCards] = useState(data);

    const changeTaskDone = function(cardNo, taskNo, done) {
        // console.log(cardNo, taskNo, done);
        const cardIndex = cards.findIndex(card => card.no === cardNo);
        const taskIndex = cards[cardIndex].tasks.findIndex(task => task.no === taskNo);
        // console.log(cardIndex, taskIndex);

        cards[cardIndex].tasks[taskIndex] = Object.assign({}, cards[cardIndex].tasks[taskIndex], {
            done: done
        });

        setCards(cards);
    }

    return (
        <div className={styles.KanbanBoard}>
            <CardList 
                key={'To Do'}
                title={'To Do'}
                cards={cards.filter(card => card.status === 'ToDo')}
                callback={changeTaskDone}/>
            
            <CardList
                key={'Doing'}
                title={'Doing'}
                cards={cards.filter(card => card.status === 'Doing')}
                callback={changeTaskDone}/>
            
            <CardList
                key={'Done'}
                title={'Done'}
                cards={cards.filter(card => card.status === 'Done')}
                callback={changeTaskDone}/>
        </div>
    );
};

export default KanbanBoard;