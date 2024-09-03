import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import Totalscore from "./Totalscore"
import styled from "styled-components"
import { Button, OutlineButton } from "../Button/Button"
import Rules from "./Rules"


const Gameplay = () => {
    const [score, setscore] = useState(0);
    const [SelectedNumber, setSelectedNumber] = useState();
    const [currentDice, setcurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setshowRules] = useState()

    const generateRandomNmmber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min)
    }

    const roleDice=()=>{
        if(!SelectedNumber) {
            setError("You have not selected any number");   
            return;
        }
        const randomNumber= generateRandomNmmber(1,7);
        setcurrentDice((prev)=>randomNumber)


        if(SelectedNumber===randomNumber){
            setscore((prev)=>prev+randomNumber);
        }else{
            setscore((prev)=>prev-2);
            }

            setSelectedNumber(undefined);
    }

    const resetScore=()=>{
        setscore(0);
    }

  return (
    <MainConatainer>
     <div className="Top_Section">
     <Totalscore score={score}/>
     <NumberSelector SelectedNumber={SelectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
     </div>
     <RoleDice currentDice={currentDice} roleDice={roleDice}/>
     <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=>setshowRules(prev=>!prev)}>{showRules ?"Hide":"Show"} Rules</Button>
     </div> 
     {showRules && <Rules/>}
    </MainConatainer>
  )
}

export default Gameplay;

const MainConatainer= styled.main`
padding-top: 70px;
    .Top_Section{
        display: flex;
        justify-content: space-around;
        align-items: end;
        justify-items: center;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
`


