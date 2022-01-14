import React from 'react';
import * as C from './styles';
import { BiCheckDouble } from 'react-icons/bi';


export default function Input() {
  return (
    <C.Input>
      <input type='text' />
      <button>
        <BiCheckDouble />
      </button>
    </C.Input>
  )
}

