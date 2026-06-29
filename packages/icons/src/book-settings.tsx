import { mdiBookSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookSettings(props: IconComponentProps) {
  return <Icon path={mdiBookSettings} {...props} />;
}

export { mdiBookSettings as path };
