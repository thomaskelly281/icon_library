import { mdiCardPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiCardPlusOutline} {...props} />;
}

export { mdiCardPlusOutline as path };
