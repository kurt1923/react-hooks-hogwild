import React from 'react'

function HogDetails({ hog }) {
    console.log(hog)

    const { specialty, weight, greased, "highest medal achieved": medal } = hog
    return (
        <div className='Hog Details'>
            <strong>
                {greased ? "Greased" : "Nongreased"}
            </strong>
            <p>
                Specialty: {specialty}
            </p>
            <p>
                Weight: {weight}
            </p>
            <p>
                Highest Medal: {medal}
            </p>
        </div>

    )
}

export default HogDetails