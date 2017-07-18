/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { push, RouterAction} from 'react-router-redux';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'app/components/Button';

interface INotFoundProps {
  dispatch?: (action: RouterAction) => void;
}

export class NotFound extends React.Component<INotFoundProps, {}> {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  private redirect() {
    this.props.dispatch(push('/'));
  }

  public render() {
    return (
      <article>
        <FormattedMessage {...messages.header} />
        <Button
          handleRoute={this.redirect}
        >
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);
