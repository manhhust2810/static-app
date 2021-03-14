import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
import Search from '../components/Search/Search';
import style from './TodoList.module.css';
import List from '../components/List/List';
import Message from '../components/Message/Message';
import Total from '../components/Total/Total';

function TodoList(props) {
    const { hidden } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('task'));
        if (data) {
            dispatch({
                type: 'SET_TASK',
                data
            });
        }
    })

    const [appear, setAppear] = useState(true);

    function processOpenList() {
        setAppear(false);
    };

    function processCloseList() {
        setAppear(true);
    };

    const message = useSelector(state => state.TaskReducer.message);

    return (
        <span>
            <button
                className="my-button"
                onClick={processOpenList}>
                DISPLAY TO DO
            </button>
            <button
                className="my-button"
                onClick={processCloseList}>
                CLOSE LIST
            </button>
            <span className={classNames({ hidden: appear})}>
            <span className={classNames({ hidden: hidden })}>
                <div className={style.containerTodo}>
                    {message.active === true ? <Message /> : ''}
                    <Total />
                    <Search />
                    <List />
                </div>
            </span>
            </span>
        </span>
    )
}

export default TodoList;
