import React from 'react';
import Image from 'next/image'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default Header = (props) => {
    return (
        <header>
            <div>
                <Image src="/globe.png" alt="GRID globe" width={47} height={47} />
                <h1>GRID</h1>
            </div>
            <div>
                <Select options={options} />
            </div>
            <nav>
                <li>
                    Login
                </li>
                <li>
                    Signup
                </li>
            </nav>
        </header>
    )
}