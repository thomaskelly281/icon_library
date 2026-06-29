import { mdiSolid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Solid(props: IconComponentProps) {
  return <Icon path={mdiSolid} {...props} />;
}

export { mdiSolid as path };
