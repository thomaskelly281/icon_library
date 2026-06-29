import { mdiFaceWoman } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceWoman(props: IconComponentProps) {
  return <Icon path={mdiFaceWoman} {...props} />;
}

export { mdiFaceWoman as path };
