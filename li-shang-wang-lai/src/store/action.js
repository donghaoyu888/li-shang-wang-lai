import {SEARCH,ADD,DELETE} from './action-Type.js';
export const TodoSearch=(v)=>({
    type:SEARCH,
    val:v
})
export const TodoAdd=(v,i,t)=>({
    type:ADD,
    val:v,
    idx:i,
    tit:t
})
export const TodoDele=(i,t)=>({
    type:DELETE,
    i:i,
    tit:t
})