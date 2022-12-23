import Script from "next/script";
import AddBadge from "../../../components/Credentials/addCredential";

export default function Add_Badge() {
  return (
    <div>
      <Script
        src="https://widget.Cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      />
      <AddBadge path="badges" />
    </div>
  );
}
