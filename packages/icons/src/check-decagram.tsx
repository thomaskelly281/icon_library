import { mdiCheckDecagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckDecagram(props: IconComponentProps) {
  return <Icon path={mdiCheckDecagram} {...props} />;
}

export { mdiCheckDecagram as path };
