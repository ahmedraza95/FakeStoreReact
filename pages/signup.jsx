import { Link } from "react-router-dom"
function Signup() {
    return (
        <>
            <section class="loginpage">
                <div class="image">
                    <img width="280%" src="#" alt="" />
                </div>
                <div class="form">
                    <div class="image1">
                        <h1>Sign Up</h1>
                        <div class="form1">
                            <form id="login" action="">
                                <div className="inputField">
                                    <div>
                                        <label>Email</label>
                                        <input type="text" name="" id="" placeholder="Create a Email" />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" name="" id="" placeholder="Create a password" />
                                    </div>
                                </div>
                                <div className="Btn">
                                    <button id="btnSubmit" class="inputuser" type="submit"><b>Sign-Up</b></button>
                                </div>
                            </form>
                        </div>
                        <div className="LinksPages">
                            <p class="loginmargin">Already Have an Account?</p>
                            <Link to={`/login`}>Log-In</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Signup