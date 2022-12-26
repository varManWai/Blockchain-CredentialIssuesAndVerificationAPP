
import EditDescription from "../../../../../components/Forms/Cert_Edit/editDescForm";

import CertificateModel from "../../../../../models/certificate";
import connectMongo from '../../../../../utils/connectMongo';

export default function editDesc ({certificateData}) {
    return (
        <div>
            <EditDescription credential={certificateData} type={"certificate"} />
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
      const certificate = await CertificateModel.findById(id);
      console.log("FETCHED DOCUMENTS");
  
  
      return {
        props: {
            certificateData: JSON.parse(JSON.stringify(certificate)),
        },
      };
    } catch (error) {
      console.log(error);
  
      return {
        notFound: true,
      };
    }
  }