import { mdiGoogleEarth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleEarth(props: IconComponentProps) {
  return <Icon path={mdiGoogleEarth} {...props} />;
}

export { mdiGoogleEarth as path };
