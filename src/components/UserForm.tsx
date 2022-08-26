import {useState} from "react";

export const UserForm = () => {
    const[name, setName] = useState<string>()

    const save = (event: any) => {
        console.log("Event", event)
    }

    const handleNameChange = (event: any)=> {
        console.log(event.target.value)
        setName(event.target.value)
    }

    return(
        <section>
            <form onSubmit={save}>
                <label>Name
                <input className="text-blue" type="text" name={"name"} value={name} onChange={handleNameChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </section>
    )
}