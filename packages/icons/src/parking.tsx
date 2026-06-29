import { mdiParking } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Parking(props: IconComponentProps) {
  return <Icon path={mdiParking} {...props} />;
}

export { mdiParking as path };
