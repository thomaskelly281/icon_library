import { mdiServerMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiServerMinusOutline} {...props} />;
}

export { mdiServerMinusOutline as path };
