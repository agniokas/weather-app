import React from "react";
import { Form, Field, reduxForm, change, formValues} from "redux-form";

interface Props { };

let PlaceForm: React.FC<Props>  = (props: any) => {
    const { handleSubmit, pristine, submitting} = props;

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="city">Enter City name</label>
                <Field 
                name="city" 
                component="input" 
                type="text" 
                placeholder="City name"
                />
            </div>
            <button 
            type="submit" 
            disabled={pristine || submitting}
            >Submit</button>
        </Form>
    )
}

const form = reduxForm<{}, Props>({form: "place"})(PlaceForm);

export default form