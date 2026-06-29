import { mdiSignDirection } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignDirection(props: IconComponentProps) {
  return <Icon path={mdiSignDirection} {...props} />;
}

export { mdiSignDirection as path };
