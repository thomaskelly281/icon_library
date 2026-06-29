import { mdiMapPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapPlus(props: IconComponentProps) {
  return <Icon path={mdiMapPlus} {...props} />;
}

export { mdiMapPlus as path };
