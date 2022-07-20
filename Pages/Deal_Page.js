import React from 'react'
import { useEffect, useState } from 'react';
import DP_Header from './Components/DP_Header';
import DP_Items from './Components/DP_Items';
import Item_List from "./Item_List.json";

function App() 
{
  const [count,setcount]=useState(Object.keys(Item_List).length);
  return (
    <div>
      
      <DP_Header count={count} item = {Item_List}></DP_Header>
      {Item_List.map(item => (<DP_Items key={item.key} item={item}></DP_Items>))}
    
    </div>
  );
}

export default App;
