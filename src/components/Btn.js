function Btn() {
    const onClickHandler = () => {
        console.log("clicked")
    } 
    const onMouseOverHandler = () => {
        console.log("hovering")
    }
    return (
        <button onClick={onClickHandler} onMouseOver={onMouseOverHandler}>
            Click me
        </button>
    )
}

export default Btn