import { Layout, Menu } from "antd";

const { Header } = Layout;

const AppHeader = ({ menus }) => {
  return (
    <Header className="app-header">
      <div className="app-header-logo">My Cart</div>
      <Menu theme="dark" mode="horizontal" className="app-header-menus">
        {menus.map(menu => {
          return (
            <Menu.Item key={menu.key} className="app-header-menu-item">
              {menu.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
};

AppHeader.defaultProps = {
  menus: []
};

export default AppHeader;
