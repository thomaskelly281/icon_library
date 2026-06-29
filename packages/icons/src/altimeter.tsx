import { mdiAltimeter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Altimeter(props: IconComponentProps) {
  return <Icon path={mdiAltimeter} {...props} />;
}

export { mdiAltimeter as path };
