import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

import withTheme from '../../../style/withTheme';

// Default Styles - can be overridden in the component by passing in props
export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 48,
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'row',
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
    marginLeft: 20, 
    marginRight: 20,
    color: 'white', 
    overflow: 'hidden'
  },
  titleWrapActionPosRight: {
    marginRight: 0
  },
  title: {
    lineHeight: 24,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  subtitle: {
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
    titlePosition,
    rootStyle,
    titleStyle,
    subtitleStyle,
    iconStyle
  } = props;

  return (
    <View style={[rootStyle, styles.root, styles.titlePositionBottom, styles.rootSubtitle]}>
      <View style={[ styles.titleWrap, styles.titleWrapActionPosRight, {color: props.theme.fontColor}]}>
        <View style={[titleStyle, styles.title]}><Text>{title}</Text></View>
        { subtitle ? <View style={[subtitleStyle, styles.subtitle]}><Text>{subtitle}</Text></View> : null }
      </View>
      {actionIcon ? (
        <View
          style={[iconStyle, styles.actionIcon]}
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

export default withTheme(GridListTileBar);
