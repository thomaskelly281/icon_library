import { mdiGooglePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GooglePlus(props: IconComponentProps) {
  return <Icon path={mdiGooglePlus} {...props} />;
}

export { mdiGooglePlus as path };
