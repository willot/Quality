import {useState} from "react";
import {User} from "../pages/Entities";

type UserFormProps = {
    setEntity: (value: User) => void;
}

export const UserForm = ({setEntity}: UserFormProps) => {
    const [name, setName] = useState<string>();
    const [street, setStreet] = useState<string>();
    const [apartment, setApartment] = useState<string>();
    const [city, setCity] = useState<string>();

    const save = (event: any) => {
        setEntity({
            name: name,
            street: street,
            apt: apartment,
            city: city
        });
        setName("");
        setStreet("");
        setApartment("");
        setCity("");
        console.log("Event", event.target.value)
    }

    return (
        <section className="bg-blue flex flex-col space-y-2">
                <label className="flex flex-col sm:flex-row">
                    <span className="w-16 font-semibold">Name</span>
                    <input className="text-blue rounded-md"
                           type="text"
                           name={"name"}
                           value={name}
                           onChange={(event) => {
                               setName(event.target.value)
                           }}/>
                </label>
                <label className="flex flex-col sm:flex-row">
                    <span className="w-16 font-semibold">Street</span>
                    <input className="text-blue rounded-md"
                           type="text"
                           name={"street"}
                           value={street}
                           onChange={(event) => {
                               setStreet(event.target.value)
                           }}/>
                </label>
                <label className="flex flex-col sm:flex-row">
                    <span className="w-16 font-semibold">Apt #</span>
                    <input className="text-blue rounded-md"
                           type="text"
                           name={"apartment"}
                           value={apartment}
                           onChange={(event) => {
                               setApartment(event.target.value)
                           }}/>
                </label>
                <label className="flex flex-col sm:flex-row">
                    <span className="w-16 font-semibold">City</span>
                    <input className="text-blue rounded-md"
                           type="text"
                           name={"city"}
                           value={city}
                           onChange={(event) => {
                               setCity(event.target.value)
                           }}/>
                </label>
                <input type="submit" value="Submit"
                       onClick={save}
                       className=" ml-16 w-32 h-8 bg-pink rounded-md text-blue font-semibold"/>
        </section>
    )
}