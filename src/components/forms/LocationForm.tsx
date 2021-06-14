import React from "react";
import { Form, Field, reduxForm } from "redux-form";

interface Props { };

const LocationForm: React.FC<Props> = (props: any) => {
    const { handleSubmit, values, reset } = props;

    const handleLocationChange = () => {
        
    }

    return (
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
        </Form>  
    )
};

const form = reduxForm<{}, Props>({form: "place"})(LocationForm);

export default form;
