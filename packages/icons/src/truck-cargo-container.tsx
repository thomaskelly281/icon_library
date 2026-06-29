import { mdiTruckCargoContainer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckCargoContainer(props: IconComponentProps) {
  return <Icon path={mdiTruckCargoContainer} {...props} />;
}

export { mdiTruckCargoContainer as path };
