import React from 'react'
import { useRef } from 'react'
export default function Scrollbar({className,children}) {
    const leftref=useRef();
    const handleMouseDown=(evt)=>{
        const debut=evt.pageX;
        const left=leftref.current.scrollLeft;
   
    const handleMousseMove=(evt)=>{
        const fin=evt.pageX;
        const offset=fin-debut;
        leftref.current.scrollLeft=left-offset;
    }
    const handleMousseUp=()=>{
     window.removeEventListener('mousemove',handleMousseMove);
    }
    window.addEventListener('mousemove',handleMousseMove);
    window.addEventListener('mouseup',handleMousseUp);
     }
  return (
    <div onMouseDown={(evt)=>handleMouseDown(evt)} ref={leftref}
     className={className}>{children}</div>
  )
}
