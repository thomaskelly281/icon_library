import { mdiLicense } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function License(props: IconComponentProps) {
  return <Icon path={mdiLicense} {...props} />;
}

export { mdiLicense as path };
