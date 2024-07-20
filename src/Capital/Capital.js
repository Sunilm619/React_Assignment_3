import React, { useState } from 'react'
const countries = [
    { id: 1, country: "India", capital: "New Delhi" },
    { id: 8, country: "United States", capital: "Washington, D.C." },
    { id: 2, country: "Canada", capital: "Ottawa" },
    { id: 3, country: "United Kingdom", capital: "London" },
    { id: 4, country: "France", capital: "Paris" },
    { id: 5, country: "Germany", capital: "Berlin" },
    { id: 6, country: "Japan", capital: "Tokyo" },
    { id: 7, country: "Australia", capital: "Canberra" },

];

function Capital() {
    const [ans, setAns] = useState(countries[0].country)
    const fun = (e) => {
        const cap = (e.target.value)
        const country = countries.filter(e => e.capital === cap)
        console.log(country)
        setAns(country[0].country)
    }
    return (
        <div className='flex justify-center items-center bg-blue-500 h-screen'>
            <div className='w-[40vw] h-[40vh] bg-slate-100 text-center '>
                <h1>Countries and Capital</h1>
                <div className='flex justify-center my-14'>
                    <select onChange={fun}>
                        {countries.map(e => <option key={e.id} value={e.capital}>{e.capital}</option>)}
                    </select>
                    <p >is capital of which country? </p>

                </div>

                <p className='text-3xl text-red-700'>{ans}</p>
            </div>
        </div>
    )
}

export default Capital