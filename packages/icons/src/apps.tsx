import { mdiApps } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Apps(props: IconComponentProps) {
  return <Icon path={mdiApps} {...props} />;
}

export { mdiApps as path };
