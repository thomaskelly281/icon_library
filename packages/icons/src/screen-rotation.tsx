import { mdiScreenRotation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScreenRotation(props: IconComponentProps) {
  return <Icon path={mdiScreenRotation} {...props} />;
}

export { mdiScreenRotation as path };
