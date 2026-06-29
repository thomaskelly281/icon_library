import { mdiMagnifyMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiMagnifyMinusOutline} {...props} />;
}

export { mdiMagnifyMinusOutline as path };
