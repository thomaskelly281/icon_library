import { mdiTelevisionAmbientLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionAmbientLight(props: IconComponentProps) {
  return <Icon path={mdiTelevisionAmbientLight} {...props} />;
}

export { mdiTelevisionAmbientLight as path };
