import { mdiHeadAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadAlert(props: IconComponentProps) {
  return <Icon path={mdiHeadAlert} {...props} />;
}

export { mdiHeadAlert as path };
