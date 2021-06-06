/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://strapi.io" target="_blank" rel="noopener noreferrer">
          Mantido por João Victor Lobão
        </A>
      </div>
    </Wrapper>
  );
}



export default LeftMenuFooter;
