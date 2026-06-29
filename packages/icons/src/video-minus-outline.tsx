import { mdiVideoMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoMinusOutline} {...props} />;
}

export { mdiVideoMinusOutline as path };
