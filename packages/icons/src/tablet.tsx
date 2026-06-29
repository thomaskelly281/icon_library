import { mdiTablet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tablet(props: IconComponentProps) {
  return <Icon path={mdiTablet} {...props} />;
}

export { mdiTablet as path };
