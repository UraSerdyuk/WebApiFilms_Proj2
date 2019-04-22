import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./Card";
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 40
  },
  paper: {
    width: 250,
    display: "block"
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class Favorite extends React.Component {
  state = {
    spacing: "40"
  };

  render() {
    const { classes, list } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="space-around"
            spacing={Number(spacing)}
          >
            {list.map((element, index) => {
              return <RecipeReviewCard key={index} element={element} />;
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

export default withStyles(styles)(Favorite);
