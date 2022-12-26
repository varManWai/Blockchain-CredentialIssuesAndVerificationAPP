import React from 'react';
import { useRef } from 'react';
import { useRouter } from "next/router";
import { useState } from 'react';
import { useSession } from "next-auth/react";
import * as XLSX from 'xlsx';

export default function Edu_create_group() {

    const [items, setItems] = useState([]);
    const router = useRouter();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const { data: session } = useSession();

    const submitFormHandler = async (e) => {

        e.preventDefault();
        // get user inputs
        const enteredName = nameInputRef.current.value;
        const enteredDesc = descriptionInputRef.current.value;

        // ready to POST it to API to create a group
        console.log("here");
        const res = await fetch(`/api/educator/group/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                groupName: enteredName,
                desc: enteredDesc,
                educatorEmail: session.user.email,
                recipients: items,
                name: items[0].name,
                email:items[0].email,
            }),
        });
        // const data = await res.json();

        // back to display all group page
        router.push('/educator/group/');

    };

    // retrieve data from EXCEL sheets and store in into an array called items
    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                console.log(wsname);

                const ws = wb.Sheets[wsname];

                console.log(ws);

                const data = XLSX.utils.sheet_to_json(ws);

                console.log(data);

                data.map((d) => {
                    setItems([...items, d]);
                })

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d);
        });

        console.log(items);
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

                <label htmlFor="excelFileSelect">Upload excel file : </label>
                <input
                    type="file" required id="excelFileSelect" name="excelFileSelect" accept=".xlsx"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                />
                <br /><br /><br />
                <input type="submit" value="Save" />
            </form>

        </div >
    );

}

{/*    
    message: 'Please give your group a name!',
    message: 'Please explain what this group of credential holders had to do to earn the credential!',
    message: 'Please write down the related skill set!',
    message: 'Please choose a category!',
*/}






