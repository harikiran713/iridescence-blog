const Slider = () => {
    return (
      <div
        className="
          flex 
          border 
          rounded-lg 
          overflow-hidden 
          p-0 
          relative 
          shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
          bg-gray-50 
          h-[30vh] 
          md:h-[60vh] 
          items-center 
          justify-center
        "
      >
        {/* Image or content goes inside this container */}
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
          alt="Sample"
          className="w- h-full object-cover"
        />
      </div>
    );
  };
  
  export default Slider;
  