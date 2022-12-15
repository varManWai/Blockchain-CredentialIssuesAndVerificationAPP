import AllBadge from "../../../components/Certificates/all_certificate"

import BadgeModel from "../../../models/badge";
import connectMongo from '../../../utils/connectMongo';

export default function Badges({Badges}) {
    return (
        <div>
            <AllBadge Certificates={Badges} path="badges"/>
            {/* {console.log(Badges)} */}
        </div>
    )
}

export const getServerSideProps = async () => {

  try {
    // console.log("CONNECTING TO MONGO");
    await connectMongo();
    // console.log("CONNECTED TO MONGO");

    // console.log("FETCHING DOCUMENTS");
    const Badges = await BadgeModel.find();
    // console.log("FETCHED DOCUMENTS");



    return {
      props: {
        Badges: JSON.parse(JSON.stringify(Badges)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
}