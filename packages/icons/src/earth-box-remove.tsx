import { mdiEarthBoxRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthBoxRemove(props: IconComponentProps) {
  return <Icon path={mdiEarthBoxRemove} {...props} />;
}

export { mdiEarthBoxRemove as path };
