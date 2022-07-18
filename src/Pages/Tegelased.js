import { useState } from "react";

function Tegelased() {
    const [tegelane, n2itaTegelast] = useState('');
    const tegelased = [
        {eesnimi: 'Mickey', perenimi: 'Mouse', elukoht: 'Disneyland'},
        {eesnimi: 'Minnie', perenimi: 'Mouse', elukoht: 'Disneyland'},
        {eesnimi: 'Winnie', perenimi: 'Pooh', elukoht: 'Hundred Acre Wood'},
        {eesnimi: 'Roo', perenimi: 'Kangaroo', elukoht: 'Hundred Acre Wood'},
        {eesnimi: 'Scooby', perenimi: 'Doo', elukoht: 'Crystal Cove'}
    ];
    const kuvaNimi = (tegelane) => {
        console.log(tegelane.eesnimi);
    }
    return ( 
    <div>
        {tegelased.map(tegelane =>
        <div onClick={() => n2itaTegelast(tegelane.eesnimi)}>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perenimi}</div>
                <div>{tegelane.elukoht}</div>
                <button onClick={() => kuvaNimi(tegelane)}>Saada eesnimi</button>
                <br />
        </div>
        )}
        { tegelane !== '' && <div>Klikkisid tegelase {tegelane} peal</div> }
    </div> 
    );
}

export default Tegelased;