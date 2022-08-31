import {useState} from "react";
import {User} from "../pages/Entities";

type UserFormProps = {
    setEntity: (value: User) => void;
}

export const EntitiesForm = ({setEntity}: UserFormProps) => {
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [street, setStreet] = useState<string>();
    const [apartment, setApartment] = useState<string>();
    const [city, setCity] = useState<string>();
    const [error, setError] = useState(false);

    const save = (event: any) => {
        if (city === undefined || lastName === undefined) {
            setError(true);
            return
        }
        setEntity({
            firstName: firstName,
            lastName: lastName,
            street: street,
            apt: apartment,
            city: city
        });
        setLastName("");
        setStreet("");
        setApartment("");
        setCity("");
        console.log("Event", event.target.value)
    }

    return (
        <section className="bg-blue flex flex-col space-y-2">
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">First Name</span>
                <input className="text-blue rounded-md"
                       type="text"
                       name={"name"}
                       value={firstName}
                       onChange={(event) => {
                           setFirstName(event.target.value)
                       }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">Last Name*</span>
                <input className={`text-blue rounded-md ${error && lastName === undefined ? "ring-4 border-solid ring-red" : ""}`}
                       type="text"
                       name={"name"}
                       value={lastName}
                       onChange={(event) => {
                           setLastName(event.target.value)
                       }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">Street</span>
                <input className="text-blue rounded-md"
                       type="text"
                       name={"street"}
                       value={street}
                       onChange={(event) => {
                           setStreet(event.target.value)
                       }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">Apt #</span>
                <input className="text-blue rounded-md"
                       type="text"
                       name={"apartment"}
                       value={apartment}
                       onChange={(event) => {
                           setApartment(event.target.value)
                       }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">City*</span>
                <input className={`text-blue rounded-md ${error && city === undefined ? "ring-4 border-solid ring-red" : ""}`}
                       type="text"
                       name={"city"}
                       value={city}
                       onChange={(event) => {
                           setCity(event.target.value)
                       }}/>
            </label>
            { error && <p className="font-semibold text-red">Missing field</p>}
            <section className="flex flex-row justify-center sm:justify-start">
                <input type="submit" value="Submit"
                       onClick={save}
                       className=" ml-24 w-32 h-8 bg-pink rounded-md text-blue font-semibold active:translate-y-0.5 duration-200 active:bg-white"/>
            </section>
        </section>
    )
}