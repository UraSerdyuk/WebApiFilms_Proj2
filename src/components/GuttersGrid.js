import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./Card";
import { connect } from "react-redux";
import "../styles/style.css";

class GuttersGrid extends React.Component {
  render() {
    const { classes, films } = this.props;

    return (
      <Grid container className="gridRoot" spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="space-around"
            spacing={40}
          >
            {films.map((element, index) => {
              return (
                <RecipeReviewCard
                  key={index}
                  element={element}
                  remuve="remuve"
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(GuttersGrid);

const mapStateToProps = store => {
  return {
    films: store.films.films
  };
};

export default connect(mapStateToProps)(withStyles()(GuttersGrid));

// mapDispatchToProps
