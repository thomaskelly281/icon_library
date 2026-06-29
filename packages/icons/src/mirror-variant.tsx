import { mdiMirrorVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MirrorVariant(props: IconComponentProps) {
  return <Icon path={mdiMirrorVariant} {...props} />;
}

export { mdiMirrorVariant as path };
