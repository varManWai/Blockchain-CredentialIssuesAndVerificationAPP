import Image from 'next/image'
import Layout from '../../components/Layout/layout'

export default function Login() {
    const Content = () => {
        return (
            <main>
                <section className="leftSide">
                    <Image
                        src="/images/login.jpg"
                        alt="Picture of Login Page"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        objectPosition="bottom"
                        priority //the image that must be show first
                    >
                    </Image>
                </section>

                <section className="rightSide">
                    <h2>Login</h2>
                    <p>Welcome Back</p>

                    <form>
                        <button>Google</button>

                        <hr className={styles.hr_line}/>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <p className="error-text">*Error Text</p>


                        <label htmlFor="pwd">Password</label>
                        <input type="password" name="pwd" id="pwd" />
                        <p className="error-text">*Error Text</p>

                        <div className="smallSection">
                            <div className="rememberMe">
                                <input type="checkbox" name="rmbMe" id="rmbMe" />
                                <p>Remember Me</p>
                            </div>

                            <div className="forgetPwd">
                                <a href="#">Forget Password</a>
                            </div>
                        </div>

                        <button type="submit">Login</button>


                        <p>Don't have an account? <a href="">Sign Up</a></p>
                    </form>
                </section>
            </main>
        )
    }

    return (
       
            <Content />
       
    )
}