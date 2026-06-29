import { mdiSmokingPipe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokingPipe(props: IconComponentProps) {
  return <Icon path={mdiSmokingPipe} {...props} />;
}

export { mdiSmokingPipe as path };
