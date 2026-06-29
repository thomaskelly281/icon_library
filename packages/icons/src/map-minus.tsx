import { mdiMapMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMinus(props: IconComponentProps) {
  return <Icon path={mdiMapMinus} {...props} />;
}

export { mdiMapMinus as path };
