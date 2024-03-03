function ErrorBank({errorTxt}) {
    return (
        <p  className={`error ${errorTxt.length>0&&'animate__fadeIn animate__animated '}`} style={{height:'24px'}}>{errorTxt}</p>
    )
}

export default ErrorBank

