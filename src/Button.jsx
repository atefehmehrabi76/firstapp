function Button(props){
    return(
        <button className="bg-slate-400 rounded p-1 m-3 hover:p-3 hover:rounded-3xl" disabled={props.disabled} onClick={props.click}>{props.children}</button>
    )
};
export default Button;





