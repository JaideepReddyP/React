function Bag(props) {
    const bag = {
        padding: "200px",
        border: "5px solid gray",
        background: "#ff0",
        margin: "20px 20px"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag