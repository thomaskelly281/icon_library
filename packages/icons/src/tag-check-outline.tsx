import { mdiTagCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiTagCheckOutline} {...props} />;
}

export { mdiTagCheckOutline as path };
