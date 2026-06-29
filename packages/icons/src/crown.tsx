import { mdiCrown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Crown(props: IconComponentProps) {
  return <Icon path={mdiCrown} {...props} />;
}

export { mdiCrown as path };
