import React from 'react';
import { useRef } from 'react';
import { useRouter } from "next/router";
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { Input, Typography, Card } from 'antd';
import * as XLSX from 'xlsx';


export default function Edu_create_group() {

    const { Title } = Typography;

    const [items, setItems] = useState([]);
    const router = useRouter();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const { data: session } = useSession();

    const [error, setError] = useState("");

    const submitFormHandler = async (e) => {

        e.preventDefault();

        try {
            // get user inputs
            const enteredName = nameInputRef.current.input.value;
            const enteredDesc = descriptionInputRef.current.input.value;

            // ready to POST it to API to create a group
            console.log(enteredName);
            console.log(enteredDesc);
            console.log(enteredDesc);

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
                    email: items[0].email,
                }),
            });
            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || 'Something went wrong! Group not create successfully');
            }

            // back to display all group page
            router.push('/educator/group/');

        } catch (err) {
            console.log(err);
            setError(err.message);
        }


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
            {error ? (
                <div style={{ marginBottom: "15px" }}>
                    <Alert message={`Error: ${error}`} type="error" />
                </div>
            ) : (
                ""
            )}
            <form onSubmit={submitFormHandler}>

                <Title level={4} style={{ color: "rgb(24,144,255)" }} >New group's details</Title>

                <label for="name">Display name</label>
                <Input type="text" required id="name" name="name" placeholder=" Name of the group" ref={nameInputRef} /><br /><br />
                <br />

                <label for="desc">Description</label>
                <Input type="text" required id="desc" name="desc" placeholder=" Inform people what this group of credential holders had to do to earn the credential" ref={descriptionInputRef} /><br /><br />
                <br />

                <label htmlFor="excelFileSelect">Upload excel file : </label>
                <input
                    type="file" required id="excelFileSelect" name="excelFileSelect" accept=".xlsx"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                />
                <br /><br />
                <div className="site-card-border-less-wrapper">
                    <Card
                        title="Instructions to create an Excel file"
                        bordered={true}
                        style={{
                            width: 440,
                        }}
                    >
                        <p style={{ textDecoration: "underline" }}><b>First column</b></p>
                        <span>1. To identify the title, I need you to put <b>Name</b> in the <b>first row</b>!</span><br />
                        <span>2. Then, you can put the names in the following rows below.</span>
                        <br /><br /><br />
                        <p style={{ textDecoration: "underline" }}><b>Second column</b></p>
                        <span>1. To identify the title, I need you to put <b>Email</b> in the <b>first row</b>!</span><br />
                        <span>2. Then, you can put the emails in the following rows below.</span>

                    </Card>
                </div>

                <br /><br /><br />
                <input type="submit" value="Save" style={{ backgroundColor: "rgb(24,144,255)", border: "rgb(24,144,255)", color: "white", padding: "0.3vw", borderRadius: "0.5vw" }} />
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






