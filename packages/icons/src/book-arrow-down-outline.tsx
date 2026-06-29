import { mdiBookArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiBookArrowDownOutline} {...props} />;
}

export { mdiBookArrowDownOutline as path };
