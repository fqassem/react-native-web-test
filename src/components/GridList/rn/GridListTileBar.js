import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 48,
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily
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
    marginLeft: theme.mixins.gutters().paddingLeft,
    marginRight: theme.mixins.gutters().paddingRight,
    color: theme.palette.common.white,
    overflow: 'hidden'
  },
  titleWrapActionPosLeft: {
    marginLeft: 0
  },
  titleWrapActionPosRight: {
    marginRight: 0
  },
  title: {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: '24px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  subtitle: {
    fontSize: theme.typography.pxToRem(12),
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
        <View style={styles.title}>{title}</View>
        {subtitle ? <View style={styles.subtitle}>{subtitle}</View> : null}
      </View>
      {actionIcon ? (
        <View
          style={styles.actionIcon}
        >
          {actionIcon}
        </View>
      ) : null}
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
