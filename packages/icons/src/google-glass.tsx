import { mdiGoogleGlass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleGlass(props: IconComponentProps) {
  return <Icon path={mdiGoogleGlass} {...props} />;
}

export { mdiGoogleGlass as path };
