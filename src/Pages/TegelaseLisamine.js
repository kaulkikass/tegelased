import { useRef, useState } from "react";

function TegelaseLisamine() {
    const eesnimiRef = useRef();
    const perenimiRef = useRef();
    const elukohtRef = useRef();
    const vanusRef = useRef();
    
    const [s6num, m22raS6num] = useState("");

    const sisestaVorm = () => {
        let tegelased = localStorage.getItem('tegelased');
        tegelased = JSON.parse(tegelased) || [];
        tegelased.push({
            eesnimi: eesnimiRef.current.value,
            perenimi: perenimiRef.current.value,
            elukoht: elukohtRef.current.value,
            vanus: vanusRef.current.value});
        localStorage.setItem('tegelased', JSON.stringify(tegelased));
    }

    return ( 
    <div>
        <label>Eesnimi</label><br />
        <input ref={eesnimiRef} type="text" /><br />
        <label>Perenimi</label><br />
        <input ref={perenimiRef} type="text" /><br />
        <label>Elukoht</label><br />
        <input ref={elukohtRef} type="text" /><br />
        <label>Vanus</label><br />
        <input ref={vanusRef} type="text" /><br />
        <button onClick={() => sisestaVorm()}>Sisesta vorm</button>
    </div> 
    );
}

export default TegelaseLisamine;