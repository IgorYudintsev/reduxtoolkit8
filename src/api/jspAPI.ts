import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // withCredentials:true,
    // headers:{
    //   'API-KEY':'123456789'
    // }
})

export const jspAPI = {
    getJsonplaceholder: () => {
        return instance.get<Array<jspType>>(`${'/posts/'}`)
    },
    getJsonplaceholderForUpdate: (paramsID: number) => {
        return instance.get<jspType>(`/posts/${paramsID}`)
    },
    deleteJsonplaceholder: (id: number) => {
        return instance.delete<Array<jspType>>(`/posts/${id}`)
    },
    postJsonplaceholder: (payload: jspType) => {
        return instance.post(`/posts`, {id: 101, title: payload.title, body: 'bar', userId: 1})
    },
    updateJsonplaceholder: (payload: jspType) => {
        return instance.put(`/posts/${payload.id}`, {
            id: payload.id,
            title: payload.title,
            body: payload.body,
            userId: payload.userId
        })
    },
}

export type ParamsType = {
    params: jspType
}

export type jspType = {
    userId: number,
    id: number,
    title: string,
    body: string
}


//-----------------------------------------------------------

// import axios from 'axios';
//
// let instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     // withCredentials:true,
//     // headers:{
//     //   'API-KEY':'123456789'
//     // }
// })
//
// export const jspAPI = {
//     getJsonplaceholder: () => {
//         return instance.get<Array<jspType>>(`${'/posts/'}`)
//     },
//     deleteJsonplaceholder: (id: number) => {
//         return instance.delete<Array<jspType>>(`/posts/${id}`)
//     },
//     postJsonplaceholder: () => {
//         return instance.post(`/posts`, {id: 101, title: 'foo', body: 'bar', userId: 1})
//     },
// }
//
// export type ParamsType={
//     params:jspType
// }
//
// export type jspType = {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
// }




