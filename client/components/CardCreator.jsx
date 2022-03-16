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
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    const url = "/api/addJob"
    fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
      .then((data) => console.log(data))
  }

  const date = new Date().toLocaleDateString().substring(0, 10); // -> 3/15/22
  const [todaysDate, setTodaysDate] = useState(new Date().toISOString().substring(0, 10))

  return (
    <div className="cardCreator">
      <h2 id="title">Create a Job</h2>
      <div className="formDiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputDiv">
            <div className="inputDiv">
              <label className="inputLabel">Job Title</label>
              <input className="inputClass" placeholder='ie: Front-End Software Engineer' {...register("title", {reguired: true})}/>
              {errors.title?.type === 'required' && "Job title is required!"}
            </div>
            <div className="inputDiv">
              <label className="inputLabel">Company Name</label>
              <input className="inputClass" placeholder='ie: Amazon' {...register("company", {reguired: true})}/>
              {errors.company && "Company Name is required!"}
            </div>
            <div className="inputDiv">
              <label>Date Applied</label>
              <input className="dateInput" type="date" defaultValue={todaysDate} {...register("dateApplied")}/>
            </div>
            <div className="inputDiv">
              <label>Interview Date</label>
              <input className="dateInput" type="date" placeholder='Interview Date' {...register("intDate")}/>
            </div>
            <div className="inputDiv">
              <label className="inputLabel">Contact Email</label>
              <input className="inputClass" placeholder='example123@gmail.com' {...register("contactEmail")}/>
            </div>
            <div className="inputDiv">
              <label className="inputLabel">Contact Phone Number</label>
              <input className="inputClass" placeholder='(123) 456-7890' {...register("contactPhone")}/>
            </div>
            <div className="inputDiv">
              <label className="inputLabel">Website</label>
              <input className="inputClass" placeholder='bigcompany.com/hiring' {...register("url")}/>
            </div>
            <div className="inputDiv">
              <label className="inputLabel">Status</label>
              <select className="selectClass">
                <option value="interested" selected>Interested</option>
                <option value="applied">Applied</option>
                <option value="interviewOne">Interview #1</option>
                <option value="interviewTwo">Interview #2</option>
                <option value="offered">Offered</option>
              </select>
            </div>
          </div>
          <div className="notesDiv">
            <p id="notesLabel">Notes</p>
            <textarea  className="notesArea" rows="5" cols="36" placeholder='Write something important to remember here' {...register("notes")}/>
          </div>
          <input className='addJobButton' type="submit" value="Add Job"/>
        </form>
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(CardCreator);