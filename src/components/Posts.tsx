import React, {useEffect} from 'react';
import {deleteJSPThunk, getJSPThunk} from "../reducers/jspReducer";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {useNavigate} from "react-router-dom";


export const Posts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.jsp)

    let navigate = useNavigate();
    // const updateHandler = (id:number)=> {
    //     navigate('update');
    // }
    const updateHandler = (id: number) => {
        navigate(`/update/${id}`);
    }

    //--------------ping---------------------------
    // useEffect(()=>{jspAPI.getJsonplaceholder()
    //     .then((res)=>{
    //       console.log(res.data)
    //     })
    // },[])

    useEffect(() => {
        dispatch(getJSPThunk())
    }, [])

    const onClickHandler = (id: number) => {
        // jspAPI.deleteJsonplaceholder(id)
        //     .then((res)=>{
        //       console.log(res.data)
        //     })

        dispatch(deleteJSPThunk({id}))
    }


    const getPosts = posts.map(el => {
        return (
            <>
                <li key={el.id}>
                    <button onClick={() => onClickHandler(el.id)}>X</button>
                    <button onClick={() => updateHandler(el.id)}>UPDATE</button>
                    <span> {el.id}</span>
                    <span>-{el.title}</span>
                </li>
            </>
        )
    })
    return (
        <ul>
            {getPosts}
        </ul>
    );
};

