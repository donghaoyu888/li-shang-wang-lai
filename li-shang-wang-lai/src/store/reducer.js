import {SEARCH,ADD,DELETE} from './action-Type.js';
const list={play:['标题一','标题二','标题三'],end:['完成的']};


export default(store=list,action)=>{
   
    console.log(action)
    switch(action.type){
        case SEARCH:
            var  newStore=JSON.parse(JSON.stringify(store))
            newStore.play.push(action.val)
            return newStore
            break
        case ADD :
            var newStore=JSON.parse(JSON.stringify(store))
            if(action.tit=='还没开始的'){
                newStore.end.push(action.val)
                newStore.play.splice(action.idx,1)
            }
            else if(action.tit=='已经开始了'){
                newStore.play.push(action.val)
                newStore.end.splice(action.idx,1)
            }
            return newStore
            break
        case DELETE :
            var newStore=JSON.parse(JSON.stringify(store))
            if(action.tit=='还没开始的'){
                newStore.play.splice(action.i,1)
            }
            else if(action.tit=='已经开始了'){
                newStore.end.splice(action.i,1)
            }
            return newStore
        default:
             return store
    }
}