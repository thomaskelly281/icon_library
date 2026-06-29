import { mdiFingerprintOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FingerprintOff(props: IconComponentProps) {
  return <Icon path={mdiFingerprintOff} {...props} />;
}

export { mdiFingerprintOff as path };
