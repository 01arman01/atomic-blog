import {createContext} from "react";
import {faker} from "@faker-js/faker";
export const PostContext = createContext({})

export const  createRandomPost = ()=> {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}