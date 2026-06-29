import { mdiSofa } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sofa(props: IconComponentProps) {
  return <Icon path={mdiSofa} {...props} />;
}

export { mdiSofa as path };
