import { mdiBookArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiBookArrowUpOutline} {...props} />;
}

export { mdiBookArrowUpOutline as path };
