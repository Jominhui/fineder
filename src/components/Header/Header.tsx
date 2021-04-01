import React from "react";
import "./Header.scss";

interface HeaderProps {
  searchType: string;
  handleSearchType: (searchType: string) => void;
}

const Header = ({ searchType, handleSearchType }: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div
          className="header-controller"
          onClick={
            searchType === "song"
              ? () => handleSearchType("artist")
              : () => handleSearchType("song")
          }
        >
          <input
            type="checkbox"
            id="switcher"
            className="header-controller-name "
          />
          <label
            className="header-controller-switch change"
            htmlFor="switcher"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
