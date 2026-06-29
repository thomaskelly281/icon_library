import { mdiTsunami } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tsunami(props: IconComponentProps) {
  return <Icon path={mdiTsunami} {...props} />;
}

export { mdiTsunami as path };
