
import styled from 'styled-components';


function NumberSelector({
    error, setError,selectedNumber , setSelectedNumber
}) {

    const numArray = [1 ,2 , 3 , 4 , 5 , 6];


    const numberSelectorHandler = (n) => {
        setSelectedNumber(n);
        setError("");
    }
  return (
    <NumberSelectorContainer>
        <div className='error-msg'>{error}</div>
        <div className='flex'>
        {
            numArray.map( (n) => (
                <Box
                    isselected={n===selectedNumber}
                    key={n} onClick={ () => numberSelectorHandler(n) }>{n}
                </Box>
            ))
        }
    </div>
    <p>
        Select Number
    </p>
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    font-size: 20px;
    .flex {
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 500;
        align-self: flex-end;
    }

    .error-msg {
        color: white;
        width: fit-content;
        padding: 5px;
        margin-bottom: 10px;
        align-self: end;
        background-color: red;
    }
`;

const Box = styled.div`
    
    height: 72px;
    width: 72px;
    border: 1px solid #000;
    display: grid;
    place-items: center;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${ (props) => props.isselected ? "black" : "white"};
    color: ${ (props) => props.isselected ? "white" : "black"};



`


export default NumberSelector;
