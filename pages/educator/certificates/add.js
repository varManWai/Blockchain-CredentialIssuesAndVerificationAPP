import { getSession } from "next-auth/react";
import Head from "next/head";
import AddCertificate from "../../../components/Credentials/addCredential"


export default function AddCert() {

    return (
        <div>
            <AddCertificate path="certificates" />
        </div>
    )
}
