import { mdiTagOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagOffOutline(props: IconComponentProps) {
  return <Icon path={mdiTagOffOutline} {...props} />;
}

export { mdiTagOffOutline as path };
