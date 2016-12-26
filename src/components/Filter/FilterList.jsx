import React, { Component, PropTypes } from 'react';

export default class FilterList extends Component {

  handleClick( e, filter ) {
    this.props.onFilterChange( filter );
  }

  render() {
    const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, filter } = this.props;
    return (
      <div className="filterList">
        <button
          className={filter == SHOW_ALL ? 'clicked' : 'unclicked'}
          onClick={e => this.handleClick( e, SHOW_ALL )}>
          All
        </button>
        <button
          className={filter == SHOW_COMPLETED ? 'clicked' : 'unclicked'}
          onClick={e => this.handleClick( e, SHOW_COMPLETED )}>
          Completed
        </button>
        <button
          className={filter == SHOW_ACTIVE ? 'clicked' : 'unclicked'}
          onClick={e => this.handleClick( e, SHOW_ACTIVE )}>
          Active
        </button>
      </div>
    )
  }
}

FilterList.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
