import { mdiPublishOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PublishOff(props: IconComponentProps) {
  return <Icon path={mdiPublishOff} {...props} />;
}

export { mdiPublishOff as path };
