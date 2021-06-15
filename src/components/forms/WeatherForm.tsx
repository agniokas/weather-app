import React from "react";
import { Form, Field, reduxForm, InjectedFormProps } from "redux-form";

type OwnProps = {}

interface Props extends InjectedFormProps, OwnProps {}

let WeatherForm: React.FC<Props>  = ({handleSubmit}) => {

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <div className="form-location">
            <label  className="label-names" htmlFor="city">Enter City name</label>
            <Field 
              name="city" 
              component="input" 
              type="text" 
              placeholder="City name"
              required
            />
          </div>
          <div className="form-units">
            <label className="label-names" htmlFor="units">Chose units</label>
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