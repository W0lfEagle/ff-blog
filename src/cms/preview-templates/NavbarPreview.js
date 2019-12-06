import React from 'react'
import PropTypes from 'prop-types'
import NavbarTemplate from '../../components/Navbar'

const NavbarPreview = ({ entry, widgetFor }) => (
    <NavbarTemplate
    />
)

NavbarPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default NavbarPreview
