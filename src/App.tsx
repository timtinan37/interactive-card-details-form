import React from 'react';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 sm:bg-[url('./images/bg-main-mobile.png')] md:bg-[url('./images/bg-main-desktop.png')]"></div>
      <div className="w-4/5 flex flex-col flex-wrap place-content-center">
        <div className='mx-64'>
          <form className='grid gap-y-5'>
            <div className='grid'>
              <label htmlFor="cardholder-name" className='uppercase'>Cardholder Name</label>
              <input type="text" name="cardholder_name" id="cardholder-name" placeholder="e.g. Jane Appleseed" />
            </div>
            <div className='grid'>
              <label htmlFor="card-number" className='uppercase'>Card Number</label>
              <input type="number" name="card_number" id="card-number" placeholder="e.g. 1234 5678 9123 0000" />
            </div>
            <div className='flex justify-between'>
              <div className='grid'>
                <label htmlFor="exp-date" className='uppercase'>Exp. Date (MM/YY)</label>
                <div id="exp-date" className='flex gap-5'>
                  <input type="number" name="exp-month" placeholder="MM" />
                  <input type="number" name="exp-year" placeholder="YY" />
                </div>
              </div>
              <div className='grid'>
                <label htmlFor="cvc" className='uppercase'>CVC</label>
                <input type="number" name="cvc" id="cvc" placeholder="e.g. 123" />
              </div>
            </div>
            <button className='rounded bg-very-dark-violet text-white p-2' type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
