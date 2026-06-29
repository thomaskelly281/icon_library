import { mdiSkate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Skate(props: IconComponentProps) {
  return <Icon path={mdiSkate} {...props} />;
}

export { mdiSkate as path };
