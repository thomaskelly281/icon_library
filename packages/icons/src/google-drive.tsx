import { mdiGoogleDrive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleDrive(props: IconComponentProps) {
  return <Icon path={mdiGoogleDrive} {...props} />;
}

export { mdiGoogleDrive as path };
