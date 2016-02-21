import classnames from 'classnames'
import React, {PropTypes} from 'react'
import * as actions from '../actions/documentListView'

import css from './DocumentList.css'
import Link from './Link'

function mapValue(fn) {
  return e => fn(e.target.value)
}

const DocumentList = ({
  id: activeId,
  query,
  documents,
  onChangeQuery,
}) =>
    <div className={css.self}>
      <header className={css.header}>
        <input
          className={css.query}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={mapValue(onChangeQuery)}
        />
      </header>
      <ul className={css.list}>
        {documents.map(([id, data]) =>
          <li
            key={id}
            className={classnames({
              [css.active]: activeId == id
            })}
          >
            <Link
              className={css.link}
              name='documentEdit'
              options={{id}}
            >
              {data.title}
            </Link>
          </li>
        )}
        <li
          className={classnames({
            [css.active]: activeId == 'new'
          })}
        >
          <Link
            className={css.link}
            name='documentEdit'
            options={{id: 'new'}}
          >
            Add Document
          </Link>
        </li>
      </ul>
    </div>

DocumentList.propTypes = {
  id: PropTypes.string,
  query: PropTypes.string,
  documents: PropTypes.array.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
}

export default DocumentList
