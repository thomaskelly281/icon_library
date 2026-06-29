import { mdiSignPole } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignPole(props: IconComponentProps) {
  return <Icon path={mdiSignPole} {...props} />;
}

export { mdiSignPole as path };
