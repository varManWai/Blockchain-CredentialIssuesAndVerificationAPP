import Stud_profile_form from "../../../components/Stud_profile/stud_profile_form"

import connectMongo from '../../../utils/connectMongo';
// import Badge from '../../../models/badge_student';
// import Certificate from '../../../models/certificate_student';
import Student from "../../../models/student";

export default function profile({ stud_details }) {
    return (
        <div>
            <Stud_profile_form details={stud_details} />
            
        </div>
    )
}

export const getServerSideProps = async (context) => {
    //const session = await getSession({ req: context.req });

    // if (!session) {
    //     return {
    //         redirect: {
    //             destination: "/educator_acc/login",
    //             permanent: false,
    //         },
    //     };
    // }

    // const { _id } = await .findOne({ email: session.user.email });

    try {
        await connectMongo();

        const studDetails = await Student.findById(
            '639e59e4d45662e5803c762a'
        );

        // const allGroups = await GroupModel.find({
        //     // hardcoded
        //     educatorID: '639ac3c99a9c5160501265ac'
        // });

        return { props: { stud_details: JSON.parse(JSON.stringify(studDetails)) } }

    } catch (error) {
        return {
            notFound: true,
        };
    }
};