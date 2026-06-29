import { mdiFaceMan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceMan(props: IconComponentProps) {
  return <Icon path={mdiFaceMan} {...props} />;
}

export { mdiFaceMan as path };
