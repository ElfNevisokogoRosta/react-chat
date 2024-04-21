import {FC} from 'react';

import BaseInput from "./BaseInput.tsx";

interface BaseFormProps {
  config: any
}

//TODO refactor types for base form

const BaseForm: FC<BaseFormProps> = ({config,}) => {

  return (
    <div className='flex flex-col gap-6'>
      {config.map((input) => (
        <BaseInput {...input} />
      ))}

    </div>
  );
}

export default BaseForm;