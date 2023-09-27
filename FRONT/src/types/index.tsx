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

interface LoginCredentials {
    login: string;
    senha: string;
}

export type {
    LoginCredentials,
    CardUnitProps,
    BoardItems,
    ColumnStatus
}