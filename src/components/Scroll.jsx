const Scroll = ({ children }) => {
    return (
        <div style={{ overflowY: 'scroll', height: '500px', border: '2px solid black'}}>
            {children}
        </div>
    )
}

export default Scroll