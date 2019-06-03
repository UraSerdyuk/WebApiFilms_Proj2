import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { connect } from "react-redux";
import { updateFavoriteFilms } from "../redux/actions/favoriteFilm/FavoriteFilmsAction";
import "../styles/style.css";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  hendelClickAddToFavorite = e => {
    let id = +e.currentTarget.parentNode.parentNode.id;
    let dataFavoriteArr = JSON.parse(localStorage.getItem("dataFavorite"));
    let validate = dataFavoriteArr.some(element => {
      return element.show.id === id;
    });

    if (!validate) {
      console.log("added");
      let arr = this.props.films;
      let element = arr.find(element => {
        return element.show.id === id;
      });
      dataFavoriteArr.push(element);
      localStorage.setItem("dataFavorite", JSON.stringify(dataFavoriteArr));
      //обновление стора
      this.props.updateFavoriteFilmsAction(
        JSON.parse(localStorage.getItem("dataFavorite"))
      );
    }
  };
  remuveFromFavorite = e => {
    let id = +e.currentTarget.parentNode.parentNode.id;
    console.log(id);

    //удалить из локал стореджа
    let dataFavoriteArr = JSON.parse(localStorage.getItem("dataFavorite"));
    let newArr = dataFavoriteArr.filter(element => {
      return element.show.id !== id;
    });
    localStorage.setItem("dataFavorite", JSON.stringify(newArr));

    //обновление стора
    this.props.updateFavoriteFilmsAction(
      JSON.parse(localStorage.getItem("dataFavorite"))
    );
  };

  render() {
    const { classes, element, none, remuve } = this.props;
    const text = "`" + element.show.summary + "`";

    return (
      <Card id={element.show.id} className="card">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className="avatar">
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={element.show.name}
          subheader={element.show.premiered}
        />
        <CardMedia
          className="media"
          image={
            element.show.image
              ? element.show.image.medium
              : "https://pp.userapi.com/c607522/v607522080/5b67/ja_GTEj2wCs.jpg"
          }
          title={`type: ${element.show.language}`}
        />
        <CardContent>
          <a href={element.show.url} target="_blank">
            more about this film
          </a>
        </CardContent>

        <CardActions className="actions" disableActionSpacing>
          <IconButton
            className={none ? "none" : ""}
            aria-label="Add to favorites"
            onClick={this.hendelClickAddToFavorite}
          >
            <FavoriteIcon />
          </IconButton>

          <IconButton
            className={remuve ? "none" : ""}
            aria-label="Удилить"
            onClick={this.remuveFromFavorite}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              ["expandOpen"]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>DESCRIBING:</Typography>
            <Typography paragraph>{text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    films: store.films.films,
    favoritFilms: store.favoritFilms.favoritFilms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFavoriteFilmsAction: arr => dispatch(updateFavoriteFilms(arr))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RecipeReviewCard));
