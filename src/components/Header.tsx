import React, {useRef} from 'react';
import styled from "styled-components";
import {useAppDispatch} from "../hooks/hooks";
import {postJSPThunk} from "../reducers/jspReducer";


export type payloadType = { id: number, title: string, body: string, userId: number }
export const Header = () => {
    const dispatch = useAppDispatch()

    const myRef=useRef<HTMLInputElement>(null)

    const addPosthandler = () => {
        // jspAPI.postJsonplaceholder()
        //     .then((res)=>{
        //       console.log(res.data)
        //     })

        if(myRef.current){
            const inputValue:string= myRef.current.value
            let payload: payloadType = {id: 1, title: inputValue, body: 'bar', userId: 1}
            dispatch(postJSPThunk(payload))
            myRef.current.value=''
        }

    }

    return (
        <Wrapper>
            <div>
                <input ref={myRef} type="text" />
                <button onClick={addPosthandler}>+</button>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 50px;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
`
