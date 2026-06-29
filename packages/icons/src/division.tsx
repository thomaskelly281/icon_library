import { mdiDivision } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Division(props: IconComponentProps) {
  return <Icon path={mdiDivision} {...props} />;
}

export { mdiDivision as path };
