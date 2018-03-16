import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    flexShrink: 0,
    padding: 10
  },
  tile: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden'
  }
});

class GridListTile extends React.Component {
//   componentDidMount() {
//     this.ensureImageCover();
//   }

//   componentDidUpdate() {
//     this.ensureImageCover();
//   }

//   componentWillUnmount() {
//     this.handleResize.cancel();
//   }

//   imgElement = null;

//   handleResize = debounce(() => {
//     this.fit();
//   }, 166);

//   fit = () => {
//     const imgElement = this.imgElement;

//     if (!imgElement) {
//       return;
//     }

//     if (!imgElement.complete) {
//       return;
//     }

//     if (
//       imgElement.width / imgElement.height >
//       imgElement.parentNode.offsetWidth / imgElement.parentNode.offsetHeight
//     ) {
//       imgElement.classList.remove(...this.props.classes.imgFullWidth.split(' '));
//       imgElement.classList.add(...this.props.classes.imgFullHeight.split(' '));
//     } else {
//       imgElement.classList.remove(...this.props.classes.imgFullHeight.split(' '));
//       imgElement.classList.add(...this.props.classes.imgFullWidth.split(' '));
//     }

//     imgElement.removeEventListener('load', this.fit);
//   };

//   ensureImageCover() {
//     if (!this.imgElement) {
//       return;
//     }

//     if (this.imgElement.complete) {
//       this.fit();
//     } else {
//       this.imgElement.addEventListener('load', this.fit);
//     }
//   }

  render() {
    const { children, cols, rows } = this.props;

    return (
      <View style={styles.root}>
        <View style={styles.tile}>
          {React.Children.map(children, (child) => {
            if (child && child.type === 'img') {
              return React.cloneElement(child, {
                key: 'img',
                ref: (node) => {
                  this.imgElement = node;
                }
              });
            }

            return child;
          })}
        </View>
      </View>
    );
  }
}

GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
   */
  children: PropTypes.node,
  /**
   * Width of the tile in number of grid cells.
   */
  cols: PropTypes.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Height of the tile in number of grid cells.
   */
  rows: PropTypes.number
};

GridListTile.defaultProps = {
  cols: 1,
  component: View,
  rows: 1
};

export default GridListTile;
