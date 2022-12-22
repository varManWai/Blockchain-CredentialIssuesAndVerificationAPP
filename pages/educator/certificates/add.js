import { getSession } from "next-auth/react";
import AddCertificate from "../../../components/Credentials/addCredential"


export default function AddCert() {
    return (
        <div>
            <AddCertificate path="certificates" />
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: "/educator_acc/login",
                permanent: false,
            },
        };
    }


    return {
        props:{
            message:''
        }
    }
}