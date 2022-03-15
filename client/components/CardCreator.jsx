import React from 'react';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import './componentStyling/cardCreator.scss'

const mapDispatchToProps = dispatch => ({
  // update Card
  updateCardAction: (updateObject) => {
    dispatch(actions.updateCardAction(updateObject))
  }


})


const CardCreator = () => {
  // /api/addJob
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const date = new Date().toLocaleDateString(); // -> 3/15/22

  return (
    <div className="cardCreator">
      <h2 id="title">Add a Job {date}</h2>
        <div className="formDiv">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputDiv">
              <input placeholder='Job Title' {...register("title")}/>
              <input placeholder='Company' {...register("company")}/>
              <input type="date" placeholder='Interview Date' {...register("company")}/>
              <input type="date" placeholder=date {...register("company")}/>
            </div>
            <div className="inputDiv">
              <input placeholder='Contact Email' {...register("contactEmail")}/>
              <input placeholder='Contact Phone' {...register("contactPhone")}/>
              <input placeholder='URL' {...register("url")}/>
            </div>
            <div className="notesDiv">
              <p id="notesLabel">Notes</p>
              <input  className="notesInput" placeholder='Notes' {...register("notes")}/>
            </div>
          </form>
        </div>
      <div className='addJobButton'>
        <button>
          Add Job  
        </button>
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(CardCreator);