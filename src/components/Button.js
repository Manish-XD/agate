function Button({ctn, title, onClick}) {
    if(ctn)
    {
        return(
            <button className="ctn_btn">
                {title}
            </button>
        );
    }
    else
    {
        return(
            <button className="btn__container" onClick={onClick}>
                <div className="btn__inner">
                    {title}
                </div>
            </button>
        )
    }
}

export default Button