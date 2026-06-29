import { mdiHomeFloorA } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeFloorA(props: IconComponentProps) {
  return <Icon path={mdiHomeFloorA} {...props} />;
}

export { mdiHomeFloorA as path };
