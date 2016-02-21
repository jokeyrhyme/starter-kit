import classnames from 'classnames';
import React, {PropTypes} from 'react';

import css from './ApplicationLayout.css';
import Link from './Link';

const ApplicationLayout = ({
  children,
  locationName
}) =>
  <div className={css.self}>
    <nav className={css.navbar}>
      <Link
        name='documentList'
        className={classnames({
          'link': true,
          [css.active]: locationName === 'documentList' || locationName === 'documentEdit'
        })}
      >
        Documents
      </Link>
    </nav>
    <main className={css.content}>
      {children}
    </main>
  </div>;

ApplicationLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locationName: PropTypes.string
};

export default ApplicationLayout;
