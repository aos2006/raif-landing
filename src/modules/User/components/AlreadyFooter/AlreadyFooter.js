import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './AlreadyFooter.css';
import Button from 'components/Button';

const AlreadyFooter = ({ classes, buttons, descr }) => (
  <div className={cx([
    s.root,
    classes.root,
  ])}>
    <Button type="submit"
            isLoading={buttons[0].isLoading}
            theme="black"
            fullWidth
            {...buttons[0]}
    >
      {buttons[0].txt}
    </Button>
    <div className={s.already}>
      <span />
      <span>{descr}</span>
    </div>
    <Button type="submit" theme="gray" fullWidth {...buttons[1]}>
      {buttons[1].txt}
    </Button>
  </div>
);

AlreadyFooter.defaultProps = {
  classes: { root: '' },
}

AlreadyFooter.propTypes = {
  buttons: PropTypes.array.isRequired,
  descr: PropTypes.string.isRequired,
}

export default withStyles(s)(AlreadyFooter);
