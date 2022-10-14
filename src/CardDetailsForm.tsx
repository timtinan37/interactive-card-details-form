import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CardDetailsForm() {
    return (
        <div className="h-2/3 sm:h-screen sm:w-2/3 flex flex-col justify-center">
            <Formik
                initialValues={{ cardholderName: '', cardNumber: '', expMonth: '', expYear: '', cvc: '' }}
                validationSchema={Yup.object({
                    cardholderName: Yup.string()
                        .required("Can't be blank"),
                    cardNumber: Yup.string()
                        .matches(/^[0-9]+$/, "Wrong format, numbers only")
                        .length(16, 'Must be exactly 16 characters')
                        .required("Can't be blank"),
                    expMonth: Yup.number()
                        .typeError('You must specify a number')
                        .min(1, 'Max 1')
                        .max(12, 'Max 12')
                        .required("Can't be blank"),
                    expYear: Yup.number()
                        .typeError('You must specify a number')
                        .min(1, 'Max 1')
                        .max(99, 'Max 99')
                        .required("Can't be blank"),
                    cvc: Yup.string()
                        .matches(/^[0-9]+$/, "Wrong format, numbers only")
                        .length(3, 'Must be exactly 3 digits')
                        .required("Can't be blank"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div className='flex flex-col gap-y-5 mx-5 sm:mx-48'>
                        <div className='grid'>
                            <label htmlFor="cardholderName" className='uppercase'>Cardholder Name</label>
                            <Field type="text" name="cardholderName" className="rounded-lg placeholder:text-gray-300 border-gray-300 focus:border-dark-grayish-violet hover:cursor-pointer" placeholder="e.g. Jane Appleseed" />
                            <ErrorMessage name="cardholderName" />
                        </div>
                        <div className='grid'>
                            <label htmlFor="cardNumber" className='uppercase'>Card Number</label>
                            <Field type="text" name="cardNumber" className="rounded-lg placeholder:text-gray-300 border-gray-300 focus:border-dark-grayish-violet hover:cursor-pointer" placeholder="e.g. 1234 5678 9123 0000" />
                            <ErrorMessage name="cardNumber" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className='grid'>
                                <label className='uppercase'>Exp. Date (MM/YY)</label>
                                <div className='grid grid-cols-2 gap-2'>
                                    <Field type="text" name="expMonth" className="rounded-lg placeholder:text-gray-300 border-gray-300 focus:border-dark-grayish-violet hover:cursor-pointer col-span-1" placeholder="MM" />
                                    <ErrorMessage name="expMonth" />
                                    <Field type="text" name="expYear" className="rounded-lg placeholder:text-gray-300 border-gray-300 focus:border-dark-grayish-violet hover:cursor-pointer col-span-1" placeholder="YY" />
                                    <ErrorMessage name="expYear" />
                                </div>
                            </div>
                            <div className='grid'>
                                <label htmlFor="cvc" className='uppercase'>CVC</label>
                                <Field type="text" name="cvc" className="rounded-lg placeholder:text-gray-300 border-gray-300 focus:border-dark-grayish-violet hover:cursor-pointer min-w-0" placeholder="e.g. 123" />
                                <ErrorMessage name="cvc" />
                            </div>
                        </div>
                        <button className='rounded bg-very-dark-violet text-white p-2' type="submit">Confirm</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default CardDetailsForm;
