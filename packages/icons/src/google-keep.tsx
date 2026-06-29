import { mdiGoogleKeep } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleKeep(props: IconComponentProps) {
  return <Icon path={mdiGoogleKeep} {...props} />;
}

export { mdiGoogleKeep as path };
