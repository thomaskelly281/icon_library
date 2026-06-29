import { mdiFlare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Flare(props: IconComponentProps) {
  return <Icon path={mdiFlare} {...props} />;
}

export { mdiFlare as path };
