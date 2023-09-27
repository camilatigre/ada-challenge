export const appendCardsToColumn = (cards, boardData) => {
    for (const card of cards) {
        for (const column of boardData) {
            if (card.lista === column.columnName) {
                column.cards.push(card);
                break;
            }
        }
    }

    return boardData;
}