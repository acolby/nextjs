import { createModel } from '@rematch/core';
import type { RootModel } from '#src/stores/model';
import { navigation } from '#src/pages/navigation';

type stores_navigation_State = {
  name: string;
  layout: string;
  href: string;
}[];

export const stores_navigation = createModel<RootModel>()({
  state: navigation as unknown as stores_navigation_State,
});
