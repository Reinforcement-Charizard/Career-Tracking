import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import './componentStyling/cardCreator.scss'

const mapDispatchToProps = dispatch => ({
  // create card
  updateCardAction: (createObject) => {
    dispatch(actions.updateCardAction(createObject))
  }


})


const CardCreator = () => {
  // /api/addJob
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
  }

  const date = new Date().toLocaleDateString().substring(0, 10); // -> 3/15/22
  const [todaysDate, setTodaysDate] = useState(new Date().toISOString().substring(0, 10))

  return (
    <div className="cardCreator">
      <h2 id="title">Create a Job {date}</h2>
      <div className="formDiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputDiv">
            <input className="inputClass" placeholder='Job Title' {...register("title")}/>
            <input className="inputClass" placeholder='Company' {...register("company")}/>
            <div className="dateDiv">
              <label>Date Applied</label>
                <input className="dateInput" type="date" defaultValue={todaysDate} {...register("dateApplied")}/>
            </div>
            <div className="dateDiv">
              <label>Interview Date</label>
              <span>
                <input className="dateInput" type="date" placeholder='Interview Date' {...register("intDate")}/>
              </span>
            </div>
            <input className="inputClass" placeholder='Contact Email' {...register("contactEmail")}/>
            <input className="inputClass" placeholder='Contact Phone' {...register("contactPhone")}/>
            <input className="inputClass" placeholder='URL' {...register("url")}/>
            <select className="selectClass">
              <option value="interested">Interested</option>
              <option value="applied">Applied</option>
              <option value="interviewOne">Interview #1</option>
              <option value="interviewTwo">Interview #2</option>
              <option value="offered">Offered</option>
            </select>
          </div>
          <div className="notesDiv">
            <p id="notesLabel">Notes</p>
            <textarea  className="notesArea" rows="5" cols="36" placeholder='Notes' {...register("notes")}/>
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