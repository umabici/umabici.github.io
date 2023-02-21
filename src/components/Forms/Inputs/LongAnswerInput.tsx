import React from 'react';
import { useLongAnswerInput } from 'react-google-forms-hooks';
import { Label } from 'reactstrap';

type Props = { id: string, icon?: string; };

export default function LongAnswerInput({ id }: Props) {
  const { register, label } = useLongAnswerInput(id);

  return (
    <>
      <Label for={id}>{label}</Label>
      <textarea className="form-control" rows={4} id={id} placeholder={label} {...register()} />
    </>
  );
}
