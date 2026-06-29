import { mdiToolboxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToolboxOutline(props: IconComponentProps) {
  return <Icon path={mdiToolboxOutline} {...props} />;
}

export { mdiToolboxOutline as path };
