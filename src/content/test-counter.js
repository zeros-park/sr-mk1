import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slice/counterSlice";

const Item = styled.span`
    padding: 5px 5px 5px 5px;
`
const CounterTestItem = () => {
    const count = useSelector((state) => state.counter.count);
    const dispacth = useDispatch();

    return (
        <span>
            <Item>카운터test: {count}</Item>
            <button onClick={() => dispacth(increment())}>[+]</button>
            <button onClick={() => dispacth(decrement())}>[-]</button>
        </span>
        
    );
}

export default CounterTestItem;