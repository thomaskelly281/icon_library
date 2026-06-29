import { mdiGoogleChrome } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleChrome(props: IconComponentProps) {
  return <Icon path={mdiGoogleChrome} {...props} />;
}

export { mdiGoogleChrome as path };
