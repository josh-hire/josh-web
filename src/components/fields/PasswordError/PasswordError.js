import PasswordRequirement from './PasswordRequirement';
import PropTypes from 'prop-types';
import { passwordRequirement } from '../../../utils/validate';
import { useMemo, useState } from 'react';
import { Popover } from '@mantine/core';

const passwordQuality = {
  1: 'lemah',
  2: 'sedang',
  3: 'kuat'
};

const PasswordError = ({ value, target, othersRules=[]}) => {
  const [popoverOpened, setPopoverOpened] = useState(false);

  const mergePassword = useMemo(()=>
    [...passwordRequirement(value),...othersRules],
  [value,othersRules]);

  const checks = useMemo(()=> mergePassword
    .map(({ re, label }, index) => (
      <PasswordRequirement key={index} label={label} meets={re} />
    )),[mergePassword]);

  const passwordStrength = mergePassword
    .filter(({ re }) => !!re).length;

  return (
    <div>
      <Popover opened={popoverOpened} position="bottom" transition="pop" width="target">
        <Popover.Target>
          <div
            onBlurCapture={() => setPopoverOpened(false)}
            onFocusCapture={() => setPopoverOpened(true)}
          >
            { target }
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <PasswordRequirement
            label={`Kualitas kata sandi : ${passwordQuality[passwordStrength] ?? 'lemah'}`}
            medium={passwordStrength===2}
            meets={!(passwordStrength< 3)}
          />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

PasswordError.defaultProps = {
  othersRules: [],
  value: '',
};

PasswordError.propTypes = {
  othersRules: PropTypes.array,
  target: PropTypes.node.isRequired,
  value: PropTypes.string,
};

export default PasswordError;
