import { mdiGoogleMaps } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleMaps(props: IconComponentProps) {
  return <Icon path={mdiGoogleMaps} {...props} />;
}

export { mdiGoogleMaps as path };
