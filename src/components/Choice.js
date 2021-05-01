import React from "react";
import { useState, useEffect } from "react";
import cx from "classnames";
import { connect } from "react-redux"
import { increment } from '../store/actions'
import { useDispatch } from 'react-redux'


function Choice(props) {
    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
        if (props.response.correct) dispatch(increment());
        props.selectAnswer();
    }
    const dispatch = useDispatch()

    return (
        <div className={cx(
            checked && props.response.correct && "success",
            checked && !props.response.correct && "failed",
            !checked && ""
        )}>
            <input type="radio"
                name={props.questionId} onChange={handleClick}
                value={props.response.title} disabled={props.isDisabled} />
            {props.response.title}
        </div>
    );
}
export default connect(null, { increment })(Choice);
