import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowHorizontal from "../../ui/FormRowHorizontal";
import Input from "../../ui/Input";
import styled from "styled-components";
import useSignUp from "./useSignUp";
import Spinner from "../../ui/Spinner";

const FormButtonCluster = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
`;

// Email regex: /\S+@\S+\.\S+/
function SignupForm() {
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;

  const { signupMutate, isLoading } = useSignUp();

  function onSubmit({ fullName, email, password }) {
    signupMutate(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  if (isLoading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type="regular">
      <FormRowHorizontal label="Full name" error={errors?.fullName?.message}>
        <Input
          autoComplete="username"
          type="text"
          id="fullName"
          {...register("fullName", { required: "This Field is required" })}
          disabled={isLoading}
        />
      </FormRowHorizontal>

      <FormRowHorizontal label="Email address" error={errors?.email?.message}>
        <Input
          autoComplete="email"
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please, Provide a valid email address",
            },
          })}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          autoComplete="new-password"
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This Field is required",
            minLength: {
              value: 8,
              message: "The Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          autoComplete="new-password"
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This Field is required",
            validate: (value) =>
              value === getValues()?.password || "The Passwords need to match",
          })}
        />
      </FormRowHorizontal>

      <FormButtonCluster>
        {/* type is an HTML attribute! */}
        <Button disabled={isLoading}>Create new user</Button>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </Button>
      </FormButtonCluster>
    </Form>
  );
}

export default SignupForm;
