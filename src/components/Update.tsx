import React, {ChangeEvent, TextareaHTMLAttributes, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getForUpdateJSPThunk, getJSPThunk, updateJSPThunk} from "../reducers/jspReducer";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import styled from "styled-components";

export const Update = () => {
    const params = useParams()
    let navigate = useNavigate()
    const dispatch = useAppDispatch()
    const post = useAppSelector(state => state.jsp)
    let [updateTitle, setUpdateTitle] = useState(post[0].title)


    const updatePayload = {
        userId: post[0].userId,
        id: Number(params.id),
        title: updateTitle,
        body: post[0].body
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setUpdateTitle(event.currentTarget.value)
    }

    const onClickhandler = () => {
        dispatch(updateJSPThunk(updatePayload))
        navigate(-1)
    }

    return (
        <>
            <PageName>
                <h1>
                    {`UPDATE PAGE ${params.id}`}
                </h1>

            </PageName>
            <InputWrapper>
                <textarea rows={1} cols={100} name="text" value={updateTitle} onChange={onChangeHandler}/>
                <button onClick={onClickhandler}>Update title</button>
            </InputWrapper>
        </>
    );
};

const PageName = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`