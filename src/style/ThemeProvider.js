import React from 'react';
import PropTypes from 'prop-types';

class ThemeProvider extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  };

  getChildContext() {
   const { theme } = this.props;
   return { theme };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
export default ThemeProvider;
