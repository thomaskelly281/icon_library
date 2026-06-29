import { mdiNas } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nas(props: IconComponentProps) {
  return <Icon path={mdiNas} {...props} />;
}

export { mdiNas as path };
