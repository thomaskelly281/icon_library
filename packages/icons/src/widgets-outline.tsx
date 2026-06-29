import { mdiWidgetsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WidgetsOutline(props: IconComponentProps) {
  return <Icon path={mdiWidgetsOutline} {...props} />;
}

export { mdiWidgetsOutline as path };
