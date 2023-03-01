import { Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const ValidationForm = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("*User name is required")
      .matches(/^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/, "*Use only alphabats"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
        "*Incorrect Email"
      )
      .required("*email is required"),
    adharcard: yup
      .string()
      .required("*Adhar card is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(12, "Must be exactly 12 digits")
      .max(12, "Must be exactly 12 digits"),
    contact: yup
      .string()
      .required("*Contact is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    password: yup
      .string()
      .required("*Password is required")
      .min(8, "*Minimum 8 characters "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      adharcard: "",
      contact: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // console.log(errors);
    if (!!errors) {
      //   swal("Success", "All fields are correct", "success");
      alert("All Fields Are Correct");
    }
  };

  return (
    <Container className="py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="User Name"
              variant="outlined"
              placeholder="Enter Username"
              {...register("username")}
              error={!!errors?.username}
              helperText={errors?.username?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="Enter Email"
              {...register("email")}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Adhar Card"
              variant="outlined"
              placeholder="Enter Adhar card"
              {...register("adharcard")}
              error={!!errors?.adharcard}
              helperText={errors?.adharcard?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Contact"
              variant="outlined"
              placeholder="Enter Contact no."
              {...register("contact")}
              error={!!errors?.contact}
              helperText={errors?.contact?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              placeholder="Enter Password"
              {...register("password")}
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <div className="text-end">
              <button type="submit" className="btn btn-outline-primary mx-2">
                Validate
              </button>
              <button type="reset" className="btn btn-outline-danger mx-2">
                Reset
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ValidationForm;
