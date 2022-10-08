import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {jspAPI} from "./api/jspAPI";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {deleteJSPThunk, getJSPThunk} from "./reducers/jspReducer";
import {Header} from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import {Update} from "./components/Update";
import {Posts} from "./components/Posts";

function App() {

    return (
        <div>
            <Header/>
                <Routes>
                <Route path={'/'} element={ <Posts />}/>
                <Route path={'/update/:id'} element={<Update/>}/>
                {/*<Route path={'/update'} element={<Update/>}/>*/}
            </Routes>

        </div>
    );
}

export default App;

//-----------------------------HOT KEY------------------------------------------------------
// shift+f6    -переименовать везде
// Ctrl+shift+v    –достать из буфера
// Ctrl+shift+n    –глобальный поиск
// Ctrl+space –подсказать путь в импорте
// alt+F1   >   Enter  -показать в дереве файл, в котором находишься
// alt+Enter -заменить/  обернуть в кавычки


//-----------------------------INSTALL------------------------------------------------------
//yarn add react-router-dom
//yarn add @types/react-router-dom
//yarn add redux react-redux @types/react-redux
//yarn add @reduxjs/toolkit
//yarn add axios
//yarn add redux-thunk

