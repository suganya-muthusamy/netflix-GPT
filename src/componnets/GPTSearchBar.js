import { langValues } from "../utilities/languageConstatnts";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const lang = useSelector((appStore) => appStore.config.lang);

  console.log("language....", lang);
  return (
    <div className="relative top-[20%] w-1/2 flex justify-center mx-auto">
      <form className=" grid grid-cols-12 w-full">
        <input
          className="col-span-10 py-2 px-4"
          type="text"
          placeholder={langValues[lang].placeholder}
        />
        <button
          className="col-span-2 text-white bg-red-700 px-4 py-2"
          type="button"
        >
          {langValues[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
