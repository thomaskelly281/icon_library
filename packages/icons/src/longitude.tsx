import { mdiLongitude } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Longitude(props: IconComponentProps) {
  return <Icon path={mdiLongitude} {...props} />;
}

export { mdiLongitude as path };
