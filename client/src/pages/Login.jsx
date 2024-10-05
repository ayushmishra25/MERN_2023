import {useState} from "react";

export const Login = () => {
    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);


    };
    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className = "container grid grid-two-cols">
                     <div className="login-image">
                       <img src = "/images/login.png" alt="trying to fill login form " 
                       width = "600"
                       height = "600"
                       
                       />
                    </div>

                    <div className = "Login-form">
                        <h1 className="main-heading mb-3">Login-form</h1>
                        <br />

                        <form onSubmit= {handleSubmit}>
                            

                            <div>
                                <label htmlFor = "email">email</label>
                                <input 
                                    type="email"
                                    name = "email"
                                    placeholder = "enter your email"
                                    id = "email"
                                    required 
                                    autocomplete = "off"
                                    value= {user.email}
                                    onChange = {handleInput}
                                    
                                />
                            </div>

                            
                            <div>
                                <label htmlFor = "password">password</label>
                                <input 
                                    type="password"
                                    name = "password"
                                    placeholder = "password"
                                    id = "password"
                                    required 
                                    autocomplete = "off"
                                    value= {user.password}
                                    onChange = {handleInput}
                                    
                                />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Login Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </section>
    </>
};