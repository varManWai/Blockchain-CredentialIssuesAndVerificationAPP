import React from 'react';
import { useRef } from 'react';
import { useRouter } from "next/router";
import { useState } from 'react';
import * as XLSX from 'xlsx';

export default function Edu_create_group() {

    const router = useRouter();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitFormHandler = async (e) => {
        e.preventDefault();


        // const enteredName = nameInputRef.current.value;
        // const enteredDesc = descriptionInputRef.current.value;

        // // const reqBody = { groupName: enteredName, desc: enteredDesc, educatorID: '639ac3c99a9c5160501265ac' };

        // const res = await fetch(`/api/educator/group/add`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         groupName: enteredName,
        //         desc: enteredDesc,
        //         educatorID: '639ac3c99a9c5160501265ac'
        //     }),
        // });
        // const data = await res.json();

        // router.push('/educator/group/')

        // const file = e.target.excelFileSelect[0];
        // console.log(e.target.excelFileSelect[0]);

        // const reader = new FileReader();
        // reader.onload = (event) => {
        //     const bstr = event.target.result;
        //     const workBook = XLSX.read(bstr, { type: "binary" });
        //     const workSheetName = workBook.SheetNames[0];
        //     const workSheet = workBook.Sheets[workSheetName];
        //     const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
        //     const headers = fileData[0];
        //     const heads = headers.map(head => ({ title: head, field: head }));
        //     fileData.splice(0, 1);
        //     convertToJSON(headers, fileData);
        //     console.log("file data splice here ")
        // };
        //reader.readAsBinaryString(file);

        // console.log(reader)

        const [image, setImage] = useState(null);
        const [createObjectURL, setCreateObjectURL] = useState(null);

        const uploadToClient = (event) => {
            if (event.target.files && event.target.files[0]) {
                const i = event.target.files[0];

                setImage(i);
                setCreateObjectURL(URL.createObjectURL(i));
            }
        };

        const uploadToServer = async (event) => {
            const body = new FormData();
            // console.log("file", image)
            body.append("file", image);
            const response = await fetch("/api/upload", {
                method: "POST",
                body
            });
        };
    };

    // const convertToJSON = async (headers, data) => {
    //     debugger;
    //     const rows = [];
    //     data.forEach(async row => {
    //         let rowData = {};
    //         row.forEach(async (element, index) => {
    //             rowData[headers[index]] = element;
    //         });
    //         console.log("rowData -->", rowData);
    //         rows.push(rowData);
    //     }

    //     );
    //     setTabledata(rows)
    //     console.log(rows)
    //     return rows;
    // }

    return (

        <div>

            <form onSubmit={submitFormHandler}>

                {/* <h1>Groups details</h1>
                <label htmlFor="dname">Display name</label><br />
                <input type="text" required id="dname" name="dname" placeholder=" Name of the group" size="150" ref={nameInputRef} /><br /><br />
                <label htmlFor="nameERR"></label><br />

                <label htmlFor="desc">Description</label><br />
                <input type="text" required id="desc" name="desc" placeholder=" Inform people what this group of credential holders had to do to earn the credential" size="150" ref={descriptionInputRef} /><br /><br />
                <label htmlFor="descERR"></label><br /> */}

                <label htmlFor="excelFileSelect">Upload excel file : </label>
                <input type="file" required id="excelFileSelect" name="excelFileSelect" accept=".xlsx"
                    onClick={({ target }) => {
                        if (target.files) {
                            const file = target.files[0];
                            setSelectedImage(URL.createObjectURL(file));
                            setSelectedFile(file);
                        }
                    }}


                />

                {/* <input id="upload" ref="upload" type="file" accept="image/*"
                    onInput={(event) => {
                        this.readFile(event)
                    }}
                    onClick={(event) => {
                        event.target.value = null
                    }}
                /> */}
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






