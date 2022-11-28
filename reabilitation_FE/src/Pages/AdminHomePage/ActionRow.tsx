import React from 'react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';

interface Props {
  onCreateUser: () => void;
}

const ActionRow: React.FC<Props> = (props: Props) => {
  return (
    <>
      <PrimaryButton
        label="Create user"
        onClick={props.onCreateUser}
        style={{ margin: '0 0 0 auto', width: 'auto', height: '52px', fontSize: '18px', padding: '8px 20px', color: 'var(--textPrimary)', borderColor: '#3b82f6' }}
      />
    </>
  );
};

export default React.memo(ActionRow);