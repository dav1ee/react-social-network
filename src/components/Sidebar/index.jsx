import { connect } from 'react-redux';

import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
  return {
    navLinks: state.sidebar.navLinks,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
