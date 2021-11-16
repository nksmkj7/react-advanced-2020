import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
    const [extraPeople, setExtraPeople] = React.useState([
        { id: 5, name: "nikesh" },
        { id: 6, name: "ritu" },
        { id: 7, name: "nabina" },
        { id: 8, name: "indra maya" },
        { id: 9, name: "shiva ram" },
    ]);
    const [people, setPeople] = React.useState(data);
    const removeItem = (id) => {
        setPeople(people.filter((person) => person.id !== id));
    };
    // console.log(extraPeople);
    const addItem = () => {
        // setPeople((oldPeople) => {
        //     return [
        //         ...oldPeople,
        //         { id: extraPeople.length + 1, name: "new person" },
        //     ];
        // });
        // setPeople([
        //     ...people,
        //     { id: extraPeople.length + 1, name: "new person" },
        // ]);
        const randomNumber = getRndInteger(5, 9);
        if (!checkIfItemIsPresent(randomNumber)) {
            setPeople((oldPeople) => {
                return [
                    ...oldPeople,
                    extraPeople.find((person) => person.id === randomNumber),
                ];
            });
        }
    };

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const checkIfItemIsPresent = (id) => {
        const isPresent = people.find((person) => person.id === id);
        return isPresent;
    };

    return (
        <React.Fragment>
            <h2>useState array example</h2>

            {people.map((item) => {
                return (
                    <div className="item" key={item.id}>
                        {item.name}
                        <button onClick={() => addItem()}>add</button>
                        <button onClick={() => removeItem(item.id)}>
                            remove
                        </button>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default UseStateArray;
