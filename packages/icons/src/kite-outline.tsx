import { mdiKiteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KiteOutline(props: IconComponentProps) {
  return <Icon path={mdiKiteOutline} {...props} />;
}

export { mdiKiteOutline as path };
