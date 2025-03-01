export const PageTitle = (props)=>{
    return (
      <h2 className="d-flex justify-content-center align-content-center">{props.text}</h2>
    );
}

export const PageSubtitle = (props) => {
    return (
        <h1>{props.text}</h1>
    );
}

export const Text = (props)=> <div className="d-flex justify-content-center align-content-center">{props.text}</div>