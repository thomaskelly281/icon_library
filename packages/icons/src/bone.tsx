import { mdiBone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bone(props: IconComponentProps) {
  return <Icon path={mdiBone} {...props} />;
}

export { mdiBone as path };
