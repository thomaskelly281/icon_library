import { mdiMushroom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mushroom(props: IconComponentProps) {
  return <Icon path={mdiMushroom} {...props} />;
}

export { mdiMushroom as path };
