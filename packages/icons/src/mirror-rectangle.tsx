import { mdiMirrorRectangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MirrorRectangle(props: IconComponentProps) {
  return <Icon path={mdiMirrorRectangle} {...props} />;
}

export { mdiMirrorRectangle as path };
