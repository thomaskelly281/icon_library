import { mdiTriangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Triangle(props: IconComponentProps) {
  return <Icon path={mdiTriangle} {...props} />;
}

export { mdiTriangle as path };
