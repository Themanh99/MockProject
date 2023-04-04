import React, { useEffect, useContext } from 'react';
import './GridRows.css';
import Cells from './Cells';
import {UserContext} from '../../../context/UserContext'

function GridRows() {
    const users = useContext(UserContext);

    const selectedFunc = (event) => {
        const tg = event.target.parentElement.parentElement;
        const targetId = document.getElementById(tg.id);
        const row = document.querySelector('.selected')

        if (tg.parentElement.className === "grid-rows") {
            if (row === null) {
                targetId.classList.add('selected');
            } else {
                targetId.classList.add('selected');
                row.classList.remove('selected');
            }
        }
    };
    function updateSelected(i, row) {
        const targetId = document.getElementById(i);
        targetId.classList.add('selected');
        row.classList.remove('selected');
    }
    const keyBoard = (event) => {
        try {
            event.preventDefault();
            const row = document.querySelector('.selected')
            if (row === null) {
                return;
            } else {
                let i = Number(row.id);
                if (event.keyCode === 40) {
                    i++;
                    updateSelected(i, row)
                } else if (event.keyCode === 38 && i > 0) {
                    i--;
                    updateSelected(i, row)
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", keyBoard);
        return () => {
            document.body.removeEventListener("keydown", keyBoard)
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(() => {
        document.body.addEventListener("click", selectedFunc);
        return () => {
            document.body.removeEventListener("click", selectedFunc)
        };
    },[])
    return (
        <>
            {users.data && users.data.length > 0 && users.data.map((user, index) => {
                return (
                    <div
                        key={index}
                        className="grid-row-column"
                        id={index}
                    >
                        <Cells
                            data={Object.values(user)}
                            length={Object.keys(user).length - 1}
                        />
                    </div>
                );
            })}
        </>
    );
}
export default GridRows;