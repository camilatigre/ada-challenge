type CardUnitProps = {
    id: number,
    title: string,
    content: string,
    status: string
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
}