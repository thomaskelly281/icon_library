import { mdiTapeDrive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TapeDrive(props: IconComponentProps) {
  return <Icon path={mdiTapeDrive} {...props} />;
}

export { mdiTapeDrive as path };
