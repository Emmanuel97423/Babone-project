import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:200px;
min-height: 100vh;
padding:15px;
background-color: red;
display:flex;
overflow: hidden;

`
const List = styled.ul`
height:50%;
display:flex;
flex-direction: column;
justify-content:flex-start;

`
const ListItem = styled.li`
cursor:pointer;
`

const menu = [
    {
        title: "Dashboard"
    },
    {
        title: "Ebp"
    }
];
const menuItems = menu.map((item) => {
    return (<ListItem><a>{item.title}</a></ListItem>)
})
export default function leftNavBar() {
    return (<Container><List>{menuItems}</List></Container>)
}