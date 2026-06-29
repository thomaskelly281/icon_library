import { mdiVideoOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoOutline} {...props} />;
}

export { mdiVideoOutline as path };
