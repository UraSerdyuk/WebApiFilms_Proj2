import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink } from "react-router-dom";
import '../styles/style.css'
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

const style = { active: { color: "black" } };
class TemporaryDrawer extends React.Component {
  // передача пропсов в App
  toggleDrawer = () => () => {
    this.props.getToogleDrawer(false)
  };
  // toggleShowFavorite = () => {
  //   this.props.getFavoriteFilms();
  // };
  render() {
    //  console.log(this.props);
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {["Стандартний пошук"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <NavLink className='subMenuText'  to="/" activeStyle={style.active}>
                    {text}
                  </NavLink>
                }
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Divider />
        <List>
          {["Favorit"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <NavLink className='subMenuText' to="/favorite" activeStyle={style.active}>
                    {text}
                  </NavLink>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.handelsMenu} onClose={this.toggleDrawer()}>
          <div
            name="div"
            tabIndex={0}
            role="button"
            // onClick={this.toggleDrawer('left', false)}
            // onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
