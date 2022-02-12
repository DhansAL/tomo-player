import { Form } from "solid-bootstrap"
import { Component } from "solid-js"

type InputFieldProps = {
  user: string;
  password: string;
  userSetter: (user: string) => void;
  passwordSetter: (password: string) => void;

}
export const AuthInputFiled: Component<InputFieldProps> = (props) => {

  return (
    <Form>
      <Form.Group className="mb-2" >
        <Form.Control
          htmlSize={1}
          size="sm"
          value={props.user}
          onchange={(e) => props.userSetter(e.currentTarget.value)}
          type="text"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Control
          size="sm"
          type="password"
          value={props.password}
          onchange={(e) => props.passwordSetter(e.currentTarget.value)}
          placeholder="Password"
        />

      </Form.Group>
    </Form>
  )
}
