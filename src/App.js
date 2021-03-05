export default function App() {
  //  We using xl for switch into responsive. XL is 1280px
  return (
    // Container
    <div className="xl:w-1000 xl:block xl:m-auto">
      {/* Skip, DESKTOP ONLY */}
      <div className="xl:h-13 xl:w-full" />
      {/* Title Bar */}
      <div class="xl:h-25 block xl:bg-grayPc ">
        <div className="xl:float-left">
          <div className="bg-graySmall xl:bg-grayPc p-2.5 xl:p-0">
            <a
              href="/"
              className="text-white block font-bold text-center no-underline text-xs xl:font-headerPc xl:text-40px xl:float-left xl:inline-block xl:font-normal xl:pt-3.75 xl:bg-grayPc"
            >
              California Institute of Technology{' '}
              <span className="hidden xl:inline">(Caltech)</span>
            </a>
          </div>
        </div>
        {/* Hidden makes the thing hidden on mobile so afterwards no need for xl. Would probs be a good idea to do it but im lazy */}
        <div className="hidden xl:block float-right pt-3.75">
          {/* Home Links */}
          <div className=" text-right pb-2.5 uppercase font-bold text-sm pr-2 h-4.5 text-links">
              <a href="http://www.admissions.caltech.edu/">Caltech Admissions Home</a>
          </div>
        </div>
      </div>
      {/* Content aka middle white part */}
      <div className=""></div>
    </div>
  );
}
