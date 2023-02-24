export default function MapsRoute() {
  return <>
    <div className="section text-center">
      <div className="container">
        <div className="row">
          <div className="ml-auto mr-auto col-md-8">
            <h2 className="title" id="rota">Sugestão de Trajeto</h2>
            <p className="description">
              Sugerimos que cada participante não exceda 100km de distância para que mais pessoas possam participar.
              Este roteiro abaixo é somente uma sugestão ilustrativa, o roteiro final será definido pelos participantes
              que se cadastrarem para realizar a jornada.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d1809417.3861486882!2d-50.27324626544547!3d-27.65490451766651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e1!4m5!1s0x95226a286da5e8fd%3A0xb88750f1b737bc35!2sPasso%20de%20Torres!3m2!1d-29.320786899999998!2d-49.723929399999996!4m5!1s0x9523d2aeac4a6e03%3A0x897a889b0d868430!2sMorro%20dos%20Conventos%2C%20State%20of%20Santa%20Catarina!3m2!1d-28.9418194!2d-49.3603506!4m5!1s0x952181e2d391d045%3A0x5333d655f0ed7675!2sCrici%C3%BAma%2C%20State%20of%20Santa%20Catarina!3m2!1d-28.677475899999997!2d-49.3704155!4m5!1s0x952142592ca52293%3A0xf8e8b689980101de!2sTubar%C3%A3o%2C%20State%20of%20Santa%20Catarina!3m2!1d-28.4818875!2d-49.0058727!4m5!1s0x9526ca8d9036d5d3%3A0x222b8b3dc2b114ce!2sImbituba%2C%20State%20of%20Santa%20Catarina!3m2!1d-28.2408045!2d-48.6686568!4m5!1s0x9526d1a6aad43c8b%3A0x3bdcccd7ca13150b!2sGaropaba%2C%20State%20of%20Santa%20Catarina!3m2!1d-28.028071999999998!2d-48.6216255!4m5!1s0x9527320ed5be2ac1%3A0x3d87163b9d90aa06!2sPalho%C3%A7a%2C%20State%20of%20Santa%20Catarina!3m2!1d-27.641121499999997!2d-48.678953299999996!4m5!1s0x94d8b5dab463c5fb%3A0x19616693fcb2226d!2sCambori%C3%BA%2C%20State%20of%20Santa%20Catarina!3m2!1d-27.0217451!2d-48.6515664!4m5!1s0x94dea3f39db1ab37%3A0xbc4b989df161e9fa!2sJoinville%20-%20State%20of%20Santa%20Catarina!3m2!1d-26.3043758!2d-48.846374399999995!4m5!1s0x94dbfc56753a6fc7%3A0xb549df45e12c99d5!2sBarra%20do%20Sai%2C%20State%20of%20Santa%20Catarina!3m2!1d-25.998041999999998!2d-48.6022475!5e0!3m2!1sen!2sbr!4v1677239467775!5m2!1sen!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </>;
}
