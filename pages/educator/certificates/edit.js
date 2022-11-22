import EditTitle from "../../../components/Forms/edu_edit/edu_editTitle_form"
import EditDescription from "../../../components/Forms/edu_edit/edu_editDesc_form"
import EditGroup from "../../../components/Forms/edu_edit/edu_editGroup_form"

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