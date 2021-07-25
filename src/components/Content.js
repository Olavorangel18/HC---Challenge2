import React, {useState,useEffect} from 'react';
import menina from './assets/menina.svg'


export default function Content(props){

    
    const [email,setEmail] = useState("");
    const [listEmail, setlistEmail] = useState([])
    useEffect(() =>{
        let dados = localStorage.getItem('listEmail');
        dados = JSON.parse(dados);
        setlistEmail(dados);
    },[])
    function handleSubmitEmail(event){
    event.preventDefault();
    if(!listEmail.includes(email))
        listEmail.push(email)
        localStorage.setItem('listEmail',JSON.stringify(listEmail));
    setEmail("")
}
    return (
        <>
        <section>
        <div className="containerImg">
            <img src={menina} className="illustration"></img>
        </div>
            <div className="content">
                <p className="textFriday">{props.event}</p>
                <h1>{props.copy}</h1>
                <p className="description">{props.description}</p>
                <form onSubmit={handleSubmitEmail}>
                    <input value={email} onChange={(event) => {setEmail(event.target.value)}}type="Email" placeholder="Coloque seu email aqui"></input>
                    <button type="submit"><p class="submit">Enviar</p></button>
                </form>
            </div>
        </section>
        </>
    );
}