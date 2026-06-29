import { mdiTagTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagTextOutline(props: IconComponentProps) {
  return <Icon path={mdiTagTextOutline} {...props} />;
}

export { mdiTagTextOutline as path };
