import { createContext } from "react";



export const Stash = {

    list: [
        { id: 1, title: "Título post 1", content: "Content 1 for the win."},
        { id: 2, title: "Título post 2", content: "Content 2 for the lose." },
    ],

    getObjectById: (id) => {
        const post = Stash.list.filter( o => o.id === parseInt(id) )[0];
        return post;
    },
};
Stash.object = Stash.list[0];

const stash_context = createContext(Stash);
export default stash_context;