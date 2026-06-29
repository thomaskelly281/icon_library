import { mdiFileSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSettings(props: IconComponentProps) {
  return <Icon path={mdiFileSettings} {...props} />;
}

export { mdiFileSettings as path };
