import React from 'react';
import { ITarefas } from '../../types/ITarefas';
import Item from './Item';
import style from './Lista.module.scss';

interface IProps {
  tarefas: ITarefas[],
  selecionaTarefa:(tarefaSelecionada: ITarefas) => void
}

function Lista( { tarefas, selecionaTarefa }: IProps){

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map( item =>(
                  <Item
                    selecionaTarefa = {selecionaTarefa}
                    key = {item.id}
                    {...item}                   
                  />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;