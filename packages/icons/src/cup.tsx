import { mdiCup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cup(props: IconComponentProps) {
  return <Icon path={mdiCup} {...props} />;
}

export { mdiCup as path };
