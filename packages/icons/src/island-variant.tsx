import { mdiIslandVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IslandVariant(props: IconComponentProps) {
  return <Icon path={mdiIslandVariant} {...props} />;
}

export { mdiIslandVariant as path };
