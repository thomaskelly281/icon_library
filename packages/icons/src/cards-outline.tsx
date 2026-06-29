import { mdiCardsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsOutline} {...props} />;
}

export { mdiCardsOutline as path };
