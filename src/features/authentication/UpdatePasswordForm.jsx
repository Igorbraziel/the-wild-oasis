import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowHorizontal from "../../ui/FormRowHorizontal";
import Input from "../../ui/Input";
import useUpdateUser from "./useUpdateUser";
import styled from "styled-components";

const ButtonsDiv = styled.div`
  grid-column-start: 3;
  display: flex;
  justify-content: flex-end;
  gap: 3rem;
`;

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowHorizontal
        label="New Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Confirm New Password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRowHorizontal>
      <FormRowHorizontal>
        <ButtonsDiv>
          <Button onClick={reset} type="reset" variation="secondary">
            Cancel
          </Button>
          <Button disabled={isUpdating}>Update password</Button>
        </ButtonsDiv>
      </FormRowHorizontal>
    </Form>
  );
}

export default UpdatePasswordForm;
