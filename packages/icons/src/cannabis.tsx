import { mdiCannabis } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cannabis(props: IconComponentProps) {
  return <Icon path={mdiCannabis} {...props} />;
}

export { mdiCannabis as path };
