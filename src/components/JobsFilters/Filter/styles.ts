import styled from 'styled-components';

interface DropdownContainerProps {
    ref: any;
}

export const DropdownContainer = styled.form<DropdownContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 2rem 0rem;
    width: 21.5rem;

    .form-group {
        transition: all .3s;
    }
`

export const Dropdown = styled.input`
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 10px 16px 30px;
    justify-content: space-between;
    width: 21.5rem;
    border: 2px solid rgb(229, 229, 229);
    color: rgb(75, 115, 131);
    cursor: pointer;
    border-radius: 50px;
    font-size: 1rem;
    font-weight:300;
    cursor: pointer;
    background: transparent;
    z-index: 2;

    &::placeholder {
        color: transparent;
    }

    &:focus + label, 
    &:not(:placeholder-shown) + label {
        transform: translateY(-3.3rem) translateX(1.2rem) scale(.7);
    }
`

export const IconContainer = styled.div`
    color: rgb(75, 115, 131);
    display: block;
    width: 40px;
    transform: translateY(-4rem) translateX(18rem);
    transform-origin: 0 0;
    transition: all .3s;
`

export const DropdownList = styled.div`
    margin-top: -3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    border: 2px solid rgb(249, 156, 3);
    color: rgb(75, 115, 131);
    cursor: pointer;
`

export const DropdownListItem = styled.div`
    padding: 5px 10px 5px 50px;
    font-size: 0.8rem;
    width: 100%;
    color: rgb(75, 115, 131);
    cursor: pointer;

    &:hover{
        background-color: rgb(249, 156, 3);
        color: #fff;
    }
`

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 300;
    color: rgb(75, 115, 131);
    width: 9rem;
    display: block;
    transform: translateY(-2.5rem) translateX(2rem);
    transform-origin: 0 0;
    transition: all .3s;
    cursor: pointer;
`