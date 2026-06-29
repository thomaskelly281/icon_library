import { mdiMopedElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MopedElectric(props: IconComponentProps) {
  return <Icon path={mdiMopedElectric} {...props} />;
}

export { mdiMopedElectric as path };
