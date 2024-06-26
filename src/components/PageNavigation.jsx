import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function PageNavigation() {
  const location = useLocation();
  const path = location.pathname.split("/").filter((item) => item !== "");

  const pageName = path.map((item) => {
    const withoutHyphenArray = item.split("-").filter((item) => item !== "");
    const firstUppercaseWord = withoutHyphenArray.map((data1) => {
      const firstLetter = data1.charAt(0).toUpperCase();
      const restOfWord = data1.slice(1);
      const letter = firstLetter + restOfWord;
      return letter;
    });
    return firstUppercaseWord.join(" ");
  });

  const toPath = (index) => {
    let pathName = "";
    for (let i = 0; i <= index; i++) {
      pathName += "/" + path[i];
    }
    return pathName;
  };

  return (
    <div className="flex flex-row gap-2 slink items-center max-w-[1200px] flex-wrap">
      <Link to="/">
        <span className="hover:font-extrabold -bold">Home</span>
      </Link>
      {pageName.map((data, index) => {
        return (
          <span
            className="flex flex-row gap-2 justify-center items-center"
            key={index}
          >
            <i className="fa-solid fa-angle-right"></i>
            <Link to={toPath(index)}>
              <span className="hover:font-extrabold -bold">{data}</span>
            </Link>
          </span>
        );
      })}
    </div>
  );
}
