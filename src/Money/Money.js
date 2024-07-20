import React, { useRef, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Money() {
    const titleval = useRef('');
    const amount = useRef('');
    const optval = useRef('');
    const [obj, setObj] = useState([]);
    const [inc, setInc] = useState(0);
    const [bal, setBal] = useState(0);
    const [exp, setExp] = useState(0);


    const sumbt = () => {
        console.log('Form submitted');
        console.log('Title: ', titleval.current.value, amount.current.value, optval.current.value);
        setObj(prevObj => [
            ...prevObj,
            {
                title: titleval.current.value,
                amount: amount.current.value,
                optval: optval.current.value,
                delete: "https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            }
        ]);
        if (optval.current.value === 'Income') {
            setInc(prevInc => prevInc + parseInt(amount.current.value));
            setBal(prevBal => prevBal + parseInt(amount.current.value));
        }
        if (optval.current.value === 'Expense') {
            setExp(prevExp => prevExp + parseInt(amount.current.value));
            setBal(prevBal => prevBal - parseInt(amount.current.value));
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 bg flex flex-col justify-center'>
                    <h3>Hey Richard</h3>
                    <p>Welcome back to Money Manager</p>
                </div>

                <div className='flex justify-around my-3'>
                    <div className='col-3 flex justify-around bg-lime-100 rounded-2xl items-center border-2'>
                        <div className='w-3/12 h-2/6 flex flex-col justify-center'>
                            <img src='https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png' alt="balance" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Your Balance</p>
                            <p>Rs {bal}</p>
                        </div>
                    </div>

                    <div className='col-3 flex justify-around bg-blue-400 rounded-2xl items-center border-2'>
                        <div className='w-3/12 h-2/6 flex flex-col justify-center'>
                            <img src='https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png' alt='income' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Your Income</p>
                            <p>Rs {inc}</p>
                        </div>
                    </div>

                    <div className='col-3 flex justify-around bg-violet-400 rounded-2xl items-center border-2'>
                        <div className='w-3/12 h-2/6 flex flex-col justify-center'>
                            <img src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png' alt='expenses' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Your Expenses</p>
                            <p>Rs {exp}</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-around'>
                    <div className='col-4 border-2'>
                        <form onSubmit={(e) => { e.preventDefault(); sumbt(); }}>
                            <h3>Add Transaction</h3>
                            <label htmlFor='1'>Title</label>
                            <input id="1" ref={titleval} type='text' className='form-control my-2' placeholder='Enter Title' />
                            <label htmlFor='2'>Amount</label>
                            <input id="2" ref={amount} type='number' className='form-control my-2' placeholder='Enter Amount' />
                            <label htmlFor='3'>Category</label>
                            <select id='3' ref={optval} className='form-control'>
                                <option value='Income'>Income</option>
                                <option value='Expense'>Expense</option>
                            </select>
                            <button type="submit" className='btn btn-primary my-3'>Add</button>
                        </form>
                    </div>

                    <div className='col-7 border-2'>
                        <h2>History</h2>
                        {obj.map((e, index) => (
                            <div key={index} className='flex justify-around'>
                                <p>{e.title}</p>
                                <p>{e.amount} </p>
                                <p>{e.optval}</p>
                                <div className='h-1/5' ><img src={e.delete} alt="delete" /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Money;
