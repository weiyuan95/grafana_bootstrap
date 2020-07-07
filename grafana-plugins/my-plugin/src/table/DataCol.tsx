import React, { useState } from 'react';
import { css, cx } from 'emotion';
import { getTableStyles } from 'styles/styles';

interface Props {
  colWidth: number;
  cellValue: string | number;
  initialColor: string;
}

export const DataCol: React.FC<Props> = ({ colWidth, cellValue, initialColor }) => {
  const tableStyles = getTableStyles();
  const [color, setColor] = useState(initialColor);

  return (
    <td
      onClick={() => setColor(updateColor(color))}
      className={cx(
        tableStyles.border,
        tableStyles.tableTd,
        css`
          width: ${colWidth};
          background-color: ${color === 'none' ? '' : color};
        `
      )}
    >
      <span className={cx(tableStyles.cellContent)}> {cellValue} </span>
    </td>
  );
};

function updateColor(currentColor: string) {
  // TODO: will need to make an API call to update the status of the color
  // in the backend
  if (currentColor === 'none') {
    // cells with no color shouldnt be able to change color
    return 'none';
  }
  let colors = ['green', 'yellow', 'red'];
  let isCurrentColor = (color: string) => color === currentColor;
  let newColorIndex = (colors.findIndex(isCurrentColor) + 1) % colors.length;
  return colors[newColorIndex];
}
