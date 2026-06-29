import { mdiIsland } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Island(props: IconComponentProps) {
  return <Icon path={mdiIsland} {...props} />;
}

export { mdiIsland as path };
