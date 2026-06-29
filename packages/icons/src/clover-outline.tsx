import { mdiCloverOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloverOutline(props: IconComponentProps) {
  return <Icon path={mdiCloverOutline} {...props} />;
}

export { mdiCloverOutline as path };
