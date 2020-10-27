import React from "react";

function Nav() {
  // const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <img className="logo" src="../assets/logos/rsz_9.png" alt="Settle logo with the letter T forming a house in the middle of the word"></img> </a>

      <a className="navbar-brand" href="/home/">
        Condition Report
      </a>
      <a className="navbar-brand" href="/favorites/">
        Manage issues
      </a>
      {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
    </nav>
  );
}

export default Nav;
