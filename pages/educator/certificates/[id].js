import View_Certificate from "../../../components/Credentials/viewCredential"

import CertificateModel from "../../../models/certificate";
import connectMongo from '../../../utils/connectMongo';

export default function viewCertificate ({CertificateData}) {
    return (
        <div>
            <View_Certificate Certificate={CertificateData} CredentialType="certificate"/>
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
      const Certificate = await CertificateModel.findById(id);
      console.log("FETCHED DOCUMENTS");
  
      console.log(Certificate);

      return {
        props: {
            CertificateData: JSON.parse(JSON.stringify(Certificate)),
        },
      };
    } catch (error) {
      console.log(error);
  
      return {
        notFound: true,
      };
    }
  }