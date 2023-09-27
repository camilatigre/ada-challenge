type CardUnitProps = {
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
}

type BoardItems = {
    columnName: string,
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