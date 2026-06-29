import { mdiCardsHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsHeartOutline} {...props} />;
}

export { mdiCardsHeartOutline as path };
