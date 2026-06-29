import { mdiHoopHouse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HoopHouse(props: IconComponentProps) {
  return <Icon path={mdiHoopHouse} {...props} />;
}

export { mdiHoopHouse as path };
