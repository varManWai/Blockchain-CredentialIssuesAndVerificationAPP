import Image from "next/image";
import Layout from "../../components/Layout/layout";

import { useState } from "react";

import { FormControl, InputLabel, Input, InputAdornment, IconButton, TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
    const [values, setValues] = useState({
        password: '',
    })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const Content = () => {
    //     return (
           
    //     );
    // };

    return (
        <>
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
                    ></Image>
                </section>

                <section className="rightSide">
                    <h2>Login</h2>
                    <p>Welcome Back</p>

                    <form>
                        <button>Google</button>

                        <hr />

                        <div>
                            <TextField id="email" label="Email" variant="standard" error helperText="*incorrect entry" />
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className="smallSection">
                            <FormControlLabel
                                value="Remember Me"
                                control={
                                    <Checkbox
                                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                                        color="success"
                                    />
                                }
                                label="Remember Me"
                                labelPlacement="end"
                            />
                            <div className="forgetPwd">
                                <a href="#">Forget Password</a>
                            </div>
                        </div>

                        <Button variant="contained" type="submit" className="login-btn">Login</Button>

                        <p>
                            Don't have an account? <a href="" >Sign Up</a>
                        </p>
                    </form>
                </section>
            </main>
        </>
    );
}
