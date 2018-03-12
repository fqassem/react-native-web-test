import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text, View, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 48,
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
  },
  titlePositionBottom: {
    bottom: 0
  },
  titlePositionTop: {
    top: 0
  },
  rootSubtitle: {
    height: 68
  },
  titleWrap: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  titleWrapActionPosLeft: {
    marginLeft: 0
  },
  titleWrapActionPosRight: {
    marginRight: 0
  },
  title: {
    lineHeight: '24px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  subtitle: {
    lineHeight: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  actionIcon: {},
  actionIconActionPosLeft: {
    order: -1
  }
});

const GridListTileBar = (props) => {
  const {
    actionIcon,
    actionPosition,
    subtitle,
    title,
    titlePosition
  } = props;

  return (
    <View style={[styles.root, styles.titlePositionBottom, styles.rootSubtitle]}>
      <View style={[styles.titleWrap, styles.titleWrapActionPosLeft]}>
        <View style={styles.title}><Text>Hello This is a test</Text></View>
        {subtitle && <View style={styles.subtitle}><Text>THis is still a test</Text></View>}
      </View>
    </View>
  );
};

GridListTileBar.propTypes = {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: PropTypes.node,
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: PropTypes.node,
  /**
   * Title to be displayed on tile.
   */
  title: PropTypes.node,
  /**
   * Position of the title bar.
   */
  titlePosition: PropTypes.oneOf(['top', 'bottom'])
};

GridListTileBar.defaultProps = {
  actionPosition: 'right',
  titlePosition: 'bottom'
};

export default GridListTileBar;
