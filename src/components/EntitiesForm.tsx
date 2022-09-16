import {useState} from "react";
import {User} from "../pages/Entities";

type UserFormProps = {
    setEntity: (value: User) => void;
    originalEntities?: User;
}

export const EntitiesForm = ({setEntity, originalEntities}: UserFormProps) => {
    const [firstName, setFirstName] = useState<string | undefined>(originalEntities ? originalEntities.firstName : undefined);
    const [lastName, setLastName] = useState<string | undefined>(originalEntities ? originalEntities.lastName : undefined);
    const [street, setStreet] = useState<string | undefined>(originalEntities ? originalEntities.street : undefined);
    const [apartment, setApartment] = useState<string | undefined>(originalEntities ? originalEntities.apt : undefined);
    const [city, setCity] = useState<string | undefined>(originalEntities ? originalEntities.city : undefined);
    const [error, setError] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const save = (event: any) => {
        if (city === undefined || city === "" || lastName === undefined || lastName === "") {
            setError(true);
            setUpdateSuccess(false);

            return
        }
        if (originalEntities && originalEntities.apt && apartment === "") {
            setUpdateSuccess(false);
            return;
        }
        setError(false);
        setEntity({
            firstName: firstName,
            lastName: lastName,
            street: street,
            apt: apartment,
            city: city
        });
        if (originalEntities) {
            setUpdateSuccess(true);
        }
        if (!originalEntities) {
            setFirstName("");
            setLastName("");
            setStreet("");
            setApartment("");
            setCity("");
        }
    }

    return (
        <section className="bg-white-bg flex flex-col space-y-2">
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">First Name</span>
                <input className="text-blue border border-pink rounded-md"
                       type="text"
                       name={"name"}
                       value={firstName}
                       onChange={(event) => {
                           setFirstName(event.target.value)
                       }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">Last Name*</span>
                <input
                    className={`text-blue border border-pink rounded-md ${error && (lastName === undefined || lastName === "") ? "ring-4 border-solid ring-red" : ""}`}
                    type="text"
                    name={"name"}
                    value={lastName}
                    onChange={(event) => {
                        setLastName(event.target.value)
                    }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">Street</span>
                <input className="text-blue border border-pink rounded-md"
                       type="text"
                       name={"street"}
                       value={street}
                       onChange={(event) => {
                           setStreet(event.target.value)
                       }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">Apt #</span>
                <input className="text-blue border border-pink rounded-md"
                       type="text"
                       name={"apartment"}
                       value={apartment}
                       onChange={(event) => {
                           setApartment(event.target.value)
                       }}/>
            </label>
            <label className="flex flex-col sm:flex-row">
                <span className="w-24 font-semibold">City*</span>
                <input
                    className={`text-blue border border-pink rounded-md ${error && (city === undefined || city === "") ? "ring-4 border-solid ring-red" : ""}`}
                    type="text"
                    name={"city"}
                    value={city}
                    onChange={(event) => {
                        setCity(event.target.value)
                    }}/>
            </label>
            {error && <p className="font-semibold text-red">Missing field
                {firstName === "" || firstName === undefined ? " First Name," : ""}
                {city === "" || city === undefined ? " City" : ""}
            </p>}
            {(updateSuccess && originalEntities) && (
                <p className="text-green font-semibold">You successfully updated your user information</p>
            )}
            {(!updateSuccess && originalEntities && originalEntities.apt && apartment === "") && (
                <p className="text-red font-semibold">You can't remove the apartment field</p>
            )}
            <section className="flex flex-row justify-center sm:justify-start">
                <input type="submit" value="Submit"
                       onClick={save}
                       className=" ml-24 w-32 h-8 bg-pink rounded-md text-white font-semibold active:translate-y-0.5 duration-200 active:bg-white"/>
            </section>
        </section>
    )
}