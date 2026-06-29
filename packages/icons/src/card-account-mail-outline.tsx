import { mdiCardAccountMailOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardAccountMailOutline(props: IconComponentProps) {
  return <Icon path={mdiCardAccountMailOutline} {...props} />;
}

export { mdiCardAccountMailOutline as path };
