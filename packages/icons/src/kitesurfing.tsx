import { mdiKitesurfing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kitesurfing(props: IconComponentProps) {
  return <Icon path={mdiKitesurfing} {...props} />;
}

export { mdiKitesurfing as path };
