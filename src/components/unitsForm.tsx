import React from "react";
import { Form, Field, reduxForm, change } from "redux-form";

interface Props { };

let UnitsForm: React.FC<Props>  = (props: any) => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="city">Chose units</label>
                <div>
                    <label>
                        <Field 
                            name="units" 
                            component="input" 
                            type="radio" 
                            value="m"
                            onSubmit={handleSubmit}
                            // onChange={(event: any) => {
                            //     event.preventDefault();
                            //     props.dispatch(change("units", "units", "m"))
                            //     }} 
                                />
                        Celcius
                    </label>
                    <label>
                        <Field 
                            name="units" 
                            component="input" 
                            type="radio" 
                            value="f" 
                            onSubmit={handleSubmit}
                            // onChange={(event: any) => {
                            //     event.preventDefault();
                            //     props.dispatch(change("units", "units", "f"))
                            //     }} 
                                />
                        Fahrengheit
                    </label>
                </div>
            </div>
        </Form>
    )
}

const form = reduxForm<{}, Props>({form: "units"})(UnitsForm);

export default form