import { mdiFileMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiFileMarkerOutline} {...props} />;
}

export { mdiFileMarkerOutline as path };
