import { mdiIncognitoOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IncognitoOff(props: IconComponentProps) {
  return <Icon path={mdiIncognitoOff} {...props} />;
}

export { mdiIncognitoOff as path };
