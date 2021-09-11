const Counter =  ({id, value, name, onIcrement, onDicrement, onDelete}) => {

    const formValue = () => {
        return value === 0 ? 'Ноль' : value
    }

    const getBageClasses = () => {
        let classes = 'badge m-2 bg-'
        classes += value === 0 ? 'danger' : 'primary'

        return classes
    }

    return (
        <>
            <h4>{name}</h4>
            <span  className={getBageClasses()}>{formValue()}</span>
            <button
                onClick={() => onIcrement(id)}
                className='btn btn-secondary btn-sm m-2'
            >
                Incriment
            </button>
            <button
                onClick={() => onDicrement(id) }
                className='btn btn-secondary btn-sm m-2'
            >
                Decriment
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </>
    )
}

export default Counter