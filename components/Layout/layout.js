import Visitor, { Student, Educator} from './navbar';
import Footer from './footer';

export default function Layout({ children , criteria }) {
    const NavBar = () =>{
        if (criteria == "student"){
            return <Student />
        }else if(criteria == "educator"){
            return <Educator />
        }else if(criteria == "visitor"){
            return <Visitor />
        }
    }

    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}