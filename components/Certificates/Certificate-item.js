import Image from "next/image";

import { Button } from "@mui/material/";

export default function CertificateItem() {
    const style = {
        backgroundImage: "/hello world"
    }

    return (
        <div>
            <h1>this is the certificate small component 'show in the all certificates'</h1>
            <Image
                src="/images/login.jpg"
                alt="this is a certificate"
                height={500}
                width={500}
            />
            <div className="down-side">
                <Button variant="contained">View</Button>
                <Button variant="contained"  >
                    <Image
                        src="/icons/close-circle-outline.svg"
                        alt="a delete icon"
                        height={20}
                        width={20}
                        priority
                    />
                </Button>
            </div>
        </div>
    )
}