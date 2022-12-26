
import EditTitle from "../../../../../components/Forms/Cert_Edit/editTitleForm";

import BadgeModel from "../../../../../models/badge";
import connectMongo from '../../../../../utils/connectMongo';

export default function editTitle ({BadgeData}) {
    return (
        <div>
            <EditTitle credential={BadgeData} type={"badge"} />
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const { id } = context.query;

    try {
      console.log("CONNECTING TO MONGO");
      await connectMongo();
      console.log("CONNECTED TO MONGO");
  
      console.log("FETCHING DOCUMENTS");
      const Badge = await BadgeModel.findById(id);
      console.log("FETCHED DOCUMENTS");
  
  
      return {
        props: {
            BadgeData: JSON.parse(JSON.stringify(Badge)),
        },
      };
    } catch (error) {
      console.log(error);
  
      return {
        notFound: true,
      };
    }
  }