import PropTypes from 'prop-types';

// own components
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

const PricingOption = ({
  cost,
  features,
  isBordered = true,
  isPopular = false,
  title,
}) => {
  return (
    <div className={`pricing-option ${isBordered ? 'pricing-option--bordered' : ''}`}>
      {isPopular && (
        <div className="pricing-option__popular gradient">
          Popular
        </div>
      )}
      <p className="pricing-option__title">
        {title}
      </p>
      <div className="pricing-option__price">
        <span className="pricing-option__price-current">$</span>
        <span className="pricing-option__price-amount">{cost}</span>
        <span className="pricing-option__price-period"> / Monthly</span>
      </div>
      <div className="pricing-option__features">
        {features.map((feature, featureIndex) => (
          <div
            className="pricing-option__feature"
            key={`${title}-feature-${featureIndex + 1}`}
          >
            <ArrowIcon
              alt="feature-arrow"
              className="pricing-option__feature-arrow"
            />
            {feature}
          </div>
        ))}
      </div>
      <button className="pricing-option__start gradient">
        Start Now
      </button>
    </div>
  );
}

PricingOption.propTypes = {
  cost: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isBordered: PropTypes.bool,
  isPopular: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default PricingOption;
