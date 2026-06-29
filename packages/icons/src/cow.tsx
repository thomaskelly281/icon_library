import { mdiCow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cow(props: IconComponentProps) {
  return <Icon path={mdiCow} {...props} />;
}

export { mdiCow as path };
