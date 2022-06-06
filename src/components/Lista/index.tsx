import React from 'react';
import Item from './Item';
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
                  <Item
                    key = {index}
                    {...item}
                  />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;