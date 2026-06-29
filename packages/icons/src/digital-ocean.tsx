import { mdiDigitalOcean } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DigitalOcean(props: IconComponentProps) {
  return <Icon path={mdiDigitalOcean} {...props} />;
}

export { mdiDigitalOcean as path };
