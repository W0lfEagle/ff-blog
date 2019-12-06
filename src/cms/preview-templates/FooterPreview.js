import React from 'react'
import PropTypes from 'prop-types'
import FooterTemplate from '../../components/Footer'

const FooterPreview = ({ entry, widgetFor }) => (
    <FooterTemplate
    />
)

FooterPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default FooterPreview
