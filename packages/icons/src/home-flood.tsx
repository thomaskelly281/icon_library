import { mdiHomeFlood } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeFlood(props: IconComponentProps) {
  return <Icon path={mdiHomeFlood} {...props} />;
}

export { mdiHomeFlood as path };
