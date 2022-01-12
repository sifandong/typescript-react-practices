/* 
  @author: sifan_dong
  @date: 2022/01/11
  @description: useState, useEffect, useRef
  
*/

import * as React from "react";
import { useState, useEffect, useRef} from "react";

const Counter: React.FunctionComponent = (): React.ReactElement => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const latestName = useRef<HTMLInputElement>(null);
  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickSub = () => {
    setCount(count - 1);
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  useEffect(()=>{
    document.title = name;
    return ()=>{
      // console.log(name);
      /* 
      in the useEffect, we return a function which will be called after the new component rendered, 
      which explains why we are not able to print what users input in the real time.
      */
      if(latestName){
        console.log(latestName.current!.value);
      }
    }
  },[name])
  return (
    <>
      <div>You clicked {count} times! </div>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickSub}>-</button>
      <input type="text" onChange={handleOnChange} ref={latestName} />
      <div>{name}</div>
    </>
  );
};

export default Counter;
