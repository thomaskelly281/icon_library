import { mdiVideoOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoOffOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoOffOutline} {...props} />;
}

export { mdiVideoOffOutline as path };
