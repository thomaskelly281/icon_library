import { mdiVideo4kBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Video4kBox(props: IconComponentProps) {
  return <Icon path={mdiVideo4kBox} {...props} />;
}

export { mdiVideo4kBox as path };
