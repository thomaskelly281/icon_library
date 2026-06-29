import { mdiJeepney } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Jeepney(props: IconComponentProps) {
  return <Icon path={mdiJeepney} {...props} />;
}

export { mdiJeepney as path };
