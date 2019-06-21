import * as React from "react";

interface Props {}

export const StickyMenu = (props: Props) => {
  return (
    <>
      <article class="ba br3 pa2 w-30 fr">
        <ul class="list pl0 ml0 center ba b--light-silver br2">
          <li class="ph3 pv3 bb b--light-silver">Mackeral Tabby</li>
          <li class="ph3 pv3 bb b--light-silver">Burmese</li>
          <li class="ph3 pv3 bb b--light-silver">Orange Tabby</li>
          <li class="ph3 pv3 bb b--light-silver">Maine Coon</li>
          <li class="ph3 pv3 bb b--light-silver">Siamese</li>
          <li class="ph3 pv3 bb b--light-silver">Scottish Fold</li>
          <li class="ph3 pv3">American Bobtail</li>
        </ul>
      </article>
    </>
  );
};
