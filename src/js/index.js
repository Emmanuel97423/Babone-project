import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import '../css/style.scss';
import styled from 'styled-components';
import LeftNavBar from './components/nav-bar/leftNavBar'

const container = document.getElementById('root');
const root = createRoot(container)

const Container = styled.div`
display:flex;


`

root.render(
    <Container>
        <LeftNavBar />
        <App />
    </Container>

)