import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const UploadHeader = () => {
    const navigate = useNavigate();

    return (
        <StyledBox>
            <div className='logo' onClick={() => navigate('/')}>
               WonderDocs. <span>•</span>
            </div>
        </StyledBox>
    )
}

export default UploadHeader


const StyledBox = styled.div`
width: 90%;
height: 4rem;
position: fixed;
top: 0;
box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 5%;
z-index: 100;

.logo {
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    gap: 0.4rem;
    align-items: center;

  
}

`

