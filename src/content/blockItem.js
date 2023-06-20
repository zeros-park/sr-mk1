import React from "react";
import styled from 'styled-components';

const Layout = styled.div`
    background-color: #e1e1f9;
    padding: 10px 10px 10px 10px;
`

const Item = styled.div`
    background-color: #e0fffa;
    height: 60px;
    padding: 5px 5px 5px 5px;
    border: 1px solid;
`
const BlockItem = ({ item, text }) => {
    return (
        <Layout>
            <Item>{text}</Item>
        </Layout>
        
    );
}

export default BlockItem;