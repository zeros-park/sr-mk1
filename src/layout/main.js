import React from "react";
import styled from 'styled-components';
import YScrollWrapper from "../content/YScrollWrapper";
import CounterTestItem from "../content/test-counter";
import DimdLayerTestItem from "../content/test-dimdLayer";
import DimdLayerLegacyTestItem from "../content/test-dimdLayerLegacy";

const Wrapper = styled.div`
    background-color: #80808036;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const Content = styled.main`
    ${props => (`
        position: relative;
        height: 100%;
        margin-left: ${props.layout.asideLeftSizeOptions.default}px;
        @media screen and (max-width: ${props.layout.mediaWidthOptions.simple}px) {
            margin-left: ${props.layout.asideLeftSizeOptions.simple}px;
        }
        @media screen and (max-width: ${props.layout.mediaWidthOptions.minimal}px) {
            margin-left: 0px;
        }
    `)}
`
const TestItem = styled.div`
    min-height: 150px;
    margin: 10px 20px 10px 20px;
    display: block;
    border: 2px solid green;
`
const Main = ({ layoutOptions }) => {
    return (
        <Wrapper className="_main">
            <Content layout={layoutOptions}>
                <YScrollWrapper marginTop={layoutOptions.headerHeightSize}>
                    <TestItem>
                        <CounterTestItem/>
                    </TestItem>
                    <TestItem>
                        <DimdLayerTestItem></DimdLayerTestItem>
                    </TestItem>
                    <TestItem>
                        <DimdLayerLegacyTestItem></DimdLayerLegacyTestItem>
                    </TestItem>
                    <TestItem>Main1</TestItem>
                    <TestItem>Main2</TestItem>
                    <TestItem>Main3</TestItem>
                    <TestItem>Main4</TestItem>
                    <TestItem>Main5</TestItem>
                    <TestItem>Main6</TestItem>
                    <TestItem>Main7</TestItem>
                    <TestItem>Main8</TestItem>
                    <div>end</div>
                </YScrollWrapper> 
            </Content>
        </Wrapper>
    );
}

export default Main;