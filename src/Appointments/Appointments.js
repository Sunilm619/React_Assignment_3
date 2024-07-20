import React, { useRef, useState } from 'react';
import './index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function Appointments() {
    const [tit, setTit] = useState("");
    const [dat, setDat] = useState("");
    const [obj, setObj] = useState([]);

    const ipval = useRef('');
    const dateval = useRef('');

    const submig = () => {
        const dateString = dateval.current.value;
        const date = new Date(dateString);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = dayNames[date.getDay()];

        const newAppointment = {
            title: ipval.current.value,
            dateobj: `Date: ${dateString}`,
            day: dayName,
            imgsx: 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
        };

        setObj([...obj, newAppointment]);
        setTit('');
        setDat('');
    };

    return (
        <div className='bg flex justify-center items-center'>
            <div className='w-[80vw] h-[100vh] bg-slate-200'>
                <h1>Add Appointments</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <form onSubmit={(e) => { e.preventDefault(); }}>
                                <label htmlFor='title'>Title</label>
                                <input ref={ipval} className='form-control' type='text' id='title' value={tit} onChange={(e) => setTit(e.target.value)} />
                                <label htmlFor='date'>Date</label>
                                <input ref={dateval} className='form-control' type='date' id='date' value={dat} onChange={(e) => setDat(e.target.value)} />
                                <div>
                                    <button onClick={submig} className='p-1 bg-yellow-400'>Add</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-6 flex justify-end'>
                            <img className='h-2/4' src='https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png' alt='Appointments' />
                        </div>
                    </div>
                    <div className='flex '>
                        {obj.map((e, index) => (
                            <div key={index} className='border-2 mx-3 border-neutral-800'>
                                <div className='flex'>
                                    <h1>{e.title}</h1>
                                    <img src={e.imgsx} alt='star' />
                                </div>
                                <div className='flex'>
                                    <p>{e.dateobj}</p>
                                    <p>{e.day}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointments;
