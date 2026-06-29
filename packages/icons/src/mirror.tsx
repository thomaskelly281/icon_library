import { mdiMirror } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mirror(props: IconComponentProps) {
  return <Icon path={mdiMirror} {...props} />;
}

export { mdiMirror as path };
