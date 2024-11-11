import { createRef, useEffect, useState } from "react";

export default function DataEntryForm(props) {

    const formDataObject = {
        email: undefined,
        full_name: undefined,
        address: undefined,
        address_2: undefined,
        city: undefined,
        province: undefined,
        postal_code: undefined,
    };
    const [formData, setFormData] = useState(formDataObject);
    const [formDataShow, setFormDataShow] = useState(undefined);
    const [agreeCheck, setAgreeCheck] = useState(undefined);
    const [errorMessages, setErrorMessages] = useState(undefined);
    const formEl = createRef();

    const onFormInput = (_id, _value) => {
        const fd = formData;
        fd[_id] = _value;
        setFormData(fd);
    };

    const onFormSubmit = (_event) => {
        delete formData.address_2;

        if (!agreeCheck) {
            setErrorMessages(
                <p className="text-white text-2xl bg-red-500 p-2 px-5 rounded-xl animate-pulse">Agree Terms to continue</p>
            );
            return;
        }

        if (!formData || Object.keys(formData).find((x) => !formData[x])) {
            setFormDataShow(undefined);
            setErrorMessages(
                <p className="text-white text-2xl bg-red-500 p-2 px-5 rounded-xl animate-pulse">Fill out missing fields</p>
            );
            return;
        }

        setErrorMessages(undefined);
        setFormDataShow(formData);
    }

    useEffect(() => {
        if (!formEl) return;
        formEl.current.addEventListener("submit", (x) => x.preventDefault());
    });

    return (
        <div className="w-full h-full flex justify-center align-middle items-center flex-col gap-5">
            <form className="w-2/5 flex flex-col gap-5" ref={formEl}>
                <h3 className="w-full text-4xl text-center font-semibold">Data Entry Form</h3>
                <div className="flex gap-5 w-full">
                    <div className="form-control w-full">
                        <label className="label w-full">
                            <span className="w-full text-center">Email</span>
                        </label>
                        <input type="text" id="email" placeholder="Enter email" className="input input-bordered w-full" onInput={(e) => onFormInput(e.target.id, e.target.value)} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label w-full">
                            <span className="w-full text-center">Name</span>
                        </label>
                        <input type="text" id="full_name" placeholder="Full Name" className="input input-bordered w-full" onInput={(e) => onFormInput(e.target.id, e.target.value)} />
                    </div>
                </div>
                <div className="w-full">
                    <div className="form-control w-full">
                        <label className="label w-full">
                            <span className="w-full text-center">Address</span>
                        </label>
                        <input type="text" id="address" placeholder="1234 Main St" className="input input-bordered w-full" onInput={(e) => onFormInput(e.target.id, `${e.target.value}${!formData.address_2 ? '' : '\n' + formData.address_2}`)} />
                    </div>
                </div>
                <div className="w-full">
                    <div className="form-control w-full">
                        <label className="label w-full">
                            <span className="w-full text-center">Address 2</span>
                        </label>
                        <input type="text" id="address_2" placeholder="Apartment, studio, or floor" className="input input-bordered w-full" onInput={(e) => onFormInput(e.target.id, e.target.value)} />
                    </div>
                </div>
                <div className="flex gap-5 w-full">
                    <div className="form-control w-full">
                        <label className="label w-full">
                            <span className="w-full text-center">City</span>
                        </label>
                        <input type="text" id="city" className="input input-bordered w-full" onInput={(e) => onFormInput(e.target.id, e.target.value)} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label w-full">
                            <span className="w-full text-center">Province</span>
                        </label>
                        <select className="select select-bordered w-full" id="province" defaultValue="" onChange={(e) => onFormInput(e.target.id, e.target.value)}>
                            <option disabled value="">Choose...</option>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="QC">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label w-full">
                            <span className="w-full text-center">Postal Code</span>
                        </label>
                        <input type="text" id="postal_code" className="input input-bordered w-full" onInput={(e) => onFormInput(e.target.id, e.target.value)} />
                    </div>
                </div>
                <div className="form-control items-center">
                    <label className="label cursor-pointer gap-3">
                        <input type="checkbox" className="checkbox checkbox-primary" onChange={(e) => setAgreeCheck(e.target.checked)} />
                        <span className="label-text text-xl">Agree Terms & Condition?</span>
                    </label>
                </div>
                <div className="form-control items-center">
                    <button className="btn btn-block btn-success text-xl" onClick={(e) => onFormSubmit(e)}>Submit</button>
                </div>
            </form>

            <div className="text-3xl">
                {errorMessages}
                <p className="text-center">{JSON.stringify(formDataShow)}</p>
            </div>
        </div>
    );
}