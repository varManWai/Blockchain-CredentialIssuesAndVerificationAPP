import { getSession } from "next-auth/react";
import Head from "next/head";
import AddCertificate from "../../../components/Credentials/addCredential"
import EducatorModel from "../../../models/educator";
import GroupModel from "../../../models/group";
import connectMongo from "../../../utils/connectMongo";

export default function AddCert({ groupsArr }) {

    return (
        <div>
            <AddCertificate path="certificates" groupsArr={groupsArr} />
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: "/educator/login",
                permanent: false,
            },
        };
    }

    try {
        // console.log("CONNECTING TO MONGO");
        await connectMongo();
        // console.log("CONNECTED TO MONGO");

        const educatorData = await EducatorModel.findOne({ email: session.user.email });

        // console.log("FETCHING DOCUMENTS");
        const groups = await GroupModel.find({ educatorID: educatorData._id });
        // console.log("FETCHED DOCUMENTS");

        const groupsArr = [];
        const groupsSelection = await groups.map(async (group) => {
            groupsArr.push({
                value: group._id,
                label: group.groupName,
            })
        })

        // console.log("groupsSelection");

        // console.log(groupsArr);

        return {
            props: {
                // groupsData: JSON.parse(JSON.stringify(groups)),
                groupsArr: JSON.parse(JSON.stringify(groupsArr)),
            },
        };
    } catch (error) {
        console.log(error);

        return {
            notFound: true,
        };
    }
}
