import { mdiDotsTriangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsTriangle(props: IconComponentProps) {
  return <Icon path={mdiDotsTriangle} {...props} />;
}

export { mdiDotsTriangle as path };
