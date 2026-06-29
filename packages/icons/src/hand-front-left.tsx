import { mdiHandFrontLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandFrontLeft(props: IconComponentProps) {
  return <Icon path={mdiHandFrontLeft} {...props} />;
}

export { mdiHandFrontLeft as path };
