import { mdiBlur } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Blur(props: IconComponentProps) {
  return <Icon path={mdiBlur} {...props} />;
}

export { mdiBlur as path };
