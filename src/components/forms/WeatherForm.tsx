import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Field, reduxForm, InjectedFormProps } from "redux-form";

type OwnProps = {};

interface Props extends InjectedFormProps, OwnProps { };

let WeatherForm: React.FC<Props>  = ({handleSubmit}) => {

  const { t } = useTranslation();
  
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <div className="form-location">
            <label
              className="label-names"
              htmlFor="city"
            >
              {t("Enter City name")}
            </label>
            <Field
              className="city-input"
              name="city" 
              component="input" 
              type="text" 
              placeholder={t("City name")}
              required
            />
          </div>
          <div className="form-units">
            <label
              className="label-names"
              htmlFor="units"
            >
              {t("Chose units")}
            </label>
            <div>
              <label >
                <Field 
                  name="units" 
                  component="input" 
                  type="radio" 
                  value="m"
                 onClick={handleSubmit}
                />
                <span className="radio-input">C</span>
              </label>
              <label>
                <Field 
                  name="units" 
                  component="input" 
                  type="radio" 
                  value="f" 
                  onClick={handleSubmit}
                />
                <span className="radio-input">F</span>
              </label>
            </div>
          </div>
        </Form>  
      </div>
    )
};

const form = reduxForm<OwnProps>({form: "weatherForm"})(WeatherForm);

export default form;