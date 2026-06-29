import { mdiGraphOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GraphOutline(props: IconComponentProps) {
  return <Icon path={mdiGraphOutline} {...props} />;
}

export { mdiGraphOutline as path };
