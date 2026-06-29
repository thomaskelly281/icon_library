import { mdiApplicationSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationSettings(props: IconComponentProps) {
  return <Icon path={mdiApplicationSettings} {...props} />;
}

export { mdiApplicationSettings as path };
