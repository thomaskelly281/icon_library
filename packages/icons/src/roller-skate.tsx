import { mdiRollerSkate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RollerSkate(props: IconComponentProps) {
  return <Icon path={mdiRollerSkate} {...props} />;
}

export { mdiRollerSkate as path };
