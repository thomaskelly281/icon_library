import { mdiGoogleClassroom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleClassroom(props: IconComponentProps) {
  return <Icon path={mdiGoogleClassroom} {...props} />;
}

export { mdiGoogleClassroom as path };
