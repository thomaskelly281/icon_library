import { mdiCross } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cross(props: IconComponentProps) {
  return <Icon path={mdiCross} {...props} />;
}

export { mdiCross as path };
