import { mdiMotorbike } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Motorbike(props: IconComponentProps) {
  return <Icon path={mdiMotorbike} {...props} />;
}

export { mdiMotorbike as path };
