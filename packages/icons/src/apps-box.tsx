import { mdiAppsBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppsBox(props: IconComponentProps) {
  return <Icon path={mdiAppsBox} {...props} />;
}

export { mdiAppsBox as path };
