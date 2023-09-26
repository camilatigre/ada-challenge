type CardUnitProps = {
    id: number,
    title: string,
    content: string,
    status: ColumnStatus
}

type ColumnStatus = {
    todo: string,
    doing: string,
    done: string
}

type BoardItems = {
    title: string,
    cards: Array<CardUnitProps>
}

export type {
    CardUnitProps,
    BoardItems,
    ColumnStatus
}