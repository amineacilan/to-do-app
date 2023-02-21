import * as Yup from "yup";
import { object, string, number, date, InferType } from 'yup';

let validations = object({
  text: string().required("Text is required field"),
});

/* const validations = Yup.object().shape({
  text: Yup.string().required("Text is required field"),
}); */

export default validations;
