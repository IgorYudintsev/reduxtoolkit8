import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {jspAPI, jspType} from "../api/jspAPI";
import thunk from "redux-thunk";
import {RootState} from "../store/store";
import {payloadType} from "../components/Header";

type JspTypeForGetState = {
    jsp: Array<jspType>
}

let initialState: Array<jspType> = [
    {
        userId: 0,
        id: 0,
        title: 'startTitle',
        body: 'startBody'
    }
]


export const slice = createSlice({
    name: 'jspReducer',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        //fulfilled===если все ок
        //addCase builder.добавь кейс
        builder.addCase(getJSPThunk.fulfilled, (state, action) => {
            if (action.payload) {
                return [...action.payload.data]
            }
        })
        builder.addCase(deleteJSPThunk.fulfilled, (state, action) => {
            if (action.payload) {
                return state.filter(f => f.id !== action.payload?.id)
            }
        })

        builder.addCase(postJSPThunk.fulfilled, (state, action) => {
            if (action.payload) {
                return [action.payload.data, ...state]
            }
        })

        // builder.addCase(getForUpdateJSPThunk.fulfilled, (state, action) => {
        //     if (action.payload) {
        //         //console.log(action.payload.data)
        //         return state.filter(el=>el.id===action?.payload?.data.id)
        //     }
        // })
        builder.addCase(updateJSPThunk.fulfilled, (state, action) => {
            if (action.payload) {
                console.log(action.payload.data)
               // return state
                return state.map(el=>el.id===action.payload?.data.id ? {...el,title: action.payload.data.title} : el)
            }
        })

    }
})


//                                           "name/кейс редюсера"
export const getJSPThunk = createAsyncThunk('jspReducer/get',
    // param: ничего не приходит,   thunkAPI-обложка, теперь через нее стучимся к  dispatch
    async (param, thunkAPI) => {
        try {
            let res = await jspAPI.getJsonplaceholder()
            //thunkAPI.dispatch(getJSP({data: res.data}))
            return {data: res.data}
        } catch {
            console.log('vse propalo')
        }
    })


export const deleteJSPThunk = createAsyncThunk("jspReducer/delete",
    async (param: { id: number }, thunkAPI) => {
        try {
            let res = await jspAPI.deleteJsonplaceholder(param.id)
            console.log(res.data)// получим пустой объект с сервака
            return {id: param.id} //поэтому в редюсер отправляем param: { id: number } -который сюда закинули
        } catch {
            console.log('vse propalo')
        }
    }
)

export const postJSPThunk = createAsyncThunk("jspReducer/post",
    async (payload: payloadType, thunkAPI) => {
        try {
            let state = thunkAPI.getState() as JspTypeForGetState; // через thunkAPI получаем доступ к getState
            const id = state?.jsp.length
            let res = await jspAPI.postJsonplaceholder(payload)

            return {
                data: {
                    userId: res.data.userId,
                    id: id + 1,
                    title: res.data.title,
                    body: res.data.body
                },
            }
        } catch {
            console.log('vse propalo')
        }
    })


export const getForUpdateJSPThunk = createAsyncThunk('jspReducer/getForUpdate',
    // param: ничего не приходит,   thunkAPI-обложка, теперь через нее стучимся к  dispatch
    async (paramsID: number, thunkAPI) => {
        try {
            let res = await jspAPI.getJsonplaceholderForUpdate(paramsID)
            return {data: res.data}
        } catch {
            console.log('vse propalo')
        }
    })

export const updateJSPThunk = createAsyncThunk('jspReducer/getForUpdate',
    // param: ничего не приходит,   thunkAPI-обложка, теперь через нее стучимся к  dispatch
    async (updatePayload: jspType, thunkAPI) => {
        try {
            let res = await jspAPI.updateJsonplaceholder(updatePayload)
            return {data: res.data}
        } catch {
            console.log('vse propalo')
        }
    })



export const jspReducer = slice.reducer