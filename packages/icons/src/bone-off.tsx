import { mdiBoneOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoneOff(props: IconComponentProps) {
  return <Icon path={mdiBoneOff} {...props} />;
}

export { mdiBoneOff as path };
