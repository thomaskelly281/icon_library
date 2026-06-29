import { mdiDecagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Decagram(props: IconComponentProps) {
  return <Icon path={mdiDecagram} {...props} />;
}

export { mdiDecagram as path };
