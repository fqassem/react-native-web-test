import React from 'react';
import PropTypes from 'prop-types';

const withTheme = (WrappedComponent) => {
  return class ThemeComponent extends React.Component {
    static contextTypes = {
      theme: PropTypes.object.isRequired
    };

    render() {
      const { theme } = this.context;
      return (
        <WrappedComponent {...this.props} theme={theme} />
      );
    }
  }
}
export default withTheme;