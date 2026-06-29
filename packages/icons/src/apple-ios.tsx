import { mdiAppleIos } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppleIos(props: IconComponentProps) {
  return <Icon path={mdiAppleIos} {...props} />;
}

export { mdiAppleIos as path };
