import { mdiLinkedin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Linkedin(props: IconComponentProps) {
  return <Icon path={mdiLinkedin} {...props} />;
}

export { mdiLinkedin as path };
