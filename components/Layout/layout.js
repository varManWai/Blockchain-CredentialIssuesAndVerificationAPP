import Visitor, { Student, Educator} from './navbar';
import BFooter from './footer';

export default function Layout({ children , criteria , footer}) {
    const NavBar = () =>{
        if (criteria == "student"){
            return <Student />
        }else if(criteria == "educator"){
            return <Educator />
        }else if(criteria == "visitor"){
            return <Visitor />
        }
    }

    const Footer = () => {
        if(footer){
            return <BFooter />
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