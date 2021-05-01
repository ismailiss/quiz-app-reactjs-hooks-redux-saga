import './App.css';
import Question from './components/Question';
import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import { getData } from './store/actions'
import { useDispatch } from 'react-redux'

const App = ({ data, isLoading, count }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const nextQuestion = () => (currentQuestionId < data.length) ? setCurrentQuestionId(currentQuestionId + 1) : data.length;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          Quiz
        </div>
        {!isLoading && <div className="title">
          score {count}
          {
            data.map((question) => {
              { console.log(question.id); }
              if (question.id === currentQuestionId)
                return <Question key={question.id} question={question} ></Question>
            }
            )
          }
          {data && currentQuestionId < data.length &&
            <button className="button" onClick={nextQuestion}>next</button>}
        </div>}
        {isLoading && <div>loading...</div>}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  const data = state.reducerQuestions.data;
  const isLoading = state.reducerQuestions.isLoading;
  const count = state.reducerCount.count;

  return {
    data: data,
    count: count,
    isLoading: isLoading
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'AGE_UP' }),
//     decrement: () => dispatch({ type: 'AGE_DOWN' }),
//   }
// }
export default connect(mapStateToProps)(App);
