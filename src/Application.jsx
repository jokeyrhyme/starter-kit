import React, {PropTypes} from 'react';

import ApplicationLayout from './components/ApplicationLayout';
import DocumentContainer from './containers/DocumentContainer';
import DocumentListContainer from './containers/DocumentListContainer';

// Application is the root component for your application.
export default function Application (props) {
  return (
    <ApplicationLayout locationName={props.state.navigation.location.name}>
      {selectChildContainer(props)}
    </ApplicationLayout>
  );
}
Application.propTypes = {
  state: PropTypes.shape({
    navigation: PropTypes.shape({
      location: PropTypes.object
    }).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

/* eslint-disable react/prop-types */
// Define this as a separate function to allow us to use the switch statement
// with `return` statements instead of `break`
const selectChildContainer = (props) => {
  const location = props.state.navigation.location;

  let child;
  /* eslint-disable no-fallthrough */
  switch (location.name) {
    case 'documentEdit':
      child = <DocumentContainer {...props} id={location.options.id} />;
    case 'documentList':
      return <DocumentListContainer {...props} id={location.options.id}>{child}</DocumentListContainer>;

    default:
      return 'Not Found';
  }
};
