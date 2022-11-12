import { createContext } from "react";

export class Stash {
    objects = {
        1: { title: "Titulo post 1"},
        2: { title: "Titulo post 2"}
    };

    getObjectById( id ) {
        return this.objects[id];
    }
}


export default createContext(new Stash());