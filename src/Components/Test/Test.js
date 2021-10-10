import React from 'react'
import Questions from '../Question/Questions'
import QNumbers from '../QuestionNumbers/QNumbers'
import Topbar from '../Topbar/Topbar'
import "./Test.css"
import Testapi from '../testapi/Testapi'
import Quesbar from '../quesbar/Quesbar'

export default function Test() {
    return (
        <>
         <Topbar/>
         <div className="testContainer">
           <div className="qnumContainer">
             {/* <QNumbers/> */}
             <Quesbar/>
           </div>
           <div className="questionsContainer">
             {/* <Questions/> */}
             <Testapi />
           </div>
         </div> 
        </>
    )
}
