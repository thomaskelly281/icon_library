import { mdiFileEyeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileEyeOutline(props: IconComponentProps) {
  return <Icon path={mdiFileEyeOutline} {...props} />;
}

export { mdiFileEyeOutline as path };
