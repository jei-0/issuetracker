const SideBar = (props) => {
  const pages = [
    "Dashboard",
    "Projects",
    "Issues",
    "Users",
    "Account",
    "Settings",
  ];

  return (
    <div>
      <div>
        <h1>Account</h1>
        <div>Profile Picture</div>
      </div>
      <div>
        <nav>
          <ul>
            {pages.map((page, i) => {
              return (
                <li key={page + i}>
                  <a href={"/" + (page !== "Home" && page.toLowerCase())}>
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
