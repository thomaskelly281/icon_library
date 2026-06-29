import { mdiCardsDiamondOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardsDiamondOutline(props: IconComponentProps) {
  return <Icon path={mdiCardsDiamondOutline} {...props} />;
}

export { mdiCardsDiamondOutline as path };
