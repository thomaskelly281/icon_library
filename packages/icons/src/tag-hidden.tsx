import { mdiTagHidden } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagHidden(props: IconComponentProps) {
  return <Icon path={mdiTagHidden} {...props} />;
}

export { mdiTagHidden as path };
