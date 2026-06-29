import { mdiExitToApp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExitToApp(props: IconComponentProps) {
  return <Icon path={mdiExitToApp} {...props} />;
}

export { mdiExitToApp as path };
