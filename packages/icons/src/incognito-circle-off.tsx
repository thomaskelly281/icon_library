import { mdiIncognitoCircleOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IncognitoCircleOff(props: IconComponentProps) {
  return <Icon path={mdiIncognitoCircleOff} {...props} />;
}

export { mdiIncognitoCircleOff as path };
