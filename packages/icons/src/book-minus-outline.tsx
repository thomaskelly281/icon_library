import { mdiBookMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiBookMinusOutline} {...props} />;
}

export { mdiBookMinusOutline as path };
