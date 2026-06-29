import { mdiIncognitoCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IncognitoCircle(props: IconComponentProps) {
  return <Icon path={mdiIncognitoCircle} {...props} />;
}

export { mdiIncognitoCircle as path };
