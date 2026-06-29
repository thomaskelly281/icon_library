import { mdiSpaceStation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpaceStation(props: IconComponentProps) {
  return <Icon path={mdiSpaceStation} {...props} />;
}

export { mdiSpaceStation as path };
