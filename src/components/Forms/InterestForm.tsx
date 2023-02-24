import LongAnswerInput from '@/components/Forms/Inputs/LongAnswerInput';
import ShortAnswerInput from '@/components/Forms/Inputs/ShortAnswerInput';
import React, { useState } from 'react';
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks';
import { Button, Col, Container, Form, Row } from 'reactstrap';
import form from './InterestForm.json';

export default function InterestForm() {
  const methods = useGoogleForm({ form } as any);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (data: any) => {
    try {
      setError('');
      setSuccess('');
      await methods.submitToGoogleForms(data);
      methods.reset();
      setSuccess('Formulário enviado com sucesso!');
    } catch (_) {
      setError('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
    }
  };

  return (
    <Container id="interesse">
      <Row>

        {error ? <Col className="ml-auto mr-auto" md="12">
          <p className="text-center text-danger">
            {error}
          </p>
        </Col> : null}

        {success ? <Col className="ml-auto mr-auto" md="12">
          <p className="text-center text-success">
            {success}
          </p>
        </Col> : null}

        <Col className="ml-auto mr-auto" md="8">
          <h2 className="text-center">{form.title}</h2>

          <GoogleFormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Row className="py-1">
                <Col md="12">
                  <ShortAnswerInput id="1823127536" icon="nc-single-02" type="text" minLength={6} />
                </Col>
              </Row>
              <Row className="py-1">
                <Col md="6">
                  <ShortAnswerInput id="1014370947" icon="nc-email-85" type="email" />
                </Col>
                <Col md="6">
                  <ShortAnswerInput id="1568615671" icon="fa-whatsapp" type="tel" />
                </Col>
              </Row>

              <Row className="py-1">
                <Col md="6">
                  <ShortAnswerInput id="1900097583" type="text" />
                </Col>
                <Col md="6">
                  <ShortAnswerInput id="810284832" type="text" />
                </Col>
              </Row>

              <div className="py-1">
                <LongAnswerInput id="167407517" />
              </div>

              <Row className="py-1">
                <Col className="ml-auto mr-auto" md="4">
                  <Button className="btn-fill" color="danger" size="lg" type="submit">
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </GoogleFormProvider>
        </Col>

      </Row>
    </Container>
  );
}
