import React from 'react';

import ShouldTakeBreak from './ShouldTakeBreak';
import ToDoBoard from './ToDoBoard';

export default function Home() {
  return (
    <>
      <ToDoBoard />
      <ShouldTakeBreak />
    </ >
  );
}
