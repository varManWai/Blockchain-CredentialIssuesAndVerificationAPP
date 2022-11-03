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
            <BFooter />
        }
    }

    return (
        <>
            <NavBar />
            <h1>testing 1</h1>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}