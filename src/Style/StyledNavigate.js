import styled from "styled-components";

export const StyleNavigate= styled.nav `
    display: inline-block;
    width: 50%;
    justify-content: center;
    margin-left: 23%;


    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        height: 50px;
        margin: 0;
        align-items: center;
        justify-content: space-evenly;
    }

    ul img {
        width: 40px;
    }

    ul li{
        color: #ffff;
        height: min-content;
        font-size: large;
    }


    ul li img { 
        filter: invert(90%);
        width: 30px;
    }

    li:hover{
        height: 40px;
        width: 50px;
    }
`

