import { mdiFleurDeLis } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FleurDeLis(props: IconComponentProps) {
  return <Icon path={mdiFleurDeLis} {...props} />;
}

export { mdiFleurDeLis as path };
