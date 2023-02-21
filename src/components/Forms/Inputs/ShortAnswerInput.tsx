import React from 'react';
import { useShortAnswerInput } from 'react-google-forms-hooks';
import { InputGroup, InputGroupAddon, InputGroupText, InputProps, Label } from 'reactstrap';

type Props = InputProps & { id: string; icon?: string; };

export default function ShortAnswerInput({ id, icon, ...props }: Props) {
  const { register, label, required, description, error } = useShortAnswerInput(id);
  const iconPrefix = icon?.startsWith('nc') ? 'nc-icon' : icon?.startsWith('fa') ? 'fa' : '';

  return (
    <>
      <Label>{label}</Label>
      <InputGroup>
        {icon ? <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={[iconPrefix, icon].join(' ')} />
          </InputGroupText>
        </InputGroupAddon> : null}
        <input
          className="form-control"
          {...props}
          {...register()}
          placeholder={label}
          required={required}
        />
      </InputGroup>
      {error ? <small className="text-danger">{error.message}</small> : null}
      {description ? <small>{description}</small> : null}
    </>
  );
}
