import React from 'react';
import { useRef } from 'react';




export default function Edu_create_group() {

    const nameInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitFormHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDesc = descriptionInputRef.current.value;

        const reqBody = { name: enteredName, desc: enteredDesc };

        fetch('/api/group', {
            method: 'POST', body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((data) => console.log(data));

    }

    return (

        <div>

            <form onSubmit={submitFormHandler}>
                <h1>Groups details</h1>
                <label htmlFor="dname">Display name</label><br />
                <input type="text" required id="dname" name="dname" placeholder=" Name of the group" size="150" ref={nameInputRef} /><br /><br />
                <label htmlFor="nameERR"></label><br />

                <label htmlFor="desc">Description</label><br />
                <input type="text" required id="desc" name="desc" placeholder=" Inform people what this group of credential holders had to do to earn the credential" size="150" ref={descriptionInputRef} /><br /><br />
                <label htmlFor="descERR"></label><br />

                <br /><br />
                <input type="submit" value="Save" />
            </form>

        </div>
    );

}

{/*    
    message: 'Please give your group a name!',
    message: 'Please explain what this group of credential holders had to do to earn the credential!',
    message: 'Please write down the related skill set!',
    message: 'Please choose a category!',
*/}






