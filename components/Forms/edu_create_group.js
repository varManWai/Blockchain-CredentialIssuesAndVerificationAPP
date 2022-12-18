import React from 'react';
import { useRef } from 'react';
import { useRouter } from "next/router";

export default function Edu_create_group() {

    const router = useRouter();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitFormHandler = async (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDesc = descriptionInputRef.current.value;
        // const reqBody = { groupName: enteredName, desc: enteredDesc, educatorID: '639ac3c99a9c5160501265ac' };

        const res = await fetch(`/api/educator/group/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                groupName: enteredName,
                desc: enteredDesc,
                educatorID:'639ac3c99a9c5160501265ac'
            }),
        });
        //const data = await res.json();

        router.push('/educator/group/')
    };

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






