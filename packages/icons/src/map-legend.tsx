import { mdiMapLegend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapLegend(props: IconComponentProps) {
  return <Icon path={mdiMapLegend} {...props} />;
}

export { mdiMapLegend as path };
