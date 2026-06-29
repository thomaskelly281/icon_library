import { mdiCardsVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsVariant(props: IconComponentProps) {
  return <Icon path={mdiCardsVariant} {...props} />;
}

export { mdiCardsVariant as path };
