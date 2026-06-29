import { mdiLatitude } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Latitude(props: IconComponentProps) {
  return <Icon path={mdiLatitude} {...props} />;
}

export { mdiLatitude as path };
