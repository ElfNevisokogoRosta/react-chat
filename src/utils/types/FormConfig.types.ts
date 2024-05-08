import { FormElements } from '../constants/formElements.ts';

interface FormConfigTypes<T> {
  tag: FormElements;
  name: T;
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
}

export default FormConfigTypes;
