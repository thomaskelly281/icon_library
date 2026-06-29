import { mdiRolodex } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rolodex(props: IconComponentProps) {
  return <Icon path={mdiRolodex} {...props} />;
}

export { mdiRolodex as path };
