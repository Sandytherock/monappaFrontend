import { AlignJustify, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../public/February 2025.svg"

function DropDownMenu({ setShowMenu }) {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full top-14 h-[calc(100vh-3.5rem)] pl-10 pt-5 pr-5 z-10 bg-white">
      <div className="h-14 border-b border-black/30 flex items-center pl-1">
        <span
          className="font-thin hover:underline underline-offset-2"
          onClick={() => {
            navigate("/artical");
            setShowMenu(false);
          }}
        >
          Publish an Chapter
        </span>
      </div>
      <div className="h-14 border-b border-black/30 flex items-center pl-1">
        <span
          className="font-thin hover:underline underline-offset-2"
          onClick={() => {
            navigate("/books");
            setShowMenu(false);
          }}
        >
          Publish a Book
        </span>
      </div>
      <div className="h-14 border-b border-black/30 flex items-center pl-1">
        <span className="font-thin hover:underline underline-offset-2" onClick={() => {
            navigate("/conference");
            setShowMenu(false);
          }}>
          List of Books
        </span>
      </div>
    </div>
  );
}

function SearchMenu() {
  return (
    <div className="fixed w-full top-14 h-28 pl-10 pt-5 pr-5 bg-white z-10">
      <div className="h-full flex justify-center items-center gap-5">
        <input
          type="text"
          placeholder="Search"
          className="border-b rounded-lg pl-3 py-2 font-thin w-lg"
        />
        <button className="bg-cyan-700 lg:px-12 py-2 rounded-lg">
          <span className="text-white max-lg:hidden font-thin">Search</span>
          <Search className="text-white lg:hidden my-1 mx-3" />
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const nagigate = useNavigate();
  return (
    <>
      <div className="w-full h-28 max-lg:h-14 flex justify-center">
        <div className="w-full max-w-[76rem]  h-full flex flex-col px-5">
          <div className="flex justify-between w-full h-1/2 max-lg:h-full">
            <div
              className="flex items-center gap-1"
              onClick={() => {
                nagigate("/");
                setShowMenu(false);
                showSearchMenu(false);
              }}
            >
              <img src={logo} alt="" className="w-48" />
              {/* <span className="text-blue-950 font-bold text-3xl max-lg:text-2xl">
                SPRINGER
              </span>
              <span className="text-red-700 font-bold text-3xl max-lg:text-2xl">
                NATURE
              </span> */}
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                {showSearchMenu ? (
                  <X
                    className="w-4 max-lg:w-6"
                    onClick={() => setShowSearchMenu(false)}
                  />
                ) : (
                  <Search
                    className="w-4 max-lg:w-6"
                    onClick={() => {
                      setShowMenu(false);
                      setShowSearchMenu(true);
                    }}
                  />
                )}

                <span className="max-lg:hidden">search</span>
              </div>
              <div className="hidden max-lg:block">
                {showMenu ? (
                  <X onClick={() => setShowMenu(false)} />
                ) : (
                  <Menu
                    onClick={() => {
                      setShowSearchMenu(false);
                      setShowMenu(true);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="max-lg:hidden w-full flex items-center h-1/2 gap-7">
            <div
              className="flex gap-2 border border-black/60 px-3 py-1 rounded-sm"
              onClick={() => nagigate("/")}
            >
              <AlignJustify className="w-5 text-black/60" />
              <span className="text-black/60">Home</span>
            </div>
            <nav className="h-full flex items-center">
              <NavLink
                to="artical"
                className={({ isActive }) =>
                  `font-thin ${
                    isActive ? "bg-cyan-100" : ""
                  } btn px-5 py-5 h-full hover:bg-cyan-600 cursor-pointer`
                }
              >
                Publish an Chapter
              </NavLink>
              {/* </button> */}

              <NavLink
                to="books"
                className={({ isActive }) =>
                  `font-thin ${
                    isActive ? "bg-cyan-100" : ""
                  } btn px-5 py-5 h-full hover:bg-cyan-600 cursor-pointer`
                }
              >
                Publish a Book
              </NavLink>
              <NavLink
                to="conference"
                className={({ isActive }) =>
                  `font-thin ${
                    isActive ? "bg-cyan-100" : ""
                  } btn px-5 py-5 h-full hover:bg-cyan-600 cursor-pointer`
                }
              >
                List of Books
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      {showMenu && <DropDownMenu setShowMenu={setShowMenu} />}
      {showSearchMenu && <SearchMenu />}
    </>
  );
}
