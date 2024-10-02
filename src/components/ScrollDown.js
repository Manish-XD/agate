function ScrollDown() 
{
    return (
        <div className="scrollDown">
            <div className="scrollDown__icons">
                <img src="/mouse.gif" alt="mouse scroll down gif" className="mouseGif"/>
                <img src="/triangle.svg" alt="triangle svg" className="scrollDown__triangle"/>
            </div>
            <span>scroll down</span>
        </div>
    )
}

export default ScrollDown;