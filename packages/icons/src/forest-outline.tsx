import { mdiForestOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ForestOutline(props: IconComponentProps) {
  return <Icon path={mdiForestOutline} {...props} />;
}

export { mdiForestOutline as path };
