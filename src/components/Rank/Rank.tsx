import React from 'react';

type Props = {
  name: string;
  entries: number;
};

export const Rank = ({ name, entries }: Props): JSX.Element => {
  return (
    <div>
      <p>
        {`${name}, your current entry count is `}
        <span>{`#${entries}`}</span>
      </p>
    </div>
  );
};
