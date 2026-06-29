import { mdiKangaroo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kangaroo(props: IconComponentProps) {
  return <Icon path={mdiKangaroo} {...props} />;
}

export { mdiKangaroo as path };
