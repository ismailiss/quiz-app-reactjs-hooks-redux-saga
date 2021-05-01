import React from "react";
import Choice from './Choice';
import { useState, useEffect } from "react";


function Question(props) {
    const [isDisabled, setIsDisabled] = useState(false)
    const selectAnswer = () => {
        setIsDisabled(true)
    }
    return (
        <div>
            {props.question.id} - {props.question.title}
            {props.question.responses.map(response =>
                <Choice key={response.id} questionId={props.question.id} response={response}
                    selectAnswer={selectAnswer} isDisabled={isDisabled}  {...props}
                ></Choice>)
            }
        </div>
    );
}
export default Question;
