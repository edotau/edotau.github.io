import React from 'react'
import PropTypes from 'prop-types'

const Errors = ({ errors, },) => (
  <div>
    {errors.map((error,) => (
      <li key={error} className="errors">
        {error}
      </li>
    ),)}
  </div>
)

Errors.displayName = 'Errors'

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
}

export default Errors
