import React from 'react';
import PhoneInput from 'react-phone-input-2/lib/lib.js';
import 'react-phone-input-2/lib/style.css';

// Handle the potential object wrapper from the import
const PhoneInputComponent = typeof PhoneInput === 'object' && PhoneInput.default ? PhoneInput.default : PhoneInput;

export const WrappedPhoneInput = React.forwardRef((props, ref) => {
  return <PhoneInputComponent {...props} inputRef={ref} />;
});

WrappedPhoneInput.displayName = 'WrappedPhoneInput';

export default WrappedPhoneInput;
