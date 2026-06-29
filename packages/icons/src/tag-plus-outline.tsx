import { mdiTagPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiTagPlusOutline} {...props} />;
}

export { mdiTagPlusOutline as path };
