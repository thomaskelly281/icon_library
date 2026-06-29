import { mdiPublish } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Publish(props: IconComponentProps) {
  return <Icon path={mdiPublish} {...props} />;
}

export { mdiPublish as path };
