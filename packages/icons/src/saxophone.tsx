import { mdiSaxophone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Saxophone(props: IconComponentProps) {
  return <Icon path={mdiSaxophone} {...props} />;
}

export { mdiSaxophone as path };
