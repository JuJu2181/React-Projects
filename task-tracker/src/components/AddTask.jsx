import React, { useState } from "react";

function AddTask({ onAdd }) {

    // local state for adding task details 
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder,setReminder] = useState(false);

    // functions to handle changes in the inputs 
    const handleText = (e) => setText(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleReminder = (e) => setReminder(e.currentTarget.checked);
    const handleSubmit = (e) => { 
        e.preventDefault();
        // validation for text and date
        if (!text) {
            alert('Please Add a Task');
            return;
        } else if (!date) {
            alert('Please Add a Date');
            return;
        } else { 
            onAdd({ text, date, reminder });
            setText('');
            setDate('');
            setReminder(false);
        }
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label>
                    Task
                </label>
                <input type="text" name="text" placeholder="Add Text" value={text} onChange={handleText}/>
            </div>
            <div className="form-control">
                <label>
                    Day & Time
                </label>
                <input type="text" name="date" placeholder="Add Day and Time" value={date} onChange={handleDate}/>
            </div>
            <div className="form-control form-control-check">
                <label>
                    Set Reminder
                </label>
                <input type="checkbox" name="reminder" checked={reminder} value={reminder} onChange={handleReminder}/>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
}

export default AddTask;
