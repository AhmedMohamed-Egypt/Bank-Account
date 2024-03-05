import ReactDOM from 'react-dom';
function Modal({children,childClass,onClick}) {
    const ContentModal =({children})=>{
        return <>
        <div className={childClass}>
{children}
        </div>
        <div className='overlay' onClick={onClick}></div>
        </>
    }
    return (
        <>
        {ReactDOM.createPortal(<ContentModal   className={childClass}>{children}</ContentModal>,document.getElementById("modal"))}
        </>
 
       
    )
}

export default Modal

