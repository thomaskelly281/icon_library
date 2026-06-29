import { mdiCardsSpadeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsSpadeOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsSpadeOutline} {...props} />;
}

export { mdiCardsSpadeOutline as path };
