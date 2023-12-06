// own components
import PricingOption from './components/PricingOption';

// constants
import PRICING_OPTIONS from './data';

function App() {
  return (
    <div>
      <h1>Our Pricing Plans</h1>
      <div className="pricing-options">
        {PRICING_OPTIONS.map((pricingOption, pricingOptionIndex) => {
          const { title: pricingOptionTitle } = pricingOption;

          return (
            <PricingOption
              isBordered={pricingOptionTitle !== 'Beginner'}
              isPopular={pricingOptionTitle === 'Starter'}
              key={`pricingOption-${pricingOptionIndex + 1}`}
              {...pricingOption} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
