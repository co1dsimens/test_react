import React, {useState} from 'react'
import PropTypes from 'prop-types'

const style = {
    btn: {
        pading: '5px',
        margin : '0 20px',
        background: 'rgb(6 70 148 / 65%)',
        border: 'none',
        padding: '5px 10px ',
        color: '#fff',
    }
}

function useInputValue(defaultValue = ' ') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(' '),
        value: () => value
    }
    
}

function AddTodo({ onCreate }) {
    const input = useInputValue(' ')
    
    function submuitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }
    
    return(
        <div style={{ display:'flex', margin : ' 10px' , float:'right'}} onSubmit={submuitHandler}>

            <button type='submit' className="button efect" >Add </button>
            <button type='submit' className="button efect" >Mass delete </button>
        </div>
    )

}
AddTodo.propTypes ={
    onCreate: PropTypes.func.isRequired
}

export default AddTodo