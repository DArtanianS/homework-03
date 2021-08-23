import React, {useState} from 'react'

const Counter =  () => {

    const [count, setCount] = useState(0)

    // const tags = ['tag1', 'tag2', 'tag3']

    const formCount = () => {
        return count === 0 ? 'Ноль' : count
    }

    const getBageClasses = () => {
        let classes = 'badge m-2 bg-'
        classes += count === 0 ? 'danger' : 'primary'

        return classes
    }

    // const renderTags = () => {
    //     if(tags.length === 0 ) return 'Тегов не найденно'
    //     return tags.map((tag) => (<li key={tag}>{tag}</li>
    //     ))
    // }

    const hanlkeIncrement = productId => {
        console.log(productId)
        setCount(count + 1)
    }

    const hanlkeDecriment = () => {
        if(count > 0) setCount(count - 1)
    }
    return (
        <>
            {/*{renderTags()}*/}
            <span  className={getBageClasses()}>{formCount()}</span>
            <button onClick={() => hanlkeIncrement({id:1})} className='btn btn-secondary btn-sm m-2'> Incriment </button>
            <button onClick={ hanlkeDecriment } className='btn btn-secondary btn-sm m-2'> Decriment </button>
        </>
    )
}

export default Counter