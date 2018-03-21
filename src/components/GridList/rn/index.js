import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowY: 'auto',
    padding: 0,
    width: '100%'
  }
});

const GridList = (props) => {
  const {
    cellHeight,
    children,
    cols,
    spacing
  } = props;

  return (
    <ScrollView
      horizontal
      style={[{ margin: -spacing / 2 }, styles.root]}
    >
      {React.Children.map(children, (currentChild) => {
        const childCols = currentChild.props.cols || 1;
        const childRows = currentChild.props.rows || 1;

        return React.cloneElement(currentChild, {
          style: Object.assign(
            {
              width: `${100 / cols * childCols}%`,
              height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
              padding: spacing / 2
            },
            currentChild.props.style,
          )
        });
      })}
    </ScrollView>
  );
};

GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: PropTypes.node.isRequired,
  /**
   * Number of columns.
   */
  cols: PropTypes.number,
  /**
   * Number of px for the spacing between tiles.
   */
  spacing: PropTypes.number,
  /**
   * @ignore
   */
  style: PropTypes.object
};

GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  spacing: 4
};

export default GridList;
