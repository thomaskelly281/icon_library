import { mdiCardMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiCardMinusOutline} {...props} />;
}

export { mdiCardMinusOutline as path };
