import { mdiCardSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiCardSearchOutline} {...props} />;
}

export { mdiCardSearchOutline as path };
