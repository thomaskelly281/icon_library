import { mdiTruckTrailer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckTrailer(props: IconComponentProps) {
  return <Icon path={mdiTruckTrailer} {...props} />;
}

export { mdiTruckTrailer as path };
