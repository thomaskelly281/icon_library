import { mdiStove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stove(props: IconComponentProps) {
  return <Icon path={mdiStove} {...props} />;
}

export { mdiStove as path };
