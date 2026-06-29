import { mdiVideoSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoSwitch(props: IconComponentProps) {
  return <Icon path={mdiVideoSwitch} {...props} />;
}

export { mdiVideoSwitch as path };
