import React from "react";
import { Form, Field, reduxForm } from "redux-form";

interface Props { };

let PlaceForm: React.FC<Props>  = (props: any) => {
    const { handleSubmit, pristine, submitting} = props;

    return (
        <Form className="form" onSubmit={handleSubmit}>
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
                                />
                        <span className="radio-input">C</span>
                    </label>
                    <label>
                        <Field 
                            name="units" 
                            component="input" 
                            type="radio" 
                            value="f" 
                                />
                        <span className="radio-input">F</span>
                    </label>
                </div>
            </div>
            <button 
                type="submit" 
                disabled={pristine || submitting}
                >Submit
            </button>
        </Form>
    )
}

const form = reduxForm<{}, Props>({form: "place"})(PlaceForm);

export default form