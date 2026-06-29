import { mdiCampfire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Campfire(props: IconComponentProps) {
  return <Icon path={mdiCampfire} {...props} />;
}

export { mdiCampfire as path };
