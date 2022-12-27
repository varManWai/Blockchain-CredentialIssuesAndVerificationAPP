import EditTitle from "../../../components/Forms/Cert_Edit/editTitleForm"
import EditDescription from "../../../components/Forms/Cert_Edit/editDescForm"
import EditGroup from "../../../components/Forms/Cert_Edit/edu_editGroup_form"

export default function Edit() {
    return (
        <div>
            {/* path: /educator/certificates/[id]/editDesc */}
            {/* path: /educator/certificates/[id]/editGroup */}
            {/* path: /educator/certificates/[id]/editTitle */}

            {/* <EditTitle /> */}
            <EditDescription />
            {/* <EditGroup /> */}
        </div>
    )
}