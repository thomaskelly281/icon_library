import { mdiTaxi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Taxi(props: IconComponentProps) {
  return <Icon path={mdiTaxi} {...props} />;
}

export { mdiTaxi as path };
