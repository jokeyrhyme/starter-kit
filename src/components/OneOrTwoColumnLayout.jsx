import classnames from 'classnames'
import React, {PropTypes} from 'react'

import css from './OneOrTwoColumnLayout.css'

const OneOrTwoColumnLayout = ({
  left,
  right,
}) =>
  <div className={css.self}>
    <div className={classnames({[css.left]: true, [css.leftOpen]: left})}>
      {left}
    </div>
    <div className={classnames({[css.right]: true, [css.rightOpen]: right})}>
      {right}
    </div>
  </div>

OneOrTwoColumnLayout.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
}

export default OneOrTwoColumnLayout
