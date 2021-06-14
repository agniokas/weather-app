import React from "react";
import { useDispatch } from "react-redux";
import { Form, Field, reduxForm } from "redux-form";

import {changeUnitsAction} from "../../store/actions";

interface Props { };


const UnitsForm: React.FC<Props> = (props: any) => {
    const { handleSubmit, onChange, values } = props;
    
    return (
        <Form onSubmit={handleSubmit}>
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
    )
};

const form = reduxForm<{}, Props>({form: "place"})(UnitsForm);

export default form;
