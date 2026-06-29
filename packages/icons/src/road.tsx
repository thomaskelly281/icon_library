import { mdiRoad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Road(props: IconComponentProps) {
  return <Icon path={mdiRoad} {...props} />;
}

export { mdiRoad as path };
