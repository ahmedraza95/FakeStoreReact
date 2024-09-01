import { Link } from "react-router-dom"
function Login() {
    return (
        <>
            <section class="loginpage">
                <div class="image">
                    <img width="280%" src="#" alt="" />
                </div>
                <div class="form">
                    <div class="image1">
                        <h1>Log IN</h1>
                        <div class="form1">
                            <form id="login" action="">
                                <div className="inputField">
                                    <div>
                                        <label>Email</label>
                                        <input type="text" placeholder="Enter Your Email" name="" id="" />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" placeholder="Enter Your Password" name="" id="" />
                                    </div>
                                </div>
                                <div className="Btn">
                                    <button id="btnSubmit" class="inputuser" type="submit"><b>Log-In</b></button>
                                </div>
                            </form>
                        </div>
                    <div className="LinksPages">
                        <p class="loginmargin">Don't Have an account? </p>
                        <Link to={`/signup`}>Sign-Up</Link>
                    </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Login