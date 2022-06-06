import React from 'react';
import style from './Lista.module.scss';

function Lista(){
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '05:00:00' 
        },
        {
            tarefa: 'Javascript',
            tempo: '2:00:00' 
        },
        {
            tarefa: 'Typescript',
            tempo: '2:00:00' 
        }
    ];
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((item, index) =>(
                    <li key={index} className={style.item}>
                        <h3> {item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;