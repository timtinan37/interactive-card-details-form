function Form() {
    return (
        <div className="h-2/3 sm:h-screen sm:w-2/3 flex flex-col justify-evenly">
            <form className='flex flex-col gap-y-5 mx-5 sm:mx-72'>
                <div className='grid'>
                    <label htmlFor="cardholder-name" className='uppercase'>Cardholder Name</label>
                    <input type="text" name="cardholder_name" id="cardholder-name" className="rounded-lg" placeholder="e.g. Jane Appleseed" />
                </div>
                <div className='grid'>
                    <label htmlFor="card-number" className='uppercase'>Card Number</label>
                    <input type="number" name="card_number" id="card-number" className="rounded-lg" placeholder="e.g. 1234 5678 9123 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className='grid'>
                        <label className='uppercase'>Exp. Date (MM/YY)</label>
                        <div className='grid grid-cols-2 gap-2'>
                            <input type="number" name="exp-month" className="rounded-lg col-span-1" placeholder="MM" />
                            <input type="number" name="exp-year" className="rounded-lg col-span-1" placeholder="YY" />
                        </div>
                    </div>
                    <div className='grid'>
                        <label htmlFor="cvc" className='uppercase'>CVC</label>
                        <input type="number" name="cvc" id="cvc" className="rounded-lg min-w-0" placeholder="e.g. 123" />
                    </div>
                </div>
                <button className='rounded bg-very-dark-violet text-white p-2' type="submit">Confirm</button>
            </form>
        </div>
    );
}

export default Form;
