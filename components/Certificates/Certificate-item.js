import Image from "next/image";

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
                <button>View</button>
                <button>Delete</button>
            </div>
        </div>
    )
}