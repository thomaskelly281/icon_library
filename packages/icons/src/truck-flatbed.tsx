import { mdiTruckFlatbed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckFlatbed(props: IconComponentProps) {
  return <Icon path={mdiTruckFlatbed} {...props} />;
}

export { mdiTruckFlatbed as path };
