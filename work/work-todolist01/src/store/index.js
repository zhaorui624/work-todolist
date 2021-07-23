import {createStore} from 'vuex';

export default createStore({
    state:{
        list:[
            {
                title:'吃饭',
                complete:false,
            },
            {
                title:'睡觉',
                complete:false,
            },
            {
                title:'敲代码',
                complete:false,
            }
        ]
    },
    //修改state中的数据
    mutations:{
        //添加任务
        addTodo(state,payload){
            state.list.push(payload);
        },
        //删除任务
        delTodo(state,payload){
            state.list.splice(payload,1);
        },
        clear(state,payload){
            //把过滤之后的数组传进来
            state.list = payload;
        }

    },
    //异步提交mutations
    actions:{

    },
    modules:{

    }
})