import PropTypes from 'prop-types';

export default function Shell({ children }) {
  return children;
}

Shell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
