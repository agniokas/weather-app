import React from "react";
import { Form, Field, reduxForm } from "redux-form";

interface Props { };

let WeatherForm: React.FC<Props>  = (props: any) => {

  const {handleSubmit, values} = props;
  

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
              onChange={values}
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
                  onChange={values}
                />
                <span className="radio-input">C</span>
              </label>
              <label>
                <Field 
                  name="units" 
                  component="input" 
                  type="radio" 
                  value="f" 
                  onChange={values}
                />
                <span className="radio-input">F</span>
              </label>
            </div>
          </div>
        </Form>  
      </div>
    )
};

const form = reduxForm<{}, Props>({form: "weatherForm"})(WeatherForm);

export default form;