import Stud_Layout from "../../components/Layout/student/stud_layout";
import Stud_ResetPwd_Form from "../../components/Forms/stud_resetPwd.form";

export default function Login() {

    return (
        <Stud_Layout imgSrc="/images/forgotPwd.jpg">
            <Stud_ResetPwd_Form />
        </Stud_Layout>
    );
}
