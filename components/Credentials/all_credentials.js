import CertificateGrid from "../Certificates/certificate_grid"

import styles from '../../styles/Login.module.css';

export default function AllCredentials() {

    const items = [
        { key: '1', id: '1', item: 123, product: "name 1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accjansdjknajnd jnjsdnjanjsndbhuhnjn jnasdnjandsj santium." },
        { key: '2', id: '2', item: 123, product: "name 2", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium." },
        { key: '3', id: '3', item: 123, product: "name 3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium." },
        { key: '4', id: '4', item: 123, product: "name 4", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium." },
        { key: '5', id: '5', item: 123, product: "name 5", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium." },
        { key: '6', id: '6', item: 123, product: "name 6", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium." },
        { key: '7', id: '7', item: 123, product: "name 7", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium." },
    ]

    return (
        <div className={styles.all_certificates_section}>
            <CertificateGrid items={items} />
        </div>
    )
}