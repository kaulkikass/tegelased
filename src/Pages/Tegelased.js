import { useState } from "react";

function Tegelased() {
    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || []; 
    const [valitudTegelased, muudaValitudTegelased] = useState([]);
    const [tegelane, n2itaTegelast] = useState('');
    
    const kuvaNimi = (tegelane) => {
        console.log(tegelane.eesnimi);
    }

    const valiTegelane = (tegelane) => {
        valitudTegelased.push(tegelane);
        muudaValitudTegelased(valitudTegelased.slice());
        console.log(valitudTegelased);
    }
    const eemaldaValitudTegelastest = (index) => {
        valitudTegelased.splice(index,1);
        muudaValitudTegelased(valitudTegelased.slice());
    }
    const lisaValitudTegelastesse = (tegelane) => {
        valitudTegelased.push(tegelane);
        muudaValitudTegelased(valitudTegelased.slice());
    }
    const tyhjenda = () => {
        muudaValitudTegelased([]);
    }
    return ( 

    <div>
        {tegelased.map((tegelane, index) =>
        <div key={index} onClick={() => n2itaTegelast(tegelane.eesnimi)}>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perenimi}</div>
                <div>{tegelane.elukoht}</div>
                <div>{tegelane.vanus}</div>
                <button onClick={() => kuvaNimi(tegelane)}>Saada eesnimi</button>
                <button onClick={() => valiTegelane(tegelane)}>Vali tegelane</button>
                <br />
        </div>
        )}
        <br />
        <button onClick={() => tyhjenda()}>Tühjenda</button>
        {valitudTegelased.length === 0 && <div>Valitud pole ühtegi tegelast</div>}
        {valitudTegelased.length > 0 &&
        <div>
            
            Valitud tegelased:
            {valitudTegelased.map((tegelane, index) =>
            <div key={index}>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perenimi}</div>
                <div>{tegelane.elukoht}</div>
                <div>{tegelane.vanus}</div>
                <button onClick={() => eemaldaValitudTegelastest(index)}>x</button>
                <button onClick={() => lisaValitudTegelastesse(tegelane)}>+</button>
            </div>
            )}
            <div>Valitud on {valitudTegelased.length} tegelast</div>
        </div>}
        { tegelane !== '' && <div>Klikkisid tegelase {tegelane} peal</div> }

    </div> 
    );
}

export default Tegelased;