import React from "react";
import styled from 'styled-components';
import BlockItem from "../content/blockItem";
import YScrollWrapper from "../content/YScrollWrapper";

const Section = styled.section`
    ${props => (`
        position: absolute;
        top: 0;
        left: 0;
        width: ${props.layout.asideLeftSizeOptions.default}px;
        height: 100%;
        z-index: 100;
        background-color: #e7e4e4;
        @media screen and (max-width: ${props.layout.mediaWidthOptions.simple}px) {
            width: ${props.layout.asideLeftSizeOptions.simple}px;
        }
        @media screen and (max-width: ${props.layout.mediaWidthOptions.minimal}px) {
            display: none;
        }
    `)}   
`

const Aside = ({ layoutOptions }) => {
    return (
        <Section className="_aside" layout={layoutOptions}>  
            <YScrollWrapper marginTop={layoutOptions.headerHeightSize}>
                <BlockItem text={'aside item 1'}/>
                <BlockItem text={'aside item 2'}/>
                <BlockItem text={'aside item 3'}/>
                <BlockItem text={'aside item 4'}/>
                <BlockItem text={'aside item 5'}/>
                <BlockItem text={'aside item 6'}/>
                <BlockItem text={'aside item 7'}/>
                <BlockItem text={'aside item 8'}/>
                <BlockItem text={'aside item 9'}/>
                <div>end</div>    
            </YScrollWrapper>
        </Section>
    );
}

export default Aside;