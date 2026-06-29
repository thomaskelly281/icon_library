import { mdiCarElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarElectric(props: IconComponentProps) {
  return <Icon path={mdiCarElectric} {...props} />;
}

export { mdiCarElectric as path };
