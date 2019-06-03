import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./Card";
import { connect } from "react-redux";
import "../styles/style.css";
import { updateFavoriteFilms } from "../redux/actions/favoriteFilm/FavoriteFilmsAction";

class Favorite extends React.Component {
  render() {
    const { classes, favorite } = this.props;

    return (
      <Grid container className="gridRoot" spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="space-around"
            spacing={40}
          >
            {favorite.map((element, index) => {
              return (
                <RecipeReviewCard key={index} element={element} none={"none"} />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Favorite.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    favorite: store.favoritFilms.favoritFilms
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
)(withStyles()(Favorite));
