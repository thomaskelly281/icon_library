import { mdiSpotlight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spotlight(props: IconComponentProps) {
  return <Icon path={mdiSpotlight} {...props} />;
}

export { mdiSpotlight as path };
