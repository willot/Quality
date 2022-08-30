import {useState} from "react";

export const UserForm = () => {
    const [name, setName] = useState<string>();
    const [street, setStreet] = useState<string>();
    const [apartment, setApartment] = useState<string>();
    const [city, setCity] = useState<string>();

    const save = (event: any) => {
        console.log("Event", event.target.value)
    }

    return (
        <section className="bg-blue">
            <form onSubmit={save} className="flex flex-col space-y-2">
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
                <input type="submit" value="Submit" className=" ml-16 w-32 h-8 bg-pink rounded-md text-blue font-semibold"/>
            </form>
        </section>
    )
}