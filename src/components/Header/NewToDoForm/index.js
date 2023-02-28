import React from "react";
import { Formik, Form, Field } from "formik";
import validations from "./Validations";
import { useTodo } from "../../../contexts/ToDoContext";

function NewToDoForm() {
  const { addTodo } = useTodo();
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);

        addTodo(values.text);
        bag.resetForm();
      }}
      validationSchema={validations}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewToDoForm;
