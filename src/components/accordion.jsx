import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
  <div className="border-0 border-b-2 border-b-[#C2CDD8]">
  <h2>
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 gap-3" onClick={onClick}>
      <span className="flex items-center">
        <img alt="icon" />
        {title}
      </span>
      <svg className={`w-3 h-3 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
      </svg>
    </button>
  </h2>
  <div className={`overflow-hidden transition-all ${isOpen ? "block" : "hidden"}`}>
    <div className="p-5 text-gray-500">{content}</div>
  </div>
</div>

  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[450px]">
      {[
        { title: "Anti-loss technology", content: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."},
        { title: "Exchange easily", content: "Flowbite is first conceptualized and designed using the Figma software, so everything you see in the library has a design equivalent in our Figma file."},
        { title: "Fully encrypted", content: "The main difference is that Flowbite is open source under the MIT license, whereas Tailwind UI is a paid product. Flowbite also relies on smaller standalone components.", icon: "/whirl/public/images/dropdown-3.svg"  },
        { title: "Plenty of options", content: "The main difference is that Flowbite is open source under the MIT license, whereas Tailwind UI is a paid product. Flowbite also relies on smaller standalone components.", icon: "/whirl/public/images/dropdown-4.svg"  }
      ].map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
