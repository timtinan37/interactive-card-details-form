import Form from "./Form";
import card_logo from './images/card-logo.svg';

function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row h-screen justify-between">
        <div className="h-1/3 sm:h-screen sm:w-1/3 bg-[url('./images/bg-main-mobile.png')] sm:bg-[url('./images/bg-main-desktop.png')] bg-cover mb-28">
          <div className="grid min-w-full sm:min-w-0 sm:ml-96 sm:mt-32 justify-center">
            <div className="bg-[url('./images/bg-card-back.png')] w-72 h-40 bg-contain bg-no-repeat bg-transparent shadow-2xl ml-10 mt-8 sm:mt-4 sm:order-last">
              <p className="text-sm text-white mt-[68px] ml-56">000</p>
            </div>
            <div className="bg-[url('./images/bg-card-front.png')] w-72 h-40 bg-contain bg-no-repeat bg-transparent shadow-2xl -translate-y-16 sm:translate-y-0">
              <img src={card_logo} alt="card logo" className="ml-4 mt-4" />
              <div className="mt-6 mx-6">
                <h4 className="text-xl text-white col-span-2">0000 0000 0000 0000</h4>
                <div className="flex justify-between">
                  <p className="text-sm text-white">Jane Appleseed</p>
                  <p className="text-sm text-white">00/00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}

export default App;
