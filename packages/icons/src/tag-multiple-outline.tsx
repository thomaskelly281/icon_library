import { mdiTagMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiTagMultipleOutline} {...props} />;
}

export { mdiTagMultipleOutline as path };
