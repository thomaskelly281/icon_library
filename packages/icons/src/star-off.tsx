import { mdiStarOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarOff(props: IconComponentProps) {
  return <Icon path={mdiStarOff} {...props} />;
}

export { mdiStarOff as path };
