import { create } from 'zustand'

export const useStore = create((set) => ({
    boardData: [
        { columnName: 'ToDo', title: 'TO DO', cards: [] },
        { columnName: 'Doing', title: 'DOING', cards: [] },
        { columnName: 'Done', title: 'DONE', cards: [] }
    ],
    token: "",
    setToken: (token) => set((store) => ({ ...store, token })),
    getToken() { return this.token },
    setBoardData: (updatedBoardData) => set((store) => ({ ...store, boardData: updatedBoardData })),
    getBoardData() { return this.boardData },
}))