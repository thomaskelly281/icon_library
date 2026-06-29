import { mdiGoogleNearby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleNearby(props: IconComponentProps) {
  return <Icon path={mdiGoogleNearby} {...props} />;
}

export { mdiGoogleNearby as path };
