import { mdiGoogleHangouts } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleHangouts(props: IconComponentProps) {
  return <Icon path={mdiGoogleHangouts} {...props} />;
}

export { mdiGoogleHangouts as path };
