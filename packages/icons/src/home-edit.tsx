import { mdiHomeEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeEdit(props: IconComponentProps) {
  return <Icon path={mdiHomeEdit} {...props} />;
}

export { mdiHomeEdit as path };
