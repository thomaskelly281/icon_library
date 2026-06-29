import { mdiGoogleStreetView } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleStreetView(props: IconComponentProps) {
  return <Icon path={mdiGoogleStreetView} {...props} />;
}

export { mdiGoogleStreetView as path };
