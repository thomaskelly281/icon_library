import { mdiKettle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kettle(props: IconComponentProps) {
  return <Icon path={mdiKettle} {...props} />;
}

export { mdiKettle as path };
