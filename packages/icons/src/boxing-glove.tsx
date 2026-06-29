import { mdiBoxingGlove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoxingGlove(props: IconComponentProps) {
  return <Icon path={mdiBoxingGlove} {...props} />;
}

export { mdiBoxingGlove as path };
