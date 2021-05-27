import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import logo from './assets/screenshot-logo.png'


function App() {
    const [counterAardbei, setCounterAardbei] = React.useState(0);
    const [counterBanaan, setCounterBanaan] = React.useState(0);
    const [counterAppels, setCounterAppels] = React.useState(0);
    const [counterKiwis, setCounterKiwis] = React.useState(0);
    const { handleSubmit, formState: { errors }, register, watch } = useForm();

    const selectedReferrer = watch('frequency');

    function resetCounter() {
        setCounterAardbei(0);
        setCounterAppels(0);
        setCounterBanaan(0);
        setCounterKiwis(0);
    }


    function onFormSubmit(data) {
        console.log(data);
    }


    return (
        <>
            <div className='header'>
            <img src={logo} alt={"Fruitmand bezorgservice"}/>
            <h1>Fruitmand bezorgservice</h1>
            </div>
            <form className="fruit-form" onSubmit={handleSubmit(onFormSubmit)}>
            <div className={"aardbeien"}>
               <h2> 🍓 Aardbeien:
                   <button onClick={() => setCounterAardbei(counterAardbei - 1)}>-</button>
                   {counterAardbei}
                   <button onClick={() => setCounterAardbei(counterAardbei + 1)}>+</button></h2>
            </div>

            <div className={"bananen"}>
                <h2> 🍌 Bananen:
                    <button onClick={() => setCounterBanaan(counterBanaan - 1)}>-</button>
                    {counterBanaan}
                    <button onClick={() => setCounterBanaan(counterBanaan + 1)}>+</button></h2>
            </div>

            <div className={"appels"}>
                <h2> 🍏 Appels:
                    <button onClick={() => setCounterAppels(counterAppels- 1)}>-</button>
                    {counterAppels}
                    <button onClick={() => setCounterAppels(counterAppels + 1)}>+</button></h2>
            </div>

            <div className={"kiwi"}>
                <h2> 🥝 Kiwi's:
                    <button onClick={() => setCounterKiwis(counterKiwis - 1)}>-</button>
                    {counterKiwis}
                    <button onClick={() => setCounterKiwis(counterKiwis + 1)}>+</button></h2>
            </div>
            <button onClick={() => resetCounter()}>reset</button>
            </form>
            <br></br>
            <form className="details-form" onSubmit={handleSubmit(onFormSubmit)}>
                <h2>Bezorgfrequentie</h2>
                <label htmlFor="voornaam" id="firstnameId">
                    Voornaam:
                    <input type="text" placeholder="Voornaam..." id="voornaam" {...register("voornaam", {required: true})}/>
                    {errors.voornaam && errors.voornaam.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>
                <br/>
                <label htmlFor="achternaam" id="lastnameId">
                    Achternaam:
                    <input type="text" placeholder="Achternaam..." id="achternaam" {...register("achternaam", {required: true})}/>
                    {errors.achternaam && errors.achternaam.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>

                <br/>
                <label htmlFor="leeftijd" id="ageId">
                    Leeftijd:
                    <input type="number" placeholder="Leeftijd..." id="leeftijd" {...register("leeftijd", {required: true, min: 18})}/>
                    {errors.leeftijd && errors.leeftijd.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>

                <br/>
                <label htmlFor="straat" id="street">
                    Straat:
                    <input type="text" placeholder="Straat..." id="straat" {...register("straat", {required: true})}/>
                    {errors.leeftijd && errors.leeftijd.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>
                <br/>
                <label htmlFor="huisnummer" id="housenumber">
                    Huisnummer:
                    <input type="number" placeholder="Huisnummer..." id="huisnummer" {...register("huisnummer", {required: true})}/>
                    {errors.huisnummer && errors.huisnummer.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>

                <br/>
                <label htmlFor="postcode" id="zipcodeId">
                    Postcode:
                    <input type="text" placeholder="1234AA" id="postcode" {...register("postcode", {required: true, maxLength: 6})}/>
                    {errors.postcode && errors.postcode.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>

                <br/>
                <label htmlFor="woonplaats" id="city">
                    Woonplaats:
                    <input type="text" placeholder="Woonplaats..." id="woonplaats" {...register("woonplaats", {required: true})}/>
                    {errors.woonplaats && errors.woonplaats.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
                </label>

                <br/>
                <div className="frequency">
                    <label htmlFor="everyweek" id="everyweek">
                        Iedere week
                        <input type="radio" value="Iedere week" {...register("frequency", {required: true})}/>
                    </label>
                <br/>
                    <label htmlFor="otherweek" id="otherweek">
                        Om de week
                        <input type="radio" value="Om de week" {...register("frequency", {required: true})}/>
                    </label>
                <br/>
                    <label htmlFor="everymonth" id="everymonth">
                        Iedere maand
                        <input type="radio" value="Iedere maand" {...register("frequency", {required: true})}/>
                    </label>
                    <br/>
                    <label htmlFor="other" id="other">
                        Anders
                        <input type="radio" value="anders" {...register("frequency", {required: true})}/>
                        {selectedReferrer === 'anders' && (
                            <input
                                type="text"
                                {...register("anders-field", { required: true })}
                            />
                        )}
                    </label>
                    <br/>
                    {errors.frequency && errors.frequency.type === "required" && <span className="errorMessage">Maak hier een keuze!</span>}
                </div>
                <br/>
                <label htmlFor="opmerkingen" id="comments">
                    Opmerkingen:
                    <br/>
                    <textarea placeholder="Ruimte voor opmerkingen..." rows="4" cols="40" id="opmerkingen" {...register("comments")}/>
                </label>
                <br/>
                <label htmlFor="checkBox">
                    <input type="checkBox" name="checkBox" id="checkBox"{...register("checkBox", {required: true})}/>
                    {errors.checkBox && errors.checkBox.type === "required" && <span className="errorMessage">Je moet hier een vinkje zetten</span>}
                </label> ik ga akkoord met de voorwaarden
                <br/>
                <input type="submit" />
            </form>
        </>
    );
}

export default App;
