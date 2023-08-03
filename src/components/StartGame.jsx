import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function StartGame({ toggle }) {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Button = styled.button`
    padding: 10px 18px;
    min-width: 220px;
    height: 44px;
    background-color: #000000;
    border-radius: 5px;
    color: #fff;
    border:none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover {
        background-color: #fff;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`

const Container = styled.div`
    height: 100vh;
    text-transform: uppercase;
    max-width: 1180px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }

    }
    
`