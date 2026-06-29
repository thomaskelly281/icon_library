import { mdiGoogleCloud } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleCloud(props: IconComponentProps) {
  return <Icon path={mdiGoogleCloud} {...props} />;
}

export { mdiGoogleCloud as path };
