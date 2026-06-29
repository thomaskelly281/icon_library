import { mdiCarEstate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarEstate(props: IconComponentProps) {
  return <Icon path={mdiCarEstate} {...props} />;
}

export { mdiCarEstate as path };
