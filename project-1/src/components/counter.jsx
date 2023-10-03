import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount, decrementByAmount } from "../redux/counter"
import { useRef } from "react"
export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const input = useRef()
    let res = input.current.value
    return (
       <div>
          <div> 
            <input type="text" ref={input}/>
             <button onClick={() => dispatch(decrement())}>Decrement</button>
             <span>{count}</span>
             <button onClick={() => dispatch(increment())}>Increment</button>
             <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
             <button onClick={() => dispatch(decrementByAmount(res))}>Decrement by 5</button>
          </div>
       </div>
    );
}