import { mdiTagEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagEditOutline(props: IconComponentProps) {
  return <Icon path={mdiTagEditOutline} {...props} />;
}

export { mdiTagEditOutline as path };
