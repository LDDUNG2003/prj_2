function listMenu() {
    var menu =[]
    var menuItem = ["Home", "About", "Contact", "News" , "Products"]
    for (var i = 0; i < menuItem.length; i++) {
        menu.push(
            <li className="navBar__list--item" key={i}>
                <Link to={menuItem[i]}>{menuItem[i]}</Link>
            </li>
        )
    }
    return (  );
}

export default listMenu;